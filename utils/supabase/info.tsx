// Supabase Information
// This application does NOT use Supabase
// All data persistence is handled via localStorage

export const SUPABASE_INFO = {
  enabled: false,
  reason: "This is a frontend-only application",
  storage: "localStorage",
  backend: "none",
};

// Placeholder exports to prevent import errors
export const supabase = null;
export const createClient = () => null;

export default SUPABASE_INFO;