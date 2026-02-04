import { useState, useEffect } from "react";
import { Settings, Mail } from "lucide-react";
import SignatureGenerator from "./components/SignatureGenerator";
import AdminPanel from "./components/AdminPanel";
import ToastContainer, { ToastData } from "./components/ToastContainer";
import PasswordProtection from "./components/PasswordProtection";
import type { AdminSettings } from "./types";
import { loadSettings, saveSettings } from "./utils/dataManager";

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
      name: "Amman",
      address: "King Hussein Business Park, Building OA2, Second Floor, Office B202, Amman, Building OA2, Jordan",
      phone: "",
    },
    {
      id: "3",
      name: "Chennai",
      address: "2nd Floor, Workez, Urban Square Building, OMR Road, next to Turyaa Hotel, Perungudi, Chennai, Tamil Nadu 600041, India",
      phone: "",
    },
    {
      id: "4",
      name: "Ho Chi Minh City",
      address: "WeWork - Lim Tower 3, 29A Nguyen Dinh Chieu, Saigon Ward, Level 4 W125, Ho Chi Minh City, Ho Chi Minh City, Vietnam, Viet Nam",
      phone: "",
    },
    {
      id: "5",
      name: "Melbourne",
      address: "222 Exhibition Street, Level 7, Melbourne, Victoria 3000, Australia",
      phone: "",
    },
  ],
  bannerCategories: [
    {
      id: "1",
      eventName: "BlueX",
      banners: [
        { id: "1-1", name: "Powerful Survey", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/Blue_X_Webinar_powerful_Survey_d6a9d8f25c.png", link: "https://www.explorance.com" },
        { id: "1-2", name: "Feedback Creator", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/Feedback_Creator_Blue_X_962b479778.png", link: "https://www.explorance.com" },
      ],
    },
    {
      id: "2",
      eventName: "Explorance World 2026",
      banners: [
        { id: "2-1", name: "EN (1)", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/EN_ew_Explorance_MAIL_1_1_df6b521744.png", link: "https://www.explorance.com/explorance-world" },
        { id: "2-2", name: "EN (2)", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/EN_ew_Explorance_MAIL_1_327918e5f3.png", link: "https://www.explorance.com/explorance-world" },
        { id: "2-3", name: "FR (1)", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL_1_1_ad3aabb187.png", link: "https://www.explorance.com/explorance-world" },
        { id: "2-4", name: "FR (2)", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/FR_ew_Explorance_MAIL_1_f094927e6e.png", link: "https://www.explorance.com/explorance-world" },
      ],
    },
    {
      id: "3",
      eventName: "MLY",
      banners: [
        { id: "3-1", name: "AI-Powered", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/MLY_AI_Powered_61cdad667d.png", link: "https://www.explorance.com" },
      ],
    },
    {
      id: "4",
      eventName: "Responsible AI",
      banners: [
        { id: "4-1", name: "Version 1", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/Responsible_AI_01_cd9b31060e.png", link: "https://www.explorance.com" },
        { id: "4-2", name: "Version 2", imageUrl: "https://stmarketingwebprod01.blob.core.windows.net/web/assets/Responsible_AI_02_32fb4f9939.png", link: "https://www.explorance.com" },
      ],
    },
  ],
  disclaimerEnglish:
    "Confidentiality Notice: This email contains confidential information intended only for the recipient. Unauthorized use is prohibited. If you received it in error, please delete it and notify the sender immediately.",
  disclaimerFrench:
    "Avis de Confidentialité : Ce courriel contient des informations confidentielles destinées uniquement au destinataire. Toute utilisation non autorisée est interdite. Si vous l'avez reçu par erreur, veuillez le détruire et en informer l'expéditeur immédiatement.",
  companyWebsite: "https://explorance.com",
  companyLogoUrl: "https://fdendpoint-marketing-explorance-prod-01-ebh8gbhmaudgf5gd.a03.azurefd.net/web/assets/Logo_explorance_x4_944ab67640.png",
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
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (type: ToastData['type'], message: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Load settings from localStorage on mount
  useEffect(() => {
    // Check version and clear old data if version changed
    const storedVersion = localStorage.getItem('emailSignatureSettings_version');
    const CURRENT_VERSION = '2.2'; // Updated to force refresh with new banner data
    
    if (!storedVersion || storedVersion !== CURRENT_VERSION) {
      // Version changed or first load, clear old data to force refresh with new defaults
      console.log('Version mismatch or first load. Clearing old data and loading defaults...');
      localStorage.removeItem('emailSignatureSettings');
      localStorage.removeItem('emailSignatureSettings_backup');
      localStorage.setItem('emailSignatureSettings_version', CURRENT_VERSION);
      
      // Load and save default settings
      setSettings(DEFAULT_SETTINGS);
      saveSettings(DEFAULT_SETTINGS).then(() => {
        addToast('success', 'Banners updated! New categories and images are now available.');
      });
      return;
    }
    
    const result = loadSettings(DEFAULT_SETTINGS);
    if (result.success && result.data) {
      setSettings(result.data);
    } else if (result.error) {
      addToast('error', result.error);
    }
  }, []);

  const handleUpdateSettings = async (newSettings: AdminSettings, password: string) => {
    if (password !== "eXplorance") {
      return { success: false, error: "Invalid password" };
    }
    
    const result = await saveSettings(newSettings);
    if (result.success) {
      setSettings(newSettings);
      addToast('success', 'Settings saved successfully!');
      return { success: true };
    } else {
      addToast('error', result.error || 'Failed to save settings');
      return { success: false, error: result.error };
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <svg width="116" height="21" viewBox="0 0 116 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.2096 0.97238H55.7537V14.5443H58.2096V0.97238Z" fill="#161525"/>
                  <path d="M29.2545 4.50174C26.3106 4.50174 24.6975 6.65603 24.6975 9.56736C24.6975 12.4787 26.5132 14.633 29.2382 14.633C31.7444 14.633 33.1225 13.1307 33.4256 11.3224H31.3068C30.8691 12.2273 29.9746 12.4802 29.3063 12.4802C28.2136 12.4802 27.4225 11.7024 27.2717 10.3983H33.4951C33.5276 10.1174 33.5439 9.83351 33.5454 9.5511C33.5454 6.4372 31.9145 4.50174 29.2575 4.50174H29.2545ZM27.3205 8.46582C27.5394 7.38054 28.1101 6.67378 29.2205 6.67378C30.3309 6.67378 30.8351 7.32583 31.0037 8.46582H27.3205Z" fill="#161525"/>
                  <path d="M40.366 4.56826L38.6509 7.53578L36.9357 4.56826H33.9268L37.0378 9.56292L33.9268 14.5206H36.9697L38.6509 11.6093L40.3498 14.5206H43.3764L40.2478 9.58066L43.3764 4.56826H40.366Z" fill="#161525"/>
                  <path d="M50.1395 4.50174C49.1133 4.50174 48.275 4.80928 47.6333 5.47908L47.4647 4.60967H44.9925V19.394L47.6333 19.4132V13.6039C48.272 14.2737 49.1119 14.6359 50.1395 14.6359C52.6265 14.6359 54.3934 12.4092 54.3934 9.53336C54.3934 6.65751 52.6279 4.50174 50.1395 4.50174ZM49.6175 12.1401C48.7097 12.1401 47.9364 11.5058 47.6333 10.5654V8.5013C47.9364 7.56093 48.7097 6.90887 49.6175 6.90887C50.895 6.90887 51.7497 8.06808 51.7497 9.53336C51.7497 10.9986 50.8965 12.1401 49.6175 12.1401Z" fill="#161525"/>
                  <path d="M64.8011 4.42929C62.011 4.42929 60.0253 6.67378 60.0253 9.55258C60.0253 12.4314 62.011 14.6729 64.8011 14.6729C67.5912 14.6729 69.5769 12.4107 69.5769 9.55258C69.5769 6.69448 67.5764 4.42929 64.8011 4.42929ZM64.8011 12.1564C63.5073 12.1564 62.6498 11.0164 62.6498 9.55258C62.6498 8.08878 63.5073 6.9281 64.8011 6.9281C66.0949 6.9281 66.9539 8.08583 66.9539 9.55258C66.9539 11.0193 66.0623 12.1564 64.8011 12.1564Z" fill="#161525"/>
                  <path d="M73.4094 5.94927L73.2601 4.59193H70.7539V14.5443H73.4272V10.2372C73.4272 7.73983 74.6204 6.99758 76.8737 6.99758V4.48251C74.8244 4.48251 73.6963 5.26025 73.4094 5.94927Z" fill="#161525"/>
                  <path d="M85.5501 11.253V8.26623C85.5501 5.64174 84.0404 4.5195 81.7841 4.5195C78.9585 4.5195 77.8999 6.29232 77.7816 8.21152H79.9344C80.0349 6.99908 80.8763 6.69154 81.7176 6.69154C82.6254 6.69154 83.1296 7.10702 83.1296 8.24848V8.41113L81.3139 8.59299C79.2794 8.79112 77.5302 9.87788 77.5302 11.7232C77.5302 13.5684 78.7737 14.6921 80.5406 14.6921C81.7501 14.6921 82.8768 14.2574 83.3987 13.5714C83.8526 14.5798 84.7132 14.5739 85.454 14.5679C85.5101 14.5679 85.5648 14.5679 85.6196 14.5679C85.7556 14.5679 85.8872 14.562 86.0084 14.5576C86.1119 14.5532 86.2066 14.5487 86.2908 14.5487V12.4462C85.9552 12.4506 85.5501 12.2155 85.5501 11.2574V11.253ZM83.1296 11.7409C82.6254 12.2126 82.0192 12.628 81.2459 12.628C80.5909 12.628 80.1355 12.2126 80.1355 11.5605C80.1355 10.9085 80.8925 10.527 81.8684 10.3821L83.1296 10.2017V11.7409Z" fill="#161525"/>
                  <path d="M93.0346 4.46475C91.9227 4.46475 90.7635 4.97191 90.0745 5.80287L89.9237 4.59043H87.518V14.5457H90.1928V8.61366C90.1928 7.5816 91.2012 6.96504 92.2451 6.96504C93.289 6.96504 93.7739 7.45445 93.7739 8.45101V14.5487H96.4487V8.10354C96.4487 5.76886 95.186 4.46475 93.0346 4.46475Z" fill="#161525"/>
                  <path d="M102.147 6.83642C103.241 6.83642 104.081 7.64964 104.182 8.57375H106.518C106.383 7.01681 105.475 4.50174 101.911 4.50174C99.187 4.50174 97.4379 6.56436 97.4379 9.55258C97.4379 12.5408 99.187 14.6345 101.911 14.6345C105.493 14.6345 106.383 12.1386 106.518 10.4723H104.182C104.065 11.3402 103.241 12.2643 102.147 12.2643C100.751 12.2643 100.079 11.1066 100.079 9.5511C100.079 7.99563 100.751 6.83642 102.147 6.83642Z" fill="#161525"/>
                  <path d="M115.999 9.5511C116.001 6.4372 114.372 4.50174 111.715 4.50174C108.773 4.50174 107.158 6.65603 107.158 9.56736C107.158 12.4787 108.974 14.633 111.699 14.633C114.205 14.633 115.583 13.1307 115.886 11.3224H113.767C113.33 12.2273 112.435 12.4802 111.767 12.4802C110.674 12.4802 109.883 11.7024 109.732 10.3983H115.95C115.982 10.1174 115.999 9.83351 116 9.5511H115.999ZM109.781 8.46582C110 7.38054 110.571 6.67378 111.681 6.67378C112.791 6.67378 113.296 7.32583 113.464 8.46582H109.781Z" fill="#161525"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7722 0.389792C10.2739 -0.129191 9.46515 -0.13067 8.96687 0.389792L6.28472 3.18579C5.78644 3.70625 5.78644 4.54757 6.28472 5.06803L8.96687 7.86403C9.46515 8.38449 10.2739 8.38449 10.7722 7.86403L13.2385 5.29277L13.2991 5.22919L13.4529 5.06803C13.4721 5.04881 13.4899 5.0281 13.5076 5.0074L15.7477 2.63428L13.5061 3.24346C13.4899 3.22423 13.4721 3.20501 13.4529 3.18579L10.7722 0.389792Z" fill="#161525"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.1783 19.9987C9.67659 20.5177 10.4854 20.5177 10.9837 19.9987L13.6658 17.2027C14.1641 16.6823 14.1641 15.841 13.6658 15.3205L10.9837 12.5245C10.4854 12.0055 9.67659 12.0055 9.1783 12.5245L6.71203 15.0958L6.6514 15.1593L6.49763 15.3205C6.47841 15.3397 6.46067 15.3604 6.44292 15.3811L4.20287 17.7543L6.4444 17.1451C6.46067 17.1643 6.47841 17.1835 6.49763 17.2027L9.17978 19.9987H9.1783Z" fill="#161525"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.6881 10.8966C20.1997 10.3909 20.1997 9.56885 19.6881 9.06317L16.935 6.33962C16.4234 5.83395 15.5939 5.83395 15.0823 6.33962L12.3292 9.06317C11.8176 9.56885 11.8176 10.3909 12.3292 10.8966L14.8605 13.4013L14.9241 13.4634L15.0823 13.6202C15.1015 13.6394 15.1207 13.6571 15.1414 13.6749L17.4791 15.9504L16.8788 13.6734C16.898 13.6557 16.9172 13.6379 16.9364 13.6202L19.6896 10.8966H19.6881Z" fill="#0064F0"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.383692 9.7108C-0.127897 10.2165 -0.127897 11.0386 0.383692 11.5442L3.13681 14.2678C3.6484 14.7735 4.47789 14.7735 4.98948 14.2678L7.7426 11.5442C8.25419 11.0386 8.25419 10.2165 7.7426 9.7108L5.21127 7.20608L5.14769 7.14398L4.98948 6.98725C4.97026 6.96803 4.95103 6.95029 4.93033 6.93255L2.5927 4.65701L3.193 6.93402C3.17378 6.95177 3.15456 6.96951 3.13533 6.98725L0.383692 9.7108Z" fill="#161525"/>
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
            <AdminPanel settings={settings} onUpdate={handleUpdateSettings} defaultSettings={DEFAULT_SETTINGS} />
          )}
        </main>

        {/* Toast Container */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </PasswordProtection>
  );
}