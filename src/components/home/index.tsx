import { useEffect, useState } from "react"

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
    const [files, setFiles] = useState<filesType[]>()

    return(
        <section id="section__home">
            {files ? files.map((item, idx) => {
                return(
                    <div key={idx} className="files">
                        <p>{item.name}</p>
                        <p>Create in {item.date}</p>
                    </div>
                )
            }) : <h1>Nao tem nenhum file</h1>}
        </section>
    )
}