import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function EducationForm() {
  const { state, addItem, updateItem, removeItem } = useCV();
  if (!state.sections.formacao) return null;
  const add = () => addItem("education", { id: crypto.randomUUID(), course: "", institution: "", period: "" });

  return (
    <FormSection title="Formação académica">
      {state.education.map((item) => (
        <div className="entry-card" key={item.id}>
          <button className="delete-btn" onClick={() => removeItem("education", item.id)}><Trash2 size={15} /></button>
          <div className="field-grid">
            <label>Curso / Grau<input value={item.course} placeholder="Licenciatura em..." onChange={e => updateItem("education", item.id, "course", e.target.value)} /></label>
            <label>Instituição<input value={item.institution} placeholder="Nome da instituição" onChange={e => updateItem("education", item.id, "institution", e.target.value)} /></label>
            <label>Período<input value={item.period} placeholder="2022 – 2026" onChange={e => updateItem("education", item.id, "period", e.target.value)} /></label>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}><Plus size={15} /> Adicionar formação</button>
    </FormSection>
  );
}