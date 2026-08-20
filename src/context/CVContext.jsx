
import { createContext, useContext, useMemo, useState } from "react";
import React from "react";
const initialState = {
  template: "classico",
  accent: "#6C63FF",
  accentLight: "#EEEDFF",
  personal: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    link: ""
  },
  photo: "",
  summary: "",
  profile: "",
  skills: "",
  languages: "",
  sections: {
    pessoal: true,
    resumo: true,
    experiencia: true,
    formacao: true,
    perfil: true,
    habilidades: true,
    idiomas: false,
    certificados: false,
    projetos: false
  },
  experiences: [],
  education: [],
  certificates: [],
  projects: []
};

const CVContext = createContext(null);

export function CVProvider({ children }) {
  const [state, setState] = useState(initialState);

  const update = (patch) => {
    setState((prev) => ({ ...prev, ...patch }));
  };

  const updatePersonal = (field, value) => {
    setState((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const toggleSection = (name) => {
    setState((prev) => ({
      ...prev,
      sections: { ...prev.sections, [name]: !prev.sections[name] }
    }));
  };

  const addItem = (key, item) => {
    setState((prev) => ({ ...prev, [key]: [...prev[key], item] }));
  };

  const updateItem = (key, id, field, value) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key].map((item) => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeItem = (key, id) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== id)
    }));
  };

  const value = useMemo(() => ({
    state,
    update,
    updatePersonal,
    toggleSection,
    addItem,
    updateItem,
    removeItem
  }), [state]);

  return (
  <CVContext.Provider value={value}>{children}</CVContext.Provider>
)
}

export function useCV() {
  const context = useContext(CVContext);
  if (!context) throw new Error("useCV deve ser usado dentro de CVProvider");
  return context;
}