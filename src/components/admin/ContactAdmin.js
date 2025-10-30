import React, { useEffect, useState } from "react";
import { api } from "./api";

export default function ContactsAdmin(){
  const [contacts, setContacts] = useState({ phone: "", sms: "", whatsapp: "", email: "" });

  useEffect(()=>{ load(); }, []);
  async function load(){
    const data = await api.get("/contacts");
    setContacts(data);
  }
  async function save(e){
    e.preventDefault();
    const saved = await api.post("/contacts", contacts);
    setContacts(saved);
    alert("Contacts updated!");
  }

  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>Contacts</h2>
      <form onSubmit={save} style={{display:"grid", gap:8, maxWidth:520}}>
        <input placeholder="Phone (tel:)" value={contacts.phone||""} onChange={e=>setContacts({...contacts, phone:e.target.value})}/>
        <input placeholder="SMS (sms:)" value={contacts.sms||""} onChange={e=>setContacts({...contacts, sms:e.target.value})}/>
        <input placeholder="WhatsApp (digits only)" value={contacts.whatsapp||""} onChange={e=>setContacts({...contacts, whatsapp:e.target.value})}/>
        <input placeholder="Email" value={contacts.email||""} onChange={e=>setContacts({...contacts, email:e.target.value})}/>
        <button className="btn primary" type="submit">Save</button>
      </form>
    </div>
  );
}