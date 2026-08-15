import React from "react";
import { useCV } from "../context/CVContext";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";

export default function CVPreview() {
  const { state } = useCV();
  const Template = {
    classico: ClassicTemplate,
    moderno: ModernTemplate,
    minimalista: MinimalTemplate,
    criativo: CreativeTemplate
  }[state.template];

  return (
    <div className="cv-paper-wrap">
      <div id="cv-print-area" className="cv-paper">
        <Template state={state} />
      </div>
    </div>
  );
}