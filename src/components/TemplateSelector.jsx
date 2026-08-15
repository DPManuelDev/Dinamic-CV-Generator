import React from "react";
import { useCV } from "../context/CVContext";

const templates = [
  { id: "classico", name: "Clássico", desc: "Sidebar escuro", type: "classic" },
  { id: "moderno", name: "Moderno", desc: "Header em destaque", type: "modern" },
  { id: "minimalista", name: "Minimalista", desc: "Limpo e simples", type: "minimal" },
  { id: "criativo", name: "Criativo", desc: "Gradiente moderno", type: "creative" }
];

const colors = [
  ["#6C63FF", "#EEEDFF"], ["#185FA5", "#E6F1FB"], ["#0F6E56", "#E1F5EE"],
  ["#D85A30", "#FAECE7"], ["#993556", "#FBEAF0"], ["#2C2C2A", "#F1EFE8"]
];

export default function TemplateSelector() {
  const { state, update } = useCV();

  return (
    <>
      <p className="section-label">Escolha um modelo</p>
      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-card ${state.template === template.id ? "selected" : ""}`}
            onClick={() => update({ template: template.id })}
          >
            <div className={`template-thumb ${template.type}`}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <strong>{template.name}</strong>
            <small>{template.desc}</small>
          </button>
        ))}
      </div>

      <p className="section-label color-label">Cor de destaque</p>
      <div className="color-dots">
        {colors.map(([color, light]) => (
          <button
            aria-label={`Cor ${color}`}
            key={color}
            className={`color-dot ${state.accent === color ? "selected" : ""}`}
            style={{ background: color }}
            onClick={() => update({ accent: color, accentLight: light })}
          />
        ))}
      </div>
    </>
  );
}