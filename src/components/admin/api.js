const BASE = import.meta?.env?.VITE_API_BASE || process.env.REACT_APP_API_BASE || "";

// Add Authorization headers here if you use Sanctum/JWT
export const api = {
  async get(path) {
    const r = await fetch(BASE + path, { credentials: "include" });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
  async post(path, body) {
    const r = await fetch(BASE + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body || {}),
    });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
  async del(path) {
    const r = await fetch(BASE + path, { method: "DELETE", credentials: "include" });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
};