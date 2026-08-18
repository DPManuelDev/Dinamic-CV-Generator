import React from "react";
import {
  User, AlignLeft, BriefcaseBusiness, GraduationCap, Wrench, Languages,
  Award, Rocket, Pin
} from "lucide-react";
import { useCV } from "../context/CVContext";

const sections = [
  ["pessoal", "Dados pessoais", User],
  ["resumo", "Resumo profissional", AlignLeft],
  ["perfil", "Perfíl Pessoal", Pin],
  ["experiencia", "Experiência profissional", BriefcaseBusiness],
  ["formacao", "Formação académica", GraduationCap],
  ["habilidades", "Habilidades", Wrench],
  ["idiomas", "Idiomas", Languages],
  ["certificados", "Certificados", Award],
  ["projetos", "Projetos", Rocket] 
];

export default function SectionSelector() {
  const { state, toggleSection } = useCV();
  return (
    <>
      <p className="section-label">Ative as seções do seu CV</p>
      <div className="section-list">
        {sections.map(([id, label, Icon]) => (
          <button className="section-toggle" key = {id} onClick = { () => toggleSection(id)}>
            <span><Icon size={16} /> {label}</span>
            <span className={`toggle ${state.sections[id] ? "on" : ""}`}><i /></span>
          </button>
        ))}
      </div>
    </>
  );
}