const API_BASE_URL = 'http://localhost:8080'; // Your backend URL

export const fetchShoes = async () => {
  const response = await fetch(`${API_BASE_URL}/shoes`);
  return response.json();
};

export const fetchShoeDetails = async (productName) => {
  const response = await fetch(`${API_BASE_URL}/shoes/${productName}`);
  return response.json();
};

export const fetchShoentries = async (shoeId) => {
  const response = await fetch(`${API_BASE_URL}/shoentries/${shoeId}`);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export const fetchRecentShoentries = async () => {
  const response = await fetch(`${API_BASE_URL}/recent-shoentries`);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};
