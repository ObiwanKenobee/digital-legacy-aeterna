
import { useAPI } from "../context/APIContext";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

interface APIStatusCheckProps {
  requiredServices: string[];
  showWarning?: boolean;
}

/**
 * A component to check API service statuses and display warnings
 * @param requiredServices Array of service names to check (e.g., ['claudeAI', 'elevenLabs'])
 * @param showWarning Whether to display a warning banner (default: true)
 */
const APIStatusCheck: React.FC<APIStatusCheckProps> = ({ 
  requiredServices,
  showWarning = true
}) => {
  const { status } = useAPI();
  const navigate = useNavigate();
  
  // Convert service names to display names
  const serviceDisplayNames: Record<string, string> = {
    claudeAI: "Claude AI",
    elevenLabs: "ElevenLabs",
    sentry: "Sentry"
  };
  
  // Check which required services are missing
  const missingServices = requiredServices.filter(
    service => !status[service as keyof typeof status]
  );
  
  if (missingServices.length === 0 || !showWarning) {
    return null;
  }
  
  return (
    <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 my-4">
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-amber-400 mr-3 mt-0.5" />
        <div>
          <h3 className="font-medium text-amber-300 mb-1">API Configuration Required</h3>
          <p className="text-white/70 text-sm mb-2">
            The following API services need to be configured for full functionality:
          </p>
          <ul className="list-disc pl-5 text-sm text-amber-200/70 mb-3">
            {missingServices.map(service => (
              <li key={service}>{serviceDisplayNames[service] || service}</li>
            ))}
          </ul>
          <button 
            onClick={() => navigate('/settings')}
            className="bg-amber-500/20 hover:bg-amber-500/30 text-white px-4 py-2 rounded text-sm transition-colors"
          >
            Configure API Keys
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIStatusCheck;
