import type { AdminSettings } from "../types";

const STORAGE_KEY = "emailSignatureSettings";
const BACKUP_KEY = "emailSignatureSettings_backup";
const VERSION_KEY = "emailSignatureSettings_version";
const CURRENT_VERSION = "1.0";

interface SaveResult {
  success: boolean;
  error?: string;
}

interface LoadResult {
  success: boolean;
  data?: AdminSettings;
  error?: string;
}

/**
 * Validates the settings object structure
 */
export function validateSettings(settings: AdminSettings): boolean {
  try {
    // Check required fields
    if (!settings.offices || !Array.isArray(settings.offices)) {
      console.error("Invalid offices structure");
      return false;
    }

    if (!settings.bannerCategories || !Array.isArray(settings.bannerCategories)) {
      console.error("Invalid bannerCategories structure");
      return false;
    }

    if (!settings.fields || typeof settings.fields !== "object") {
      console.error("Invalid fields structure");
      return false;
    }

    // Validate each office
    for (const office of settings.offices) {
      if (!office.id || !office.name || !office.address || !office.phone) {
        console.error("Invalid office structure:", office);
        return false;
      }
    }

    // Validate each banner category
    for (const category of settings.bannerCategories) {
      if (!category.id || !category.eventName || !Array.isArray(category.banners)) {
        console.error("Invalid banner category structure:", category);
        return false;
      }

      // Validate each banner
      for (const banner of category.banners) {
        if (!banner.id || !banner.name || !banner.imageUrl) {
          console.error("Invalid banner structure:", banner);
          return false;
        }
      }
    }

    return true;
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
}

/**
 * Saves settings to localStorage with backup
 */
export async function saveSettings(settings: AdminSettings): Promise<SaveResult> {
  try {
    // Validate before saving
    if (!validateSettings(settings)) {
      return {
        success: false,
        error: "Invalid settings structure. Please check all required fields.",
      };
    }

    // Create backup of current settings
    const currentSettings = localStorage.getItem(STORAGE_KEY);
    if (currentSettings) {
      localStorage.setItem(BACKUP_KEY, currentSettings);
    }

    // Save new settings
    const settingsJson = JSON.stringify(settings);
    localStorage.setItem(STORAGE_KEY, settingsJson);
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);

    // Verify save was successful
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    if (savedSettings !== settingsJson) {
      throw new Error("Save verification failed");
    }

    return { success: true };
  } catch (error) {
    console.error("Error saving settings:", error);
    
    // Restore from backup if save failed
    const backup = localStorage.getItem(BACKUP_KEY);
    if (backup) {
      try {
        localStorage.setItem(STORAGE_KEY, backup);
      } catch (restoreError) {
        console.error("Error restoring backup:", restoreError);
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to save settings",
    };
  }
}

/**
 * Loads settings from localStorage
 */
export function loadSettings(defaultSettings: AdminSettings): LoadResult {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    
    if (!saved) {
      return {
        success: true,
        data: defaultSettings,
      };
    }

    const parsed = JSON.parse(saved);
    
    // Validate loaded data
    if (!validateSettings(parsed)) {
      console.warn("Loaded settings are invalid, using defaults");
      return {
        success: true,
        data: defaultSettings,
      };
    }

    // Merge with defaults to ensure all fields exist
    const merged: AdminSettings = {
      ...defaultSettings,
      ...parsed,
      bannerCategories: parsed.bannerCategories || defaultSettings.bannerCategories,
      companyLogoUrl: parsed.companyLogoUrl || defaultSettings.companyLogoUrl,
      disclaimerEnglish: parsed.disclaimerEnglish || defaultSettings.disclaimerEnglish,
      disclaimerFrench: parsed.disclaimerFrench || defaultSettings.disclaimerFrench,
      fields: {
        ...defaultSettings.fields,
        ...parsed.fields,
      },
    };

    return {
      success: true,
      data: merged,
    };
  } catch (error) {
    console.error("Error loading settings:", error);
    
    // Try to load from backup
    try {
      const backup = localStorage.getItem(BACKUP_KEY);
      if (backup) {
        const parsed = JSON.parse(backup);
        if (validateSettings(parsed)) {
          return {
            success: true,
            data: parsed,
          };
        }
      }
    } catch (backupError) {
      console.error("Error loading backup:", backupError);
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to load settings",
      data: defaultSettings,
    };
  }
}

/**
 * Clears all data and backups
 */
export function clearAllData(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(BACKUP_KEY);
  localStorage.removeItem(VERSION_KEY);
}

/**
 * Exports settings as JSON file
 */
export function exportSettings(settings: AdminSettings): void {
  try {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `email-signature-settings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error exporting settings:", error);
    throw new Error("Failed to export settings");
  }
}

/**
 * Imports settings from JSON file
 */
export async function importSettings(file: File): Promise<LoadResult> {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    
    if (!validateSettings(parsed)) {
      return {
        success: false,
        error: "Invalid settings file structure",
      };
    }

    return {
      success: true,
      data: parsed,
    };
  } catch (error) {
    console.error("Error importing settings:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to import settings",
    };
  }
}
