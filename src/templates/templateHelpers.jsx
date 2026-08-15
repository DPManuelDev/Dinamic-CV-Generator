import React from "react";
export function SectionTitle({ children, color, minimal = false }) {
  return <h2 className={`cv-section-title ${minimal ? "minimal" : ""}`} style={{ color }}>{children}</h2>;
}

export function ContactLine({ state, light = false }) {
  const { email, phone, location, link } = state.personal;
  const values = [email, phone, location, link].filter(Boolean);
  return values.length ? <div className={`cv-contact ${light ? "light" : ""}`}>{values.map((v, i) => <span key={i}>{v}</span>)}</div> : null;
}

export function Skills({ text, color, light = false }) {
  if (!text.trim()) return null;
  return <div className="cv-tags">{text.split(",").map((s, i) => s.trim()).filter(Boolean).map((s, i) => <span key={i} style={{ background: light ? "rgba(255,255,255,.12)" : "#fff", color: light ? "#fff" : color, borderColor: light ? "rgba(255,255,255,.2)" : color }}>{s}</span>)}</div>;
}

export function Languages({ text }) {
  if (!text.trim()) return null;
  return <ul className="cv-list">{text.split(",").map(s => s.trim()).filter(Boolean).map((s, i) => <li key={i}>{s}</li>)}</ul>;
}

export function Entries({ state }) {
  return (
    <>
      {state.sections.experiencia && state.experiences.length > 0 && (
        <section className="cv-section">
          <SectionTitle color={state.accent}>Experiência Profissional</SectionTitle>
          {state.experiences.map(e => (
            <article className="cv-entry" key={e.id}>
              <div className="cv-entry-head"><strong>{e.role || "Cargo"}</strong><span>{e.period}</span></div>
              <div className="cv-entry-company" style={{ color: state.accent }}>{e.company}</div>
              {e.description && <p>{e.description}</p>}
            </article>
          ))}
        </section>
      )}

      {state.sections.formacao && state.education.length > 0 && (
        <section className="cv-section">
          <SectionTitle color={state.accent}>Formação Académica</SectionTitle>
          {state.education.map(e => (
            <article className="cv-entry" key={e.id}>
              <div className="cv-entry-head"><strong>{e.course || "Curso / Grau"}</strong><span>{e.period}</span></div>
              <div className="cv-entry-company" style={{ color: state.accent }}>{e.institution}</div>
            </article>
          ))}
        </section>
      )}

      {state.sections.certificados && state.certificates.length > 0 && (
        <section className="cv-section">
          <SectionTitle color={state.accent}>Certificados</SectionTitle>
          {state.certificates.map(e => (
            <article className="cv-entry" key={e.id}>
              <strong>{e.name}</strong>
              <p>{e.institution}{e.year ? ` — ${e.year}` : ""}</p>
            </article>
          ))}
        </section>
      )}

      {state.sections.projetos && state.projects.length > 0 && (
        <section className="cv-section">
          <SectionTitle color={state.accent}>Projetos</SectionTitle>
          {state.projects.map(e => (
            <article className="cv-entry" key={e.id}>
              <strong>{e.name}</strong>
              {e.description && <p>{e.description}</p>}
            </article>
          ))}
        </section>
      )}
    </>
  );
}