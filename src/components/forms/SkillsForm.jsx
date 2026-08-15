import React from "react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function SkillsForm() {
  const { state, update } = useCV();
  return (
    <FormSection title="Habilidades" hidden={!state.sections.habilidades}>
      <label>Lista de habilidades<textarea value={state.skills} placeholder="JavaScript, React, Gestão de projetos, Liderança..." onChange={e => update({ skills: e.target.value })} /></label>
      <small className="field-help">Separe as habilidades por vírgulas.</small>
    </FormSection>
  );
}