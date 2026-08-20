import React from "react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function SummaryForm() {
  const { state, update } = useCV();
  return (
    <FormSection title="Resumo profissional" hidden = {!state.sections.resumo}>
      <label>Apresentação<textarea value={state.summary} placeholder = "Breve descrição sobre você, objetivos e principais competências..." onChange={e => update({ summary: e.target.value })}/>
      </label>
    </FormSection>
  );
}