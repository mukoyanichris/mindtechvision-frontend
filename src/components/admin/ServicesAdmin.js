import React, { useEffect, useState } from "react";
import { api } from "./api";

export default function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "", image: "" });

  useEffect(() => { load(); }, []);
  async function load() {
    const data = await api.get("/services");
    setServices(data);
  }

  async function addService(e) {
    e.preventDefault();
    const created = await api.post("/services", form);
    setServices([created, ...services]);
    setForm({ title: "", summary: "", image: "" });
  }

  async function remove(id) {
    if (!window.confirm("Delete this service?")) return;
    await api.del(`/services/${id}`);
    setServices(services.filter(s => s.id !== id));
  }

  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>Services</h2>
      <form onSubmit={addService} style={{display:"grid", gap:8, marginBottom:12}}>
        <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
        <input required placeholder="Summary" value={form.summary} onChange={e=>setForm({...form, summary:e.target.value})}/>
        <input placeholder="Image URL" value={form.image} onChange={e=>setForm({...form, image:e.target.value})}/>
        <button className="btn primary" type="submit">Add Service</button>
      </form>

      <table className="table">
        <thead><tr><th>Title</th><th>Summary</th><th>Image</th><th></th></tr></thead>
        <tbody>
          {services.map(s => (
            <tr key={s.id}>
              <td>{s.title}</td>
              <td>{s.summary}</td>
              <td>{s.image ? <img src={s.image} alt="" style={{height:40}}/> : "—"}</td>
              <td><button className="btn danger" onClick={()=>remove(s.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}