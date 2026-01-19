// KV Store - Inactive
// This application uses localStorage for data persistence
// No key-value store is needed

export const kvStore = {
  get: async (key: string) => {
    return null;
  },
  set: async (key: string, value: unknown) => {
    return { success: false, message: "localStorage is used instead" };
  },
  delete: async (key: string) => {
    return { success: false, message: "localStorage is used instead" };
  },
};

export default kvStore;