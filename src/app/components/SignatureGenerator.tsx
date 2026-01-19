import { useState, useEffect } from "react";
import { Copy, Download, CheckCircle2 } from "lucide-react";
import type { AdminSettings, SignatureData } from "../types";
import { generateSignatureHTML } from "../utils/signatureGenerator";
import CustomSelect from "./CustomSelect";

interface SignatureGeneratorProps {
  settings: AdminSettings;
}

export default function SignatureGenerator({ settings }: SignatureGeneratorProps) {
  const [formData, setFormData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    email: "",
    officeLocation: "",
    cellPhone: "",
    linkedin: "",
    companyWebsite: settings.companyWebsite,
    selectedBannerCategoryId: "",
    selectedBannerId: "",
    disclaimerLanguage: "both",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      companyWebsite: settings.companyWebsite,
    }));
  }, [settings]);

  const selectedOffice = settings.offices.find((o) => o.id === formData.officeLocation);
  const selectedCategory = settings.bannerCategories?.find((c) => c.id === formData.selectedBannerCategoryId);
  const selectedBanner = selectedCategory?.banners.find((b) => b.id === formData.selectedBannerId);

  const handleCopySignature = async () => {
    const html = generateSignatureHTML(formData, selectedOffice, selectedBanner, settings);
    
    try {
      // Create a temporary div to hold the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);

      // Select the content
      const range = document.createRange();
      range.selectNodeContents(tempDiv);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        
        // Copy using execCommand
        const successful = document.execCommand('copy');
        
        // Clean up
        selection.removeAllRanges();
        document.body.removeChild(tempDiv);
        
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          throw new Error('Copy failed');
        }
      }
    } catch (err) {
      // Final fallback - copy plain text
      const textarea = document.createElement('textarea');
      textarea.value = html;
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        alert('Failed to copy. Please try downloading instead.');
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const handleDownloadHTML = () => {
    const html = generateSignatureHTML(formData, selectedOffice, selectedBanner, settings);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email-signature.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isFormValid = () => {
    const requiredFields = Object.entries(settings.fields).filter(
      ([, config]) => config.required && config.visible
    );

    for (const [fieldKey] of requiredFields) {
      const value = formData[fieldKey as keyof SignatureData];
      if (!value || value.trim() === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Enter Your Details</h2>

          <div className="space-y-4">
            {settings.fields.fullName.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.fullName.label}
                  {settings.fields.fullName.required && " *"}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.jobTitle.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.jobTitle.label}
                  {settings.fields.jobTitle.required && " *"}
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  placeholder="Senior Product Manager"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.email.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.email.label}
                  {settings.fields.email.required && " *"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john.doe@company.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.officeLocation.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.officeLocation.label}
                  {settings.fields.officeLocation.required && " *"}
                </label>
                <CustomSelect
                  value={formData.officeLocation}
                  onChange={(value) => setFormData({ ...formData, officeLocation: value })}
                  options={[
                    ...settings.offices.map((office) => ({
                      value: office.id,
                      label: office.name,
                      description: office.address.split(',')[0],
                      icon: 'location' as const
                    }))
                  ]}
                  placeholder="Select an office"
                />
              </div>
            )}

            {selectedOffice && (
              <>
                <div>
                  <label className="block mb-2 text-gray-900">Office Address</label>
                  <div className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm">
                    {selectedOffice.address}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-900">Phone Number (Office)</label>
                  <div className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600">
                    {selectedOffice.phone}
                  </div>
                </div>
              </>
            )}

            {settings.fields.cellPhone.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.cellPhone.label}
                  {settings.fields.cellPhone.required && " *"}
                </label>
                <input
                  type="tel"
                  value={formData.cellPhone}
                  onChange={(e) => setFormData({ ...formData, cellPhone: e.target.value })}
                  placeholder="+1.555.123.4567"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.linkedin.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.linkedin.label}
                  {settings.fields.linkedin.required && " *"}
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.companyWebsite.visible && (
              <div>
                <label className="block mb-2 text-gray-900">
                  {settings.fields.companyWebsite.label}
                  {settings.fields.companyWebsite.required && " *"}
                </label>
                <input
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  placeholder="https://explorance.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {settings.fields.banner.visible && settings.bannerCategories && settings.bannerCategories.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <label className="block mb-2 text-gray-900">
                  {settings.fields.banner.label}
                </label>
                <CustomSelect
                  value={formData.selectedBannerCategoryId}
                  onChange={(value) => {
                    setFormData({ 
                      ...formData, 
                      selectedBannerCategoryId: value,
                      selectedBannerId: "" // Reset banner selection when category changes
                    });
                  }}
                  options={[
                    { value: "", label: "No banner", description: "No event banner will be included" },
                    ...settings.bannerCategories.map((category) => ({
                      value: category.id,
                      label: category.eventName,
                      description: `${category.banners.length} banner${category.banners.length !== 1 ? 's' : ''} available`
                    }))
                  ]}
                  placeholder="Select a banner category"
                  className="mb-4"
                />

                {selectedCategory && selectedCategory.banners.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">Select a banner:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCategory.banners.map((banner) => (
                        <button
                          key={banner.id}
                          onClick={() => setFormData({ ...formData, selectedBannerId: banner.id })}
                          className={`relative border-2 rounded-lg overflow-hidden transition-all ${
                            formData.selectedBannerId === banner.id
                              ? "border-blue-500 ring-2 ring-blue-200"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={banner.imageUrl}
                            alt={banner.name}
                            className="w-full h-20 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs py-1 px-2 text-center">
                            {banner.name}
                          </div>
                          {formData.selectedBannerId === banner.id && (
                            <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                              <CheckCircle2 className="size-4" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Disclaimer Language Selection */}
            <div className="pt-6 border-t border-gray-200">
              <label className="block mb-2 text-gray-900">Disclaimer Language</label>
              <CustomSelect
                value={formData.disclaimerLanguage}
                onChange={(value) => setFormData({ ...formData, disclaimerLanguage: value as "english" | "french" | "both" })}
                options={[
                  { value: "english", label: "English only", description: "Include English disclaimer", icon: 'language' },
                  { value: "french", label: "French only", description: "Include French disclaimer (Français)", icon: 'language' },
                  { value: "both", label: "Both Languages", description: "Include English + French disclaimers", icon: 'language' }
                ]}
                placeholder="Select disclaimer language"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="mb-6 text-gray-900">Preview</h2>

          {/* Signature Preview */}
          <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200 min-h-[300px]">
            {formData.fullName ? (
              <div>
                {/* Name */}
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "15px", lineHeight: "22.5px", fontWeight: "bold", color: "#000000", marginBottom: "4px" }}>
                  {formData.fullName}
                </div>
                
                {/* Job Title */}
                {formData.jobTitle && (
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", lineHeight: "21px", color: "#000000", marginTop: "0px", marginBottom: "8px" }}>
                    {formData.jobTitle}
                  </div>
                )}
                
                {/* Company Logo */}
                <div style={{ marginTop: "0px", marginBottom: "8px" }}>
                  <a 
                    href="https://www.explorance.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", cursor: "pointer" }}
                  >
                    <img 
                      src={settings.companyLogoUrl} 
                      alt="Company Logo" 
                      style={{ height: "36.5px", display: "block", border: "0" }}
                    />
                  </a>
                </div>
                
                {/* Office Address */}
                {selectedOffice && (
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "#000000", marginTop: "0px", marginBottom: "0px" }}>
                    {selectedOffice.address}
                  </div>
                )}
                
                {/* Phone numbers */}
                {selectedOffice && (selectedOffice.phone || formData.cellPhone) && (
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "#000000", marginTop: "0px", marginBottom: "0px" }}>
                    {selectedOffice.phone && (
                      <>
                        <span>Tel.: </span>
                        <span>{selectedOffice.phone}</span>
                      </>
                    )}
                    {selectedOffice.phone && formData.cellPhone && <span> | </span>}
                    {formData.cellPhone && (
                      <>
                        <span>Cell.: </span>
                        <span>{formData.cellPhone}</span>
                      </>
                    )}
                  </div>
                )}
                
                {/* Email / Website / LinkedIn on same line */}
                {(formData.email || formData.companyWebsite || formData.linkedin) && (
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", marginTop: "0px", marginBottom: "0px" }}>
                    {formData.email && (
                      <a
                        href={`mailto:${formData.email}`}
                        style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "#0077b5", textDecoration: "underline" }}
                      >
                        {formData.email}
                      </a>
                    )}
                    {formData.email && formData.companyWebsite && <span style={{ color: "#000000" }}> | </span>}
                    {formData.companyWebsite && (
                      <a
                        href={formData.companyWebsite}
                        style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "#0077b5", textDecoration: "underline" }}
                      >
                        {formData.companyWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </a>
                    )}
                    {(formData.email || formData.companyWebsite) && formData.linkedin && <span style={{ color: "#000000" }}> | </span>}
                    {formData.linkedin && (
                      <a
                        href={formData.linkedin}
                        style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "#0077b5", textDecoration: "underline" }}
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
                
                {/* Banner */}
                {selectedBanner && (
                  <div style={{ marginTop: "16px" }}>
                    {selectedBanner.link ? (
                      <a 
                        href={selectedBanner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: "inline-block", cursor: "pointer" }}
                      >
                        <img 
                          src={selectedBanner.imageUrl} 
                          alt={selectedBanner.name}
                          style={{ width: "100%", maxWidth: "600px", height: "auto", display: "block", border: "0", borderRadius: "4px" }}
                        />
                      </a>
                    ) : (
                      <img 
                        src={selectedBanner.imageUrl} 
                        alt={selectedBanner.name}
                        style={{ width: "100%", maxWidth: "600px", height: "auto", display: "block", border: "0", borderRadius: "4px" }}
                      />
                    )}
                  </div>
                )}
                
                {/* Disclaimer */}
                {(settings.disclaimerEnglish || settings.disclaimerFrench) && (
                  <div
                    style={{ 
                      fontFamily: "Arial, sans-serif", 
                      fontSize: "11px", 
                      lineHeight: "16.5px", 
                      color: "#666666", 
                      borderTop: "1px solid #e0e0e0", 
                      paddingTop: "16px", 
                      marginTop: "16px",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    {formData.disclaimerLanguage === "english" && settings.disclaimerEnglish}
                    {formData.disclaimerLanguage === "french" && settings.disclaimerFrench}
                    {formData.disclaimerLanguage === "both" && (
                      <>
                        {settings.disclaimerEnglish}
                        {settings.disclaimerEnglish && settings.disclaimerFrench && "\n\n"}
                        {settings.disclaimerFrench}
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Fill in the form to see your signature preview
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleCopySignature}
              disabled={!isFormValid()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="size-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="size-5" />
                  Copy Signature
                </>
              )}
            </button>

            <button
              onClick={handleDownloadHTML}
              disabled={!isFormValid()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
            >
              <Download className="size-5" />
              Download HTML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}