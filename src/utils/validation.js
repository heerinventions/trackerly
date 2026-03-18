/**
 * Utility functions for common validation tasks.
 */

export const validatePhoneNumber = (phone) => {
  // A simple regex for international phone numbers (e.g., +1234567890)
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.trim() !== '';
};
