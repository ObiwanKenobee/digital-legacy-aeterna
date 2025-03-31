
import * as Sentry from '@sentry/react';
import { toast } from "sonner";

// Sentry monitoring integration
export class SentryService {
  private static isInitialized = false;

  // Initialize Sentry with DSN
  static initialize(dsn: string, clientId: string, clientSecret: string) {
    if (this.isInitialized) return this;
    
    try {
      Sentry.init({
        dsn: dsn,
        integrations: [
          new Sentry.BrowserTracing(),
          new Sentry.Replay()
        ],
        // Performance monitoring
        tracesSampleRate: 1.0,
        // Session replay for error analysis
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
      });
      
      this.isInitialized = true;
      console.log("Sentry monitoring initialized");
    } catch (error) {
      console.error("Failed to initialize Sentry:", error);
    }
    
    return this;
  }

  // Track AI avatar performance
  static trackAvatarPerformance(avatarId: string, responseTime: number, accuracy: number) {
    if (!this.isInitialized) {
      console.warn("Sentry not initialized for performance tracking");
      return;
    }
    
    Sentry.addBreadcrumb({
      category: 'avatar-performance',
      message: `Avatar ${avatarId} response time: ${responseTime}ms, accuracy: ${accuracy}`,
      level: 'info',
    });
    
    Sentry.setTag("avatar_id", avatarId);
    
    // Create a performance span
    const transaction = Sentry.startTransaction({
      name: "AI Avatar Response",
    });
    
    Sentry.configureScope(scope => {
      scope.setSpan(transaction);
    });
    
    const span = transaction.startChild({
      op: "AI processing",
      description: `Processing response for avatar ${avatarId}`,
    });
    
    // Add performance data
    span.setData("response_time_ms", responseTime);
    span.setData("accuracy_score", accuracy);
    
    span.finish();
    transaction.finish();
  }

  // Report AI generation errors
  static reportGenerationError(error: Error, context: Record<string, any>) {
    if (!this.isInitialized) {
      console.warn("Sentry not initialized for error reporting");
      return;
    }
    
    Sentry.withScope(scope => {
      scope.setLevel(Sentry.Severity.Error);
      scope.setContext("ai_generation", context);
      Sentry.captureException(error);
    });
    
    // Also show user-friendly error
    toast.error("An error occurred during content generation. Our team has been notified.");
  }
}
