import React from "react";
import { useState } from "react";
import { useCV } from "../../context/CVContext";
import FormSection from "./FormSection";
//import {emailValido} from "../../context/EmailVerification.jsx"


export default function PersonalForm() {
  const { state, updatePersonal } = useCV();
  if (!state.sections.pessoal) return null;
  const p = state.personal;

////////////////////////////////////
const emailValidator = (e) => {
const email= e.target.value
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regex.test(email)){
           const setErro = ("Digite um e-mail válido.")
            return
        }
        alert("E-mail válido")
    }
///////////////////////////////////////

  return (
    <FormSection title="Dados pessoais">
      <div className="field-grid">
        <label>Nome completo<input value={p.name} placeholder="Ex: Maria Silva" onChange={e => updatePersonal("name", e.target.value)} required/>
        </label>

        <label>Cargo / Título<input value={p.title} placeholder="Ex: Engenheira de Software" onChange={e => updatePersonal("title", e.target.value)} /></label>

        <label > Email<input id="email-imput" type="email" value={p.email} 
        placeholder="fulano@gmail.com" onChange  = {e => updatePersonal ("email", e.target.value)} 
        />

        </label>
        <label>Telefone<input value = {p.phone} placeholder="+244 900 000 000" onChange={e => updatePersonal("phone", e.target.value)} required/>
        </label>
        <label>Localização<input value={p.location} placeholder="Luanda, Angola" onChange={e => updatePersonal("location", e.target.value)} required/>
        </label>
        <label>LinkedIn / Portfólio <small>(Opcional)</small><input value={p.link} placeholder="linkedin.com/in/maria" onChange={e => updatePersonal("link", e.target.value)} /></label>
      </div>
    </FormSection>
  );
}