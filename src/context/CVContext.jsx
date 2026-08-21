
import { Satellite } from "lucide-react";
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
  //ESTADO ACTUAL DO CV
  const [state, setState] = useState(initialState);
//HISTÓRICO ANTERIOR 
   const [past, setPaste]= useState([])

   //HISTÓRICO FUTURO 
   const [future, setFuture]=useState([])

   /*
   MAIN FUNCTION FOR UPDATING  THE CV
   */
  const changeState = (newState) =>{
    setPaste((p) =>[...p, state])

    setState(newState)
    //whatever alteration will delete the redo
    setFuture([])
  }
  
/*
*GENERIC ATULAIZATION
 */

  const update = (patch) => {
    changeState({...state, ...patch});
  };

 /*
 *PERSONAL DATA ACTUALIZATION
 */

  const updatePersonal = (field, value) => {

    changeState({ ...state,
      personal: { ...state.personal, [field]:value 

      }
    })
  }

  /*
  *ANEABLE/DISABLE SECTIONS 
  */
  const toggleSection = (name) => {
   changeState({
      ...state, sections: { ...state.sections, [name]: !prev.sections[name] 

      }
    });
  };

  /*
  *ADD ITEM
  */
  const addItem = (key, item) => {
    changeState({ ...state, [key]: [...state[key], item] 

    })

  };

  /* UPDATE ITEM  */
  const updateItem = (key, id, field, value) => {

    changeState({
      ...state,
      [key]: state[key].map((item) => item.id === id ? {
         ...item, [field]: value 
        } : item
        )
    });
  };
/*REMOVE ITEM  */
  const removeItem = (key, id) => {
    changeState({
      ...state,
      [key]: state[key].filter((item) =>
         item.id !== id)
    });
  };
  /*
  *====================
  *UNDO
  =====================
  */
  const undo = () =>{

    if(past.length ===0){
      return
    }

  const previousSTate = past[past.length -1]
  
  setPaste((p)=>
    p.slice(0,-1)
  )
  setFuture((p) =>[
    state, ...p
  ])

  setState(previousSTate)
  }
  

  /*
  *=================
  * REDO
  *================
  */
const redo = ()=>{
  if(future.length ===0){
    return
  }
  const nextState = future[0]

  setFuture((p) =>
  p.slice(1)
  )

  setPaste((p) =>[
    ...p, state
  ])

  setState(nextState)
}

/*
* VERIFY IF UNDO EXITS
 */
const canUndo = past.length > 0

/*
* VERIFY IF REDO EXITS
 */
const canRedo = future.length  > 0

/* 
*KEYBOARD SHORTCUT
*/
React.useEffect(() =>{
  const handleKeyBoard = (event) =>{
    //CTRL + Z
    if(
      event.ctrlKey &&
      event.key.toLowerCase() === "z" &&
      !event.shiftKey
    ){
      event.preventDefault()
      undo()
    }

    if(
      event.ctrlKey &&
      event.key.toLowerCase()==="y"
    ){
      event.preventDefault()
      redo()
    }
    if(
      event.ctrlKey &&
      event.shiftKey &&
      event.key.toLowerCase()==="z"
    )
    {
      event.preventDefault()

      redo()
    }
  }
 window.addEventListener(
  "keydown", handleKeyBoard
 )
 return() =>{
  window.removeEventListener(
    "keydown", handleKeyBoard
  )
 } 

}, [state, past, future] )

/* COMPONENTS DATA */
  const value = useMemo(() => ({
    state,
    update,
    updatePersonal,
    toggleSection,
    addItem,
    updateItem,
    removeItem,

    //UNDO / REDO
    undo, 
    redo,
    canRedo,
    canUndo
  }), [state,
    past,
    future,
    canRedo, 
    canUndo
  ]);

  return (
  <CVContext.Provider value={value}>{children}</CVContext.Provider>
)
}

export function useCV() {

  const context = useContext(CVContext)

  if (!context){
    throw new Error(
    "useCV deve ser usado dentro de CVProvider"
  )
} 
  return context;
}