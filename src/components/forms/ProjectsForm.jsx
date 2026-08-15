import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function ProjectsForm() {
  const { state, addItem, updateItem, removeItem } = useCV();
  if (!state.sections.projetos) return null;
  const add = () => addItem("projects", { id: crypto.randomUUID(), name: "", description: "" });

  return (
    <FormSection title="Projetos">
      {state.projects.map((item) => (
        <div className="entry-card" key={item.id}>
          <button className="delete-btn" onClick={() => removeItem("projects", item.id)}><Trash2 size={15} /></button>
          <div className="field-grid">
            <label>Nome do projeto<input value={item.name} placeholder="Nome do projeto" onChange={e => updateItem("projects", item.id, "name", e.target.value)} /></label>
            <label>Descrição<textarea value={item.description} placeholder="Descrição do projeto..." onChange={e => updateItem("projects", item.id, "description", e.target.value)} /></label>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={add}><Plus size={15} /> Adicionar projeto</button>
    </FormSection>
  );
}