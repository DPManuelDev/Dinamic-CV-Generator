import React from "react";
import { ContactLine, Entries, Languages, SectionTitle, Skills } from "./templateHelpers";

export default function ClassicTemplate({ state }) {
  const { personal: p } = state;
  return (
    <div className="cv classic">
      <aside className="classic-side">
        {state.photo ? <img className="cv-photo" src={state.photo} alt="" /> : <div className="cv-photo initials">{(p.name || "S").charAt(0).toUpperCase()}</div>}
        <div className="cv-name">{p.name || "Seu Nome"}</div>
        <div className="cv-title">{p.title || "Cargo / Título"}</div>
        <ContactLine state={state} light />
        {state.sections.habilidades && <div className="side-block"><SectionTitle color="#fff">Habilidades</SectionTitle><Skills text={state.skills} color={state.accent} light /></div>}
        {state.sections.idiomas && <div className="side-block"><SectionTitle color="#fff">Idiomas</SectionTitle><Languages text={state.languages} /></div>}
      </aside>
      <div className="classic-main">
        {state.sections.resumo && state.summary && <section className="cv-summary" style={{ borderColor: state.accentLight }}>{state.summary}</section>}
        <Entries state={state} />
      </div>
    </div>
  );
}