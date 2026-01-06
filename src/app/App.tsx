import { useState, useEffect } from "react";
import { Settings, Mail } from "lucide-react";
import SignatureGenerator from "./components/SignatureGenerator";
import AdminPanel from "./components/AdminPanel";
import type { AdminSettings } from "./types";

const DEFAULT_SETTINGS: AdminSettings = {
  offices: [
    {
      id: "1",
      name: "Montréal",
      address: "1470 Rue Peel, Suite 500, Montréal, QC, Canada H3A 1T1",
      phone: "+1.514.938.2111",
    },
    {
      id: "2",
      name: "New York",
      address: "123 Broadway, Suite 200, New York, NY, USA 10001",
      phone: "+1.212.555.1234",
    },
  ],
  bannerCategories: [
    {
      id: "1",
      eventName: "Explorance World 2026",
      banners: [
        { id: "1-1", name: "FR (1)", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL-1.png" },
        { id: "1-2", name: "FR (2)", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL.png" },
        { id: "1-3", name: "EN", imageUrl: "https://stonlinehelpprod01.blob.core.windows.net/web/assets/EN_ew_Explorance_MAIL-1.png" },
      ],
    },
  ],
  disclaimerEnglish:
    "Confidentiality Notice: This email contains confidential information intended only for the recipient. Unauthorized use is prohibited. If you received it in error, please delete it and notify the sender immediately.",
  disclaimerFrench:
    "Avis de Confidentialité : Ce courriel contient des informations confidentielles destinées uniquement au destinataire. Toute utilisation non autorisée est interdite. Si vous l'avez reçu par erreur, veuillez le détruire et en informer l'expéditeur immédiatement.",
  companyWebsite: "https://explorance.com",
  companyLogoUrl: "https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_2026_d6e2f94610.png",
  fields: {
    fullName: { visible: true, required: true, label: "Full Name" },
    jobTitle: { visible: true, required: true, label: "Job Title" },
    email: { visible: true, required: true, label: "Email Address" },
    officeLocation: { visible: true, required: true, label: "Office Location" },
    cellPhone: { visible: true, required: false, label: "Cell Phone Number" },
    linkedin: { visible: true, required: false, label: "LinkedIn Profile URL" },
    companyWebsite: { visible: true, required: false, label: "Company Website" },
    banner: { visible: true, required: false, label: "Email Banner (Optional)" },
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"generator" | "admin">("generator");
  const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("emailSignatureSettings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({
          ...DEFAULT_SETTINGS,
          ...parsed,
          bannerCategories: parsed.bannerCategories || DEFAULT_SETTINGS.bannerCategories,
          companyLogoUrl: parsed.companyLogoUrl || DEFAULT_SETTINGS.companyLogoUrl,
          disclaimerEnglish: parsed.disclaimerEnglish || DEFAULT_SETTINGS.disclaimerEnglish,
          disclaimerFrench: parsed.disclaimerFrench || DEFAULT_SETTINGS.disclaimerFrench,
        });
      } catch (err) {
        console.error('Error parsing localStorage:', err);
        setSettings(DEFAULT_SETTINGS);
      }
    }
  }, []);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("emailSignatureSettings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = async (newSettings: AdminSettings, password: string) => {
    if (password !== "eXplorance") {
      return { success: false, error: "Invalid password" };
    }
    
    localStorage.setItem("emailSignatureSettings", JSON.stringify(newSettings));
    setSettings(newSettings);
    return { success: true };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <svg width="116" height="21" viewBox="0 0 116 21" fill="none">
                <path d="M102.147 6.83642C103.241 6.83642 104.081 7.64964 104.182 8.57375H106.518C106.383 7.0168 105.475 4.50174 101.911 4.50174C99.187 4.50174 97.4379 6.56436 97.4379 9.55257C97.4379 12.5408 99.187 14.6345 101.911 14.6345C105.493 14.6345 106.383 12.1386 106.518 10.4723H104.182C104.065 11.3402 103.241 12.2643 102.147 12.2643C100.751 12.2643 100.079 11.1066 100.079 9.5511C100.079 7.99563 100.751 6.83642 102.147 6.83642Z" fill="#161525"/>
                <path d="M115.999 9.5511C116.001 6.4372 114.372 4.50174 111.715 4.50174C108.773 4.50174 107.158 6.65603 107.158 9.56736C107.158 12.4787 108.974 14.633 111.699 14.633C114.205 14.633 115.583 13.1307 115.886 11.3224H113.767C113.33 12.2273 112.435 12.4802 111.767 12.4802C110.674 12.4802 109.883 11.7024 109.732 10.3983H115.95C115.982 10.1174 115.999 9.8335 116 9.5511H115.999ZM109.781 8.46582C110 7.38054 110.571 6.67377 111.681 6.67377C112.791 6.67377 113.296 7.32583 113.464 8.46582H109.781Z" fill="#161525"/>
                <path d="M19.6881 10.8966C20.1997 10.3909 20.1997 9.56884 19.6881 9.06316L16.935 6.33961C16.4234 5.83394 15.5939 5.83394 15.0823 6.33961L12.3292 9.06316C11.8176 9.56884 11.8176 10.3909 12.3292 10.8966L14.8605 13.4013L14.9241 13.4634L15.0823 13.6202C15.1015 13.6394 15.1207 13.6571 15.1414 13.6749L17.4791 15.9504L16.8788 13.6734C16.898 13.6556 16.9172 13.6379 16.9364 13.6202L19.6896 10.8966H19.6881Z" fill="#0064F0"/>
              </svg>
            </div>
            <nav className="flex gap-2">
              <button
                onClick={() => setActiveTab("generator")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "generator"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Mail className="size-4" />
                <span>Generate Signature</span>
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "admin"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Settings className="size-4" />
                <span>Admin Settings</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        {activeTab === "generator" ? (
          <SignatureGenerator settings={settings} />
        ) : (
          <AdminPanel settings={settings} onUpdate={updateSettings} />
        )}
      </main>
    </div>
  );
}