
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_BASE_URL ='https://rrplserver.rajavrukshagroup.in'
/**
 * Submits enquiry data to the backend endpoint.
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} formData.phone
 * @param {string} [formData.message]
 */
export const submitEnquiry = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/sylvan-retreat-enquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit enquiry: ${response.statusText}`);
  }

  return response;
};
