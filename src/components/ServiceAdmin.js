import React, { useState } from 'react';
import { createService, deleteService, fetchServices } from '../api';

export default function ServiceAdmin() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [services, setServices] = useState([]);

  async function refresh() {
    const data = await fetchServices();
    setServices(data);
  }

  React.useEffect(() => { refresh(); }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', name);
    if (description) fd.append('description', description);
    if (image) fd.append('image', image);
    await createService(fd);
    setName(''); setDescription(''); setImage(null);
    await refresh();
  }

  async function onDelete(id) {
    await deleteService(id);
    await refresh();
  }

  return (
    <div style={{padding:'2rem'}}>
      <h2>Service Admin</h2>
      <form onSubmit={onSubmit} style={{display:'grid', gap:'0.5rem', maxWidth:400}}>
        <input placeholder="Service name" value={name} onChange={e=>setName(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
        <input type="file" accept="image/*" onChange={e=>setImage(e.target.files?.[0] ?? null)} />
        <button type="submit">Create</button>
      </form>

      <hr style={{margin:'1.5rem 0'}} />

      <h3>Existing</h3>
      <ul>
        {services.map(s => (
          <li key={s.id} style={{marginBottom:'0.5rem'}}>
            <strong>{s.name}</strong>
            <button onClick={()=>onDelete(s.id)} style={{marginLeft:'0.75rem'}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
