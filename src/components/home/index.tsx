import { useEffect, useState } from "react"

// import icons
import { Heart, Trash2 } from 'lucide-react'

// interface
interface filesType{
    name:string,
    date: string
}

// import css
import './home.css'

export const Home = () => {

    // Buscando files na localStorage
    useEffect(() => {
        if(localStorage.getItem('files') !== null){
            const filesLocalStorage = JSON.parse(localStorage.getItem('files') as string)

            setFiles(filesLocalStorage)
        }

    },[])

    // files - state
    const [files, setFiles] = useState<filesType[]>([])

    // deleteFile
    function deleteFile(index:number){
        // Removendo file
        files?.splice(index,1)

        // Salvando alteracoes
        setFiles([...files])

        // salvando na localStorage
        localStorage.setItem('files', JSON.stringify(files))
    }

    return(
        <section id="section__home">
            {files.length > 0 ? files.map((item, idx) => {
                return(
                    <div key={idx} className="files">
                        <div>
                            <p>{item.name}</p>
                            <p>Create in {item.date}</p>
                        </div>

                        <div className="files__interaction">
                            <Heart color="white"/>
                            <Trash2 color="white" onClick={() => deleteFile(idx)}/>
                        </div>
                    </div>
                )
            }) : <h1>Nao tem nenhum file</h1>}
        </section>
    )
}