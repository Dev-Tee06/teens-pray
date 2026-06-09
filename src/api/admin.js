/**
 * ============================================================
 * Admin API Routes
 * File: src/api/admin.js
 * ============================================================
 * This file contains all admin-related API operations
 */

import {
  signInWithPassword,
  checkIfUserIsAdmin,
  getAllAdminUsers,
  addAdminUser,
  removeAdminUser,
  signOutUser,
  getRegistrationStats,
  isSupabaseConfigured,
  getErrorMessage,
} from "../lib/supabase";

/**
 * Admin login
 * @param {string} email - Admin email
 * @param {string} password - Admin password
 * @returns {Promise<{success: boolean, user?: Object, error?: string}>}
 */
export async function adminLogin(email, password) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Admin service not available.",
      };
    }

    const { data, error } = await signInWithPassword(email, password);

    if (error) {
      return {
        success: false,
        error: error.message || "Invalid email or password.",
      };
    }

    // Verify user is admin
    const isAdmin = await checkIfUserIsAdmin();

    if (!isAdmin) {
      // Sign them out since they're not an authorized admin
      await signOutUser();
      return {
        success: false,
        error: "Access Denied. You are not authorized to access this section.",
      };
    }

    return {
      success: true,
      user: data.user,
    };
  } catch (err) {
    return {
      success: false,
      error: "An error occurred during login.",
    };
  }
}

/**
 * Check current user admin status
 * @returns {Promise<boolean>}
 */
export async function verifyAdminStatus() {
  try {
    return await checkIfUserIsAdmin();
  } catch {
    return false;
  }
}

/**
 * Admin logout
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function adminLogout() {
  try {
    const { error } = await signOutUser();

    if (error) {
      return {
        success: false,
        error: error.message || "Error during logout.",
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      error: "An error occurred during logout.",
    };
  }
}

/**
 * Fetch all admin users
 * @returns {Promise<{admins: Array, error?: string}>}
 */
export async function fetchAllAdminUsers() {
  try {
    const { data, error } = await getAllAdminUsers();

    if (error) {
      return {
        admins: [],
        error: getErrorMessage(error),
      };
    }

    return {
      admins: data || [],
    };
  } catch (err) {
    return {
      admins: [],
      error: "Failed to fetch admin users.",
    };
  }
}

/**
 * Add new admin user
 * @param {string} email - Admin email to add
 * @returns {Promise<{success: boolean, admin?: Object, error?: string}>}
 */
export async function createAdminUser(email) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Service not available.",
      };
    }

    const { data, error } = await addAdminUser(email);

    if (error) {
      if (error.message?.includes("unique")) {
        return {
          success: false,
          error: "This email is already an admin.",
        };
      }
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }

    return {
      success: true,
      admin: data?.[0],
    };
  } catch (err) {
    return {
      success: false,
      error: "Failed to add admin user.",
    };
  }
}

/**
 * Remove admin user
 * @param {string} id - Admin user ID
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function removeAdminUserAccount(id) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Service not available.",
      };
    }

    const { error } = await removeAdminUser(id);

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      error: "Failed to remove admin user.",
    };
  }
}

/**
 * Fetch registration statistics
 * @returns {Promise<{stats: Object|null, error?: string}>}
 */
export async function fetchRegistrationStatistics() {
  try {
    if (!isSupabaseConfigured) {
      return {
        stats: null,
        error: "Stats service not available.",
      };
    }

    const { data, error } = await getRegistrationStats();

    if (error) {
      return {
        stats: null,
        error: getErrorMessage(error),
      };
    }

    // Extract first row if it's an array
    const stats = Array.isArray(data) ? data[0] : data;

    return {
      stats: stats || null,
    };
  } catch (err) {
    return {
      stats: null,
      error: "Failed to fetch statistics.",
    };
  }
}
