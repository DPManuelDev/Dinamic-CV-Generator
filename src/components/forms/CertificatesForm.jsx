import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function CertificatesForm() {
  const { state, addItem, updateItem, removeItem } = useCV();
  if (!state.sections.certificados) return null;
  const add = () => addItem("certificates", { id: crypto.randomUUID(), name: "", institution: "", year: "" });

  return (
    <FormSection title="Certificados">
      {state.certificates.map((item) => (
        <div className="entry-card" key={item.id}>
          <button className="delete-btn" onClick={() => removeItem("certificates", item.id)}><Trash2 size={15} /></button>
          <div className="field-grid">
            <label>Certificado<input value={item.name} placeholder="Nome do certificado" onChange={e => updateItem("certificates", item.id, "name", e.target.value)} /></label>
            <label>Instituição<input value={item.institution} placeholder="Instituição" onChange={e => updateItem("certificates", item.id, "institution", e.target.value)} /></label>
            <label>Ano<input value={item.year} placeholder="2025" onChange={e => updateItem("certificates", item.id, "year", e.target.value)} /></label>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}><Plus size={15} /> Adicionar certificado</button>
    </FormSection>
  );
}