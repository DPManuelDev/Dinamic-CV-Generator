import React from "react";
import { ContactLine, Entries, Languages, SectionTitle, Skills } from "./templateHelpers";

export default function ModernTemplate({ state }) {
  const { personal: p } = state;
  return (
    <div className="cv modern">
      <header className="modern-head" style={{ background: state.accent }}>
        <div>
          <div className="cv-name">{p.name || "Seu Nome"}</div>
          <div className="cv-title">{p.title || "Cargo / Título"}</div>
          <ContactLine state={state} light />
        </div>
        {state.photo && <img className="cv-photo modern-photo" src={state.photo} alt="" />}
      </header>
      <div className="modern-grid">
        <main>
          {state.sections.resumo && state.summary && <section className="cv-summary">{state.summary}</section>}
          <Entries state={state} />

          {state.sections.perfil && state.profile && <section className="cv-summary">{state.profile}</section>}
          <Entries state={state} />
        </main>

        <aside className="modern-side">
          {state.sections.habilidades && <div className="side-block"><SectionTitle color={state.accent}>Habilidades</SectionTitle><Skills text={state.skills} color={state.accent} /></div>}
          {state.sections.idiomas && <div className="side-block"><SectionTitle color={state.accent}>Idiomas</SectionTitle><Languages text={state.languages} /></div>}
        </aside>
      </div>
    </div>
  );
}