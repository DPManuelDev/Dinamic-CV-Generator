import react from "react"
import { useCV } from "../../context/CVContext"
import FormSection from "./FormSection"


export default function PerfilPessaol (){
const {state, update}= useCV()

return
    <FormSection title= "Perfíl Pessoal" hidden={!state.Section.profile}>
        <label >Perfíl <textarea value={state.profile} placeholder="O teu Perfil" onChange={ e  =>update({profile:e.target.value})}></textarea>
    </label>
</FormSection>

}
