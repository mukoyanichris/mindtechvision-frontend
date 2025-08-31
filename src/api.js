export const API_BASE = process.env.REACT_APP_API_BASE || 'http://127.0.0.1:8000';

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/api/services`, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function createService(formData) {
  const res = await fetch(`${API_BASE}/api/services`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to create service');
  return res.json();
}

export async function deleteService(id) {
  const res = await fetch(`${API_BASE}/api/services/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to delete service');
  return res.json();
}
