import React, { useEffect, useState } from "react";
import { api } from "./api";

export default function AboutAdmin(){
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(()=>{ load(); }, []);
  async function load(){
    const data = await api.get("/about-images");
    setImages(data);
  }
  async function add(e){
    e.preventDefault();
    const created = await api.post("/about-images", { url });
    setImages([created, ...images]);
    setUrl("");
  }
  async function remove(id){
    if (!window.confirm("Delete this image?")) return;
    await api.del(`/about-images/${id}`);
    setImages(images.filter(i => i.id !== id));
  }

  return (
    <div className="admin-card">
      <h2 style={{marginTop:0}}>About Images</h2>
      <form onSubmit={add} style={{display:'grid', gap:8, marginBottom:12, maxWidth:520}}>
        <input placeholder="Image URL" value={url} onChange={e=>setUrl(e.target.value)} />
        <button className="btn primary" type="submit">Add Image</button>
      </form>
      <div className="grid">
        {images.map(i => (
          <div key={i.id} className="admin-card">
            <img src={i.url} alt="" style={{width:"100%", height:160, objectFit:"cover", borderRadius:8}}/>
            <button className="btn danger" onClick={()=>remove(i.id)} style={{marginTop:8}}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}