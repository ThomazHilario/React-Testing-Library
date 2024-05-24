// import react
import { FormEvent, useState } from 'react'

// import css
import './newfiles.css'

export const NewFile = () => {

    const [value, setValue] = useState<string>('')

    // Enviando arquivo para localStorage
    function sendFileInLocalStorage(e:FormEvent){
        // Evitando a pagina atualizar
        e.preventDefault()
      
        // Logica da localStorage
        const myArrFiles = localStorage.getItem('files') !== null ? JSON.parse(localStorage.getItem('files') as string) : []
        
        // Jogando o novo file para o array de files
        myArrFiles.push({
            name:value,
            date: Date.now(),
            isFavorite:false
        })

        // Salvar na localStorage
        localStorage.setItem('files', JSON.stringify(myArrFiles))
        
        // Resetando a state value ao valor inicial
        setValue('')
    }

    return(
        <form onSubmit={sendFileInLocalStorage}>
            <div>
                <label>Name File:</label>
                <textarea value={value} onChange={(e) => setValue(e.target.value)} required/>
            </div>

            <div>
                <button type="submit" id='send__File__Btn'>Create New File</button>
            </div>
        </form>
    )
}
