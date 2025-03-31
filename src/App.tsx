
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AILegacyVault from "./pages/AILegacyVault";
import ConversationalAvatars from "./pages/ConversationalAvatars";
import QuantumSecuredVault from "./pages/QuantumSecuredVault";
import PerformanceMonitoring from "./pages/PerformanceMonitoring";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-legacy-vault" element={<AILegacyVault />} />
          <Route path="/conversational-avatars" element={<ConversationalAvatars />} />
          <Route path="/quantum-secured-vault" element={<QuantumSecuredVault />} />
          <Route path="/performance-monitoring" element={<PerformanceMonitoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
