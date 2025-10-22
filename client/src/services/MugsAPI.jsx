const API_URL = '/api/mugs';

export const getAllMugs = async () => (await fetch(API_URL)).json();
export const getMug = async (id) => (await fetch(`${API_URL}/${id}`)).json();
export const createMug = async (mug) =>
  (await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(mug) })).json();
export const updateMug = async (id, mug) =>
  (await fetch(`${API_URL}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(mug) })).json();
export const deleteMug = async (id) => await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
