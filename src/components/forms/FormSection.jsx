import React from "react";
export default function FormSection({ title, children, hidden = false }) {
  if (hidden) return null;
  return (
    <section className="form-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}