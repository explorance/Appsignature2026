// Supabase Edge Function - Inactive
// This application uses localStorage for data persistence
// This function is a placeholder to prevent deployment errors

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  // Return info that this function is not used
  return new Response(
    JSON.stringify({
      message: "This application uses localStorage. No backend required.",
      status: "inactive",
      timestamp: new Date().toISOString(),
    }),
    { status: 200, headers }
  );
});