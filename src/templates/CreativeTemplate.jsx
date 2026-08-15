import React from "react";
import { ContactLine, Entries, Languages, SectionTitle, Skills } from "./templateHelpers";

export default function CreativeTemplate({ state }) {
  const { personal: p } = state;
  return (
    <div className="cv creative">
      <header className="creative-head" style={{ background: `linear-gradient(135deg, ${state.accent}, #D4537E)` }}>
        {state.photo ? <img className="cv-photo creative-photo" src={state.photo} alt="" /> : <div className="cv-photo initials creative-initial">{(p.name || "S").charAt(0).toUpperCase()}</div>}
        <div>
          <div className="cv-name">{p.name || "Seu Nome"}</div>
          <div className="cv-title">{p.title || "Cargo / Título"}</div>
          <ContactLine state={state} light />
        </div>
      </header>
      <div className="creative-grid">
        <aside className="creative-side">
          {state.sections.habilidades && <div className="side-block"><SectionTitle color={state.accent}>Habilidades</SectionTitle><Skills text={state.skills} color={state.accent} /></div>}
          {state.sections.idiomas && <div className="side-block"><SectionTitle color={state.accent}>Idiomas</SectionTitle><Languages text={state.languages} /></div>}
        </aside>
        <main>
          {state.sections.resumo && state.summary && <section className="cv-summary">{state.summary}</section>}
          <Entries state={state} />
        </main>
      </div>
    </div>
  );
}