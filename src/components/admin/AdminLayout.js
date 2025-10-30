import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">Admin Console</div>
        <nav className="admin-nav">
          <NavLink to="/admin" end>Dashboard</NavLink>
          <NavLink to="/admin/services">Services</NavLink>
          <NavLink to="/admin/requests">Request Quotes</NavLink>
          <NavLink to="/admin/contacts">Contacts</NavLink>
          <NavLink to="/admin/about">About Images</NavLink>
          <NavLink to="/admin/tools">Make Up Things</NavLink>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}