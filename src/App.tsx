
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
import Settings from "./pages/Settings";
import Layout from "./components/Layout";
import { APIProvider } from "./context/APIContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <APIProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/ai-legacy-vault" element={<Layout><AILegacyVault /></Layout>} />
            <Route path="/conversational-avatars" element={<Layout><ConversationalAvatars /></Layout>} />
            <Route path="/quantum-secured-vault" element={<Layout><QuantumSecuredVault /></Layout>} />
            <Route path="/performance-monitoring" element={<Layout><PerformanceMonitoring /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </APIProvider>
  </QueryClientProvider>
);

export default App;
