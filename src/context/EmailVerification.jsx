import { useState } from "react";

export default function ValificarEmail(){

    const [email, setEmail] = useState("")
    const [erro, setErro] = useState("")

    

    const handleSubimit = (e) => {e.preventDefault()

        if (!emailValido(email)){
            setErro("Digite um e-mail válido.")
            return
        }
        setErro("")
        alert("E-mail válido")
    }
}

export const emailValido = (email) => {
        const regex = /^[^\s@]+[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }