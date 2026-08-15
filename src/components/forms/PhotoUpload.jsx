import React from "react";
import { ImagePlus, X } from "lucide-react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";

export default function PhotoUpload() {
  const { state, update } = useCV();

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => update({ photo: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <FormSection title="Fotografia">
      <div className="photo-box">
        {state.photo ? <img src={state.photo} alt="Foto do candidato" /> : <div className="photo-placeholder"><ImagePlus size={22} /><span>Adicionar foto</span></div>}
        <label className="upload-btn">
          Escolher imagem
          <input type="file" accept="image/*" onChange={onFile} hidden />
        </label>
        {state.photo && <button className="remove-photo" onClick={() => update({ photo: "" })}><X size={15} /> Remover</button>}
      </div>
    </FormSection>
  );
}