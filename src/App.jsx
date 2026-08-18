import React from "react";
import { useState } from "react";
import { Download, Eye, FileText, Palette } from "lucide-react";
import { useCV } from "./context/CVContext";
import TemplateSelector from "./components/TemplateSelector";
import SectionSelector from "./components/SectionSelector";
import PersonalForm from "./components/forms/PersonalForm";
import SummaryForm from "./components/forms/SummaryForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import EducationForm from "./components/forms/EducationForm";
import SkillsForm from "./components/forms/SkillsForm";
import LanguagesForm from "./components/forms/LanguagesForm";
import CertificatesForm from "./components/forms/CertificatesForm";
import ProjectsForm from "./components/forms/ProjectsForm";
import PhotoUpload from "./components/forms/PhotoUpload";
import PersonalProfileForm from "./components/forms/PersonalProfileForm" 
import CVPreview from "./components/CVPreview";
import { exportCVToPDF } from "./services/pdfService";

export default function App() {
  const [tab, setTab] = useState("modelo");
  const [exporting, setExporting] = useState(false);
  const { state } = useCV();

  const go = (next) => setTab(next);

  const handlePDF = async () => {
    setExporting(true);
    try {
      await exportCVToPDF("cv-print-area", state.personal.name || "meu-cv");
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon"><FileText size={20} /></span>
          <div>
            <strong>Criador de CV</strong>
            <small>Crie um currículo profissional em poucos minutos</small>
          </div>
        </div>
        <button className="top-download" onClick={handlePDF} disabled={exporting}>
          <Download size={17} />
          {exporting ? "A preparar..." : "Baixar PDF"}
        </button>
      </header>

      <section className="builder">
        <aside className="sidebar">
          <nav className="step-tabs" aria-label="Etapas">
            <button className={tab === "modelo" ? "active" : ""} onClick={() => go("modelo")}>
              <Palette size={15} /> Modelo
            </button>
            <button className={tab === "secoes" ? "active" : ""} onClick={() => go("secoes")}>
              Seções
            </button>
            <button className={tab === "dados" ? "active" : ""} onClick={() => go("dados")}>
              Dados
            </button>
          </nav>

          {tab === "modelo" && (
            <div className="panel-content">
              <TemplateSelector />
              <div className="panel-actions">
                <button className="primary-btn" onClick={() => go("secoes")}>Próximo: Seções →</button>
              </div>
            </div>
          )}

          {tab === "secoes" && (
            <div className="panel-content">
              <SectionSelector />
              <div className="panel-actions">
                <button className="primary-btn" onClick={() => go("dados")}>Próximo: Preencher dados →</button>
              </div>
            </div>
          )}

          {tab === "dados" && (
            <div className="panel-content form-panel">
              <PhotoUpload />
              <PersonalForm />
              <PersonalProfileForm />
              <SummaryForm />
              <ExperienceForm />
              <EducationForm />
              <SkillsForm />
              <LanguagesForm />
              <CertificatesForm />
              <ProjectsForm />
              <button className="primary-btn full" onClick = {handlePDF} disabled={exporting}>
                <Download size={17} />
                {exporting ? "A preparar PDF..." : "Exportar CV em PDF"}
              </button>
            </div>
          )}
        </aside>

        <section className="preview-panel">
          <div className="preview-heading">
            <div>
              <span className="eyebrow"><Eye size={14} /> Pré-visualização</span>
              <h1>Veja o seu CV enquanto o cria</h1>
            </div>
            <span className="live-badge">Atualização em tempo real</span>
          </div>
          <div className="preview-stage">
            <CVPreview />
          </div>
        </section>
      </section>
    </main>
  );
}