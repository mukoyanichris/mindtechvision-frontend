import React from "react";

export default function Dashboard() {
  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>Overview</h2>
      <div className="grid">
        <div className="admin-card">
          <div style={{fontSize:"1.6rem", fontWeight:800}}>12</div>
          <div>Pending request quotes</div>
        </div>
        <div className="admin-card">
          <div style={{fontSize:"1.6rem", fontWeight:800}}>26</div>
          <div>Published services</div>
        </div>
        <div className="admin-card">
          <div style={{fontSize:"1.6rem", fontWeight:800}}>3</div>
          <div>About images</div>
        </div>
      </div>
    </div>
  );
}