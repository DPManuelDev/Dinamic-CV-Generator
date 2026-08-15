import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function ExperienceForm() {
  const { state, addItem, updateItem, removeItem } = useCV();
  if (!state.sections.experiencia) return null;
  const add = () => addItem("experiences", { id: crypto.randomUUID(), role: "", company: "", period: "", description: "" });

  return (
    <FormSection title="Experiência profissional">
      {state.experiences.map((item) => (
        <div className="entry-card" key={item.id}>
          <button className="delete-btn" onClick={() => removeItem("experiences", item.id)}><Trash2 size={15} /></button>
          <div className="field-grid">
            <label>Cargo<input value={item.role} placeholder="Cargo" onChange={e => updateItem("experiences", item.id, "role", e.target.value)} /></label>
            <label>Empresa<input value={item.company} placeholder="Empresa" onChange={e => updateItem("experiences", item.id, "company", e.target.value)} /></label>
            <label>Período<input value={item.period} placeholder="Jan 2022 – Atual" onChange={e => updateItem("experiences", item.id, "period", e.target.value)} /></label>
            <label>Descrição<textarea value={item.description} placeholder="Descrição das atividades..." onChange={e => updateItem("experiences", item.id, "description", e.target.value)} /></label>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}><Plus size={15} /> Adicionar experiência</button>
    </FormSection>
  );
}