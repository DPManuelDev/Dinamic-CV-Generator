import React from "react";
import { ContactLine, Entries, Languages, SectionTitle, Skills } from "./templateHelpers";

export default function MinimalTemplate({ state }) {
  const { personal: p } = state;
  return (
    <div className="cv minimal">
      <header className="minimal-head">
        {state.photo && <img className="cv-photo minimal-photo" src={state.photo} alt="" />}
        <div className="minimal-identity">
          <div className="cv-name">{p.name || "Seu Nome"}</div>
          <div className="cv-title">{p.title || "Cargo / Título"}</div>
          <ContactLine state={state} />
        </div>
      </header>
      {state.sections.resumo && state.summary && <section className="cv-summary"> {state.summary}</section>}
      <Entries state={state} />

      {state.sections.perfil && state.profile && <section className="cv-summary"> {state.summary}</section>}
      <Entries state={state} />

      <div className="minimal-bottom">
        {state.sections.habilidades && <section>
          <SectionTitle color="#222" minimal> Habilidades </SectionTitle>
          <Skills text={state.skills} color={state.accent} /></section>
          }
        {state.sections.idiomas && <section>
          <SectionTitle color="#222" minimal> Idiomas </SectionTitle>
          <Languages text={state.languages} /></section>
          }
      </div>
    </div>
  );
}