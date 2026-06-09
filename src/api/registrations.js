/**
 * ============================================================
 * Registration API Routes
 * File: src/api/registrations.js
 * ============================================================
 * This file contains all registration-related API operations
 */

import {
  createRegistration,
  getRegistrationsFiltered,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
  exportRegistrationsToCSV,
  getErrorMessage,
  isSupabaseConfigured,
} from "../lib/supabase";

/**
 * Submit new registration
 * @param {Object} formData - Form data from registration form
 * @returns {Promise<{success: boolean, error?: string, data?: Object}>}
 */
export async function submitRegistration(formData) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Registration service is not available. Please try again later.",
      };
    }

    const { data, error } = await createRegistration(formData);

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }

    return {
      success: true,
      data: data?.[0],
    };
  } catch (err) {
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

/**
 * Fetch registrations with optional filters
 * @param {Object} filters - Query filters
 * @returns {Promise<{registrations: Array, total: number, error?: string}>}
 */
export async function fetchRegistrations(filters = {}) {
  try {
    const {
      search = "",
      attended = "",
      willing = "",
      heard = "",
      date = "",
      page = 0,
      pageSize = 100,
    } = filters;

    const { data, count, error } = await getRegistrationsFiltered({
      search,
      attended,
      willing,
      heard,
      date,
      page,
      pageSize,
    });

    if (error) {
      return {
        registrations: [],
        total: 0,
        error: getErrorMessage(error),
      };
    }

    return {
      registrations: data || [],
      total: count || 0,
    };
  } catch (err) {
    return {
      registrations: [],
      total: 0,
      error: "Failed to fetch registrations. Please try again.",
    };
  }
}

/**
 * Get single registration by ID
 * @param {string} id - Registration ID
 * @returns {Promise<{registration: Object|null, error?: string}>}
 */
export async function fetchRegistrationById(id) {
  try {
    const { data, error } = await getRegistrationById(id);

    if (error) {
      return {
        registration: null,
        error: getErrorMessage(error),
      };
    }

    return {
      registration: data,
    };
  } catch (err) {
    return {
      registration: null,
      error: "Failed to fetch registration. Please try again.",
    };
  }
}

/**
 * Update existing registration
 * @param {string} id - Registration ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<{success: boolean, error?: string, data?: Object}>}
 */
export async function updateRegistrationRecord(id, updates) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Service not available.",
      };
    }

    const { data, error } = await updateRegistration(id, updates);

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }

    return {
      success: true,
      data: data?.[0],
    };
  } catch (err) {
    return {
      success: false,
      error: "Failed to update registration.",
    };
  }
}

/**
 * Delete registration by ID
 * @param {string} id - Registration ID
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deleteRegistrationRecord(id) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Service not available.",
      };
    }

    const { error } = await deleteRegistration(id);

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
      error: "Failed to delete registration.",
    };
  }
}

/**
 * Export all registrations as CSV
 * @param {Object} filters - Query filters
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function exportAllRegistrationsToCSV(filters = {}) {
  try {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Export service not available.",
      };
    }

    // Fetch all data without pagination
    const { data, error } = await getRegistrationsFiltered({
      ...filters,
      pageSize: 10000, // High limit to get all results
      page: 0,
    });

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }

    exportRegistrationsToCSV(data || []);

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      error: "Failed to export registrations.",
    };
  }
}
