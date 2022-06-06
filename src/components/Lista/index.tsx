import React from 'react';
import style from './Lista.module.scss'

function Lista(){
    const tarefas = [{
        terefa: 'React',
        tempo: '02:03:20'
    },
    {
        terefa: 'JavaScript',
        tempo: '01:01:00'
    },
    {
        terefa: 'TypeScript',
        tempo: '01:50:00'
    },
];
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                    <h3>
                        {item.terefa}
                    </h3>
                    <span>
                        {item.tempo}
                    </span>
                </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;