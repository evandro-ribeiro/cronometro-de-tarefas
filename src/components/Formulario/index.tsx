import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
    type?: string | number | undefined
}

function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionaTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {
            tarefa,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }]);
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                <input 
                type="text" 
                id="tarefa" 
                name="tarefa"
                value={tarefa}
                onChange={e => setTarefa(e.target.value)} 
                placeholder="O que você quer estudar" 
                required 
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                type="time" 
                id="tempo" 
                name="tempo"
                value={tempo}
                onChange={e => setTempo(e.target.value)} 
                step="1" 
                min="00:00:00" 
                max="01:30:00" 
                required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;
