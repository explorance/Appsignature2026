import { useState, useEffect } from "react";
import { Plus, Trash2, Eye, EyeOff, Save, Lock, Check } from "lucide-react";
import type { AdminSettings, Office, BannerCategory, Banner } from "../types";
import Dialog from "./Dialog";

interface AdminPanelProps {
  settings: AdminSettings;
  onUpdate: (settings: AdminSettings, password: string) => Promise<{ success: boolean; error?: string }>;
}

const ADMIN_PASSWORD = "eXplorance";

export default function AdminPanel({ settings, onUpdate }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Ensure bannerCategories exists in settings
  const [localSettings, setLocalSettings] = useState<AdminSettings>(() => {
    return {
      ...settings,
      bannerCategories: settings.bannerCategories || [],
    };
  });
  const [activeSection, setActiveSection] = useState<"offices" | "banners" | "fields" | "defaults">("offices");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleSave = async () => {
    setShowSaveDialog(true);
  };

  const confirmSave = async () => {
    setShowSaveDialog(false);
    setIsSaving(true);
    const result = await onUpdate(localSettings, password);
    setIsSaving(false);
    if (result.success) {
      alert("Settings saved successfully!");
    } else {
      alert(`Failed to save settings: ${result.error}`);
    }
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="size-8 text-blue-600" />
            </div>
            <h2 className="text-gray-900 text-center mb-2">Admin Access Required</h2>
            <p className="text-sm text-gray-500 text-center">
              Enter the admin password to access settings
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-900">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter admin password"
                autoFocus
              />
              {passwordError && (
                <p className="mt-2 text-sm text-red-600">Incorrect password. Please try again.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Panel Content
  const addOffice = () => {
    const newOffice: Office = {
      id: Date.now().toString(),
      name: "",
      address: "",
      phone: "",
    };
    setLocalSettings({
      ...localSettings,
      offices: [...localSettings.offices, newOffice],
    });
  };

  const updateOffice = (id: string, field: keyof Office, value: string) => {
    setLocalSettings({
      ...localSettings,
      offices: localSettings.offices.map((office) =>
        office.id === id ? { ...office, [field]: value } : office
      ),
    });
  };

  const deleteOffice = (id: string) => {
    if (localSettings.offices.length <= 1) {
      alert("You must have at least one office location.");
      return;
    }
    setLocalSettings({
      ...localSettings,
      offices: localSettings.offices.filter((office) => office.id !== id),
    });
  };

  const addBannerCategory = () => {
    const newCategory: BannerCategory = {
      id: Date.now().toString(),
      eventName: "",
      banners: [],
    };
    setLocalSettings({
      ...localSettings,
      bannerCategories: [...localSettings.bannerCategories, newCategory],
    });
  };

  const updateBannerCategory = (id: string, eventName: string) => {
    setLocalSettings({
      ...localSettings,
      bannerCategories: localSettings.bannerCategories.map((cat) =>
        cat.id === id ? { ...cat, eventName } : cat
      ),
    });
  };

  const deleteBannerCategory = (id: string) => {
    setLocalSettings({
      ...localSettings,
      bannerCategories: localSettings.bannerCategories.filter((cat) => cat.id !== id),
    });
  };

  const addBannerToCategory = (categoryId: string) => {
    const newBanner: Banner = {
      id: `${categoryId}-${Date.now()}`,
      name: "",
      imageUrl: "",
    };
    setLocalSettings({
      ...localSettings,
      bannerCategories: localSettings.bannerCategories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, banners: [...cat.banners, newBanner] }
          : cat
      ),
    });
  };

  const updateBanner = (categoryId: string, bannerId: string, field: keyof Banner, value: string) => {
    setLocalSettings({
      ...localSettings,
      bannerCategories: localSettings.bannerCategories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              banners: cat.banners.map((banner) =>
                banner.id === bannerId ? { ...banner, [field]: value } : banner
              ),
            }
          : cat
      ),
    });
  };

  const deleteBanner = (categoryId: string, bannerId: string) => {
    setLocalSettings({
      ...localSettings,
      bannerCategories: localSettings.bannerCategories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, banners: cat.banners.filter((banner) => banner.id !== bannerId) }
          : cat
      ),
    });
  };

  const toggleFieldVisibility = (fieldKey: string) => {
    setLocalSettings({
      ...localSettings,
      fields: {
        ...localSettings.fields,
        [fieldKey]: {
          ...localSettings.fields[fieldKey as keyof typeof localSettings.fields],
          visible: !localSettings.fields[fieldKey as keyof typeof localSettings.fields].visible,
        },
      },
    });
  };

  const toggleFieldRequired = (fieldKey: string) => {
    setLocalSettings({
      ...localSettings,
      fields: {
        ...localSettings.fields,
        [fieldKey]: {
          ...localSettings.fields[fieldKey as keyof typeof localSettings.fields],
          required: !localSettings.fields[fieldKey as keyof typeof localSettings.fields].required,
        },
      },
    });
  };

  const updateFieldLabel = (fieldKey: string, label: string) => {
    setLocalSettings({
      ...localSettings,
      fields: {
        ...localSettings.fields,
        [fieldKey]: {
          ...localSettings.fields[fieldKey as keyof typeof localSettings.fields],
          label,
        },
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Save Confirmation Dialog */}
      <Dialog
        isOpen={showSaveDialog}
        onClose={() => setShowSaveDialog(false)}
        onConfirm={confirmSave}
        title="Save Settings"
        description="Are you sure you want to save these changes? All settings will be updated immediately."
        confirmText="Save"
        cancelText="Cancel"
      />
      
      <div className="bg-white rounded-2xl shadow-sm">
        {/* Section Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex gap-1 p-2">
            {[
              { key: "offices" as const, label: "Office Locations" },
              { key: "banners" as const, label: "Email Banners" },
              { key: "fields" as const, label: "Form Fields" },
              { key: "defaults" as const, label: "Default Values" },
            ].map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.key
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeSection === "offices" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 mb-1">Manage Office Locations</h3>
                  <p className="text-sm text-gray-500">
                    Configure office locations with their addresses and phone numbers
                  </p>
                </div>
                <button
                  onClick={addOffice}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="size-4" />
                  Add Office
                </button>
              </div>

              <div className="space-y-4">
                {localSettings.offices.map((office) => (
                  <div
                    key={office.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm text-gray-700">Office Name</label>
                        <input
                          type="text"
                          value={office.name}
                          onChange={(e) => updateOffice(office.id, "name", e.target.value)}
                          placeholder="e.g., Montréal"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-700">Phone Number</label>
                        <input
                          type="text"
                          value={office.phone}
                          onChange={(e) => updateOffice(office.id, "phone", e.target.value)}
                          placeholder="+1.514.938.2111"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block mb-2 text-sm text-gray-700">Full Address</label>
                        <input
                          type="text"
                          value={office.address}
                          onChange={(e) => updateOffice(office.id, "address", e.target.value)}
                          placeholder="1470 Rue Peel, Suite 500, Montréal, QC, Canada H3A 1T1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => deleteOffice(office.id)}
                        className="flex items-center gap-2 px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "banners" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 mb-1">Manage Email Banner Categories</h3>
                  <p className="text-sm text-gray-500">
                    Organize banners by event or campaign categories
                  </p>
                </div>
                <button
                  onClick={addBannerCategory}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="size-4" />
                  Add Category
                </button>
              </div>

              <div className="space-y-6">
                {localSettings.bannerCategories.map((category) => (
                  <div
                    key={category.id}
                    className="p-4 border-2 border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <input
                        type="text"
                        value={category.eventName}
                        onChange={(e) => updateBannerCategory(category.id, e.target.value)}
                        placeholder="Event Name (e.g., Explorance World 2026)"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => addBannerToCategory(category.id)}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Plus className="size-4" />
                        Add Banner
                      </button>
                      <button
                        onClick={() => deleteBannerCategory(category.id)}
                        className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>

                    {category.banners.length > 0 ? (
                      <div className="space-y-3 pl-4">
                        {category.banners.map((banner) => (
                          <div
                            key={banner.id}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex-1 space-y-2">
                              <input
                                type="text"
                                value={banner.name}
                                onChange={(e) => updateBanner(category.id, banner.id, "name", e.target.value)}
                                placeholder="Banner Name (e.g., FR (1))"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              />
                              <input
                                type="url"
                                value={banner.imageUrl}
                                onChange={(e) => updateBanner(category.id, banner.id, "imageUrl", e.target.value)}
                                placeholder="Image URL (e.g., https://example.com/banner.jpg)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              />
                              <input
                                type="url"
                                value={banner.link || ""}
                                onChange={(e) => updateBanner(category.id, banner.id, "link", e.target.value)}
                                placeholder="Link URL (optional - e.g., https://explorance.com/event)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                              />
                              {banner.imageUrl && (
                                <div className="relative">
                                  <img 
                                    src={banner.imageUrl} 
                                    alt={banner.name || "Banner preview"}
                                    className="w-full h-24 object-cover rounded border border-gray-200"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                  {banner.link && (
                                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                      Clickable
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => deleteBanner(category.id, banner.id)}
                              className="flex items-center gap-2 px-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 text-center py-4">
                        No banners in this category. Click "Add Banner" to add one.
                      </p>
                    )}
                  </div>
                ))}

                {localSettings.bannerCategories.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    No banner categories configured. Add one to get started.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSection === "fields" && (
            <div>
              <div className="mb-6">
                <h3 className="text-gray-900 mb-1">Form Field Configuration</h3>
                <p className="text-sm text-gray-500">
                  Control which fields are visible and required in the signature generator form
                </p>
              </div>

              <div className="space-y-3">
                {Object.entries(localSettings.fields).map(([key, config]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <div className="flex-1 mr-4">
                      <input
                        type="text"
                        value={config.label}
                        onChange={(e) => updateFieldLabel(key, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleFieldVisibility(key)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                          config.visible
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {config.visible ? (
                          <>
                            <Eye className="size-4" />
                            Visible
                          </>
                        ) : (
                          <>
                            <EyeOff className="size-4" />
                            Hidden
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => toggleFieldRequired(key)}
                        disabled={!config.visible}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          config.required && config.visible
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-100 text-gray-400"
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {config.required ? "Required" : "Optional"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "defaults" && (
            <div>
              <div className="mb-6">
                <h3 className="text-gray-900 mb-1">Default Values & Assets</h3>
                <p className="text-sm text-gray-500">
                  Configure company-wide default values and assets
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-900">Company Logo URL</label>
                  <input
                    type="url"
                    value={localSettings.companyLogoUrl}
                    onChange={(e) =>
                      setLocalSettings({ ...localSettings, companyLogoUrl: e.target.value })
                    }
                    placeholder="https://example.com/logo.svg or data:image/svg+xml,..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {localSettings.companyLogoUrl && (
                    <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Logo Preview:</p>
                      <img 
                        src={localSettings.companyLogoUrl} 
                        alt="Company Logo"
                        className="h-8"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-gray-900">Company Website</label>
                  <input
                    type="url"
                    value={localSettings.companyWebsite}
                    onChange={(e) =>
                      setLocalSettings({ ...localSettings, companyWebsite: e.target.value })
                    }
                    placeholder="https://explorance.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-900">
                    Disclaimer Text <span className="text-sm text-gray-500">(Locked - Cannot be changed by users)</span>
                  </label>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm text-gray-700">English Version</label>
                      <textarea
                        value={localSettings.disclaimerEnglish}
                        onChange={(e) =>
                          setLocalSettings({ ...localSettings, disclaimerEnglish: e.target.value })
                        }
                        rows={6}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono"
                        placeholder="Enter English disclaimer text..."
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm text-gray-700">French Version</label>
                      <textarea
                        value={localSettings.disclaimerFrench}
                        onChange={(e) =>
                          setLocalSettings({ ...localSettings, disclaimerFrench: e.target.value })
                        }
                        rows={6}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono"
                        placeholder="Enter French disclaimer text..."
                      />
                    </div>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-500">
                    These disclaimers will appear in email signatures based on user's language selection
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="size-4" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}