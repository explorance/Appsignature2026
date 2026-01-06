export interface Office {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export interface Banner {
  id: string;
  name: string;
  imageUrl: string;
  link?: string; // Optional link URL for the banner
}

export interface BannerCategory {
  id: string;
  eventName: string;
  banners: Banner[];
}

export interface FieldConfig {
  visible: boolean;
  required: boolean;
  label: string;
}

export interface AdminSettings {
  offices: Office[];
  bannerCategories: BannerCategory[];
  disclaimerEnglish: string;
  disclaimerFrench: string;
  companyWebsite: string;
  companyLogoUrl: string;
  fields: {
    fullName: FieldConfig;
    jobTitle: FieldConfig;
    email: FieldConfig;
    officeLocation: FieldConfig;
    cellPhone: FieldConfig;
    linkedin: FieldConfig;
    companyWebsite: FieldConfig;
    banner: FieldConfig;
  };
}

export interface SignatureData {
  fullName: string;
  jobTitle: string;
  email: string;
  officeLocation: string;
  cellPhone: string;
  linkedin: string;
  companyWebsite: string;
  selectedBannerCategoryId: string;
  selectedBannerId: string;
  disclaimerLanguage: "english" | "french" | "both";
}