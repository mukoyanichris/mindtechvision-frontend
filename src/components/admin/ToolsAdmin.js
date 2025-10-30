import React from "react";
import { api } from "./api";

export default function ToolsAdmin(){
  async function seed(){
    await api.post("/tools/seed", {});
    alert("Dummy data created!");
  }
  async function clear(){
    await api.post("/tools/clear", {});
    alert("Data cleared!");
  }
  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>Make Up Things (Dev Tools)</h2>
      <p>Create demo services, requests, contacts, and images for testing.</p>
      <div style={{display:'flex', gap:8}}>
        <button className="btn primary" onClick={seed}>Create Dummy Data</button>
        <button className="btn danger" onClick={clear}>Clear All</button>
      </div>
    </div>
  );
}