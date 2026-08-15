import React from "react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function LanguagesForm() {
  const { state, update } = useCV();
  return (
    <FormSection title="Idiomas" hidden={!state.sections.idiomas}>
      <label>Idiomas<textarea value={state.languages} placeholder="Português (nativo), Inglês (avançado), Francês (básico)..." onChange={e => update({ languages: e.target.value })} /></label>
      <small className="field-help">Separe os idiomas por vírgulas.</small>
    </FormSection>
  );
}