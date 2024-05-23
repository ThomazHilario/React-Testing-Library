// import css
import { useState } from 'react'

import './newfiles.css'

export const NewFile = () => {

    const [value, setValue] = useState<string>()

    function sendFileInLocalStorage(e){
        e.preventDefault()

        if(localStorage.getItem('files') !== null){
            // Buscando o que tem na localStorage
            const filesArr = JSON.parse(localStorage.getItem('files') as string)

            // Criando objeto para o filesArr
            const myNewFile = {
                name:value,
                date: new Date().getUTCDate().toString()
            }

            // Adicionando o novo objeto ao filesArr
            filesArr.push(myNewFile)

            // Salvando as alteracoes na localStorage
            localStorage.setItem('files', JSON.stringify(filesArr))
        } else{
            // Criando um novo array 
            const filesArr = []

            // Criando um novo objeto
            const myNewFile = {
                name:value,
                date: new Date().getDate().toString()
            }

            // Adicionando o novo objeto no array
            filesArr.push(myNewFile)

            // SAlvando na localStorage
            localStorage.setItem('files', JSON.stringify(filesArr))
        }
    }

    return(
        <form onSubmit={sendFileInLocalStorage}>
            <div>
                <label>Name File:</label>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required/>
            </div>

            <div>
                <button type="submit" id='send__File__Btn'>Create New File</button>
            </div>
        </form>
    )
}