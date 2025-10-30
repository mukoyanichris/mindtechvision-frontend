import React, { useEffect, useState } from "react";
import { api } from "./api";

export default function RequestsAdmin() {
  const [items, setItems] = useState([]);

  useEffect(()=>{ load(); }, []);
  async function load(){
    const data = await api.get("/request-quotes?status=pending");
    setItems(data);
  }
  async function decide(id, status){
    await api.post(`/request-quotes/${id}/decision`, { status });
    setItems(items.filter(i => i.id !== id));
  }

  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>Request Quotes (Pending)</h2>
      <table className="table">
        <thead><tr><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map(i => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td style={{maxWidth:360}}>{i.message}</td>
              <td>
                <button className="btn success" onClick={()=>decide(i.id, "accepted")}>Accept</button>
                <button className="btn danger" onClick={()=>decide(i.id, "rejected")} style={{marginLeft:8}}>Reject</button>
              </td>
            </tr>
          ))}
          {items.length===0 && <tr><td colSpan={4}>No pending requests.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}