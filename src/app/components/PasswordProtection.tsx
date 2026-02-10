import { useState, useEffect } from "react";
import { Lock } from "lucide-react";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const CORRECT_PASSWORD = "eXplorance";
const STORAGE_KEY = "app_authenticated";

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem(STORAGE_KEY);
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="size-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              <img 
                src="https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png" 
                alt="explorance" 
                className="h-auto mx-auto"
                style={{ width: '155px' }}
              />
            </h1>
            <p className="text-gray-600 text-center">
              This application is protected. Please enter the password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Access Application
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              For eXplorance employees only. If you don't have access, please contact your IT administrator.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}