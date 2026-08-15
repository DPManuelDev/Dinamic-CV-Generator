import React from "react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function PersonalForm() {
  const { state, updatePersonal } = useCV();
  if (!state.sections.pessoal) return null;
  const p = state.personal;

  return (
    <FormSection title="Dados pessoais">
      <div className="field-grid">
        <label>Nome completo<input value={p.name} placeholder="Ex: Maria Silva" onChange={e => updatePersonal("name", e.target.value)} /></label>
        <label>Cargo / Título<input value={p.title} placeholder="Ex: Engenheira de Software" onChange={e => updatePersonal("title", e.target.value)} /></label>
        <label>Email<input type="email" value={p.email} placeholder="maria@email.com" onChange={e => updatePersonal("email", e.target.value)} /></label>
        <label>Telefone<input value={p.phone} placeholder="+244 900 000 000" onChange={e => updatePersonal("phone", e.target.value)} /></label>
        <label>Localização<input value={p.location} placeholder="Luanda, Angola" onChange={e => updatePersonal("location", e.target.value)} /></label>
        <label>LinkedIn / Portfólio<input value={p.link} placeholder="linkedin.com/in/maria" onChange={e => updatePersonal("link", e.target.value)} /></label>
      </div>
    </FormSection>
  );
}