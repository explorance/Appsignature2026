import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8200cbfe/health", (c) => {
  return c.json({ status: "ok" });
});

// Get admin settings
app.get("/make-server-8200cbfe/settings", async (c) => {
  try {
    const settings = await kv.get("admin_settings");
    
    if (!settings) {
      // Return default settings if none exist
      return c.json({ 
        success: true, 
        settings: null 
      });
    }
    
    return c.json({ 
      success: true, 
      settings: JSON.parse(settings) 
    });
  } catch (error) {
    console.log("Error fetching settings:", error);
    return c.json({ 
      success: false, 
      error: "Failed to fetch settings" 
    }, 500);
  }
});

// Save admin settings (requires authentication)
app.post("/make-server-8200cbfe/settings", async (c) => {
  try {
    const body = await c.req.json();
    const { password, settings } = body;
    
    // Validate admin password
    if (password !== "eXplorance") {
      return c.json({ 
        success: false, 
        error: "Unauthorized: Invalid admin password" 
      }, 401);
    }
    
    // Validate settings object
    if (!settings || typeof settings !== "object") {
      return c.json({ 
        success: false, 
        error: "Invalid settings data" 
      }, 400);
    }
    
    // Save settings to KV store
    await kv.set("admin_settings", JSON.stringify(settings));
    
    return c.json({ 
      success: true, 
      message: "Settings saved successfully" 
    });
  } catch (error) {
    console.log("Error saving settings:", error);
    return c.json({ 
      success: false, 
      error: "Failed to save settings" 
    }, 500);
  }
});

// Verify admin password (for login without saving)
app.post("/make-server-8200cbfe/verify-admin", async (c) => {
  try {
    const body = await c.req.json();
    const { password } = body;
    
    const isValid = password === "eXplorance";
    
    return c.json({ 
      success: true, 
      isValid 
    });
  } catch (error) {
    console.log("Error verifying admin password:", error);
    return c.json({ 
      success: false, 
      error: "Failed to verify password" 
    }, 500);
  }
});

Deno.serve(app.fetch);