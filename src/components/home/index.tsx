import { useEffect, useState } from "react"

// interface
interface filesType{
    name:string,
    date: number,
    isFavorite:boolean
}

// Post Component
import { Post } from "../Post"

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

    return(
        <section className="container">
            {
                files.length > 0 ? files.map((file, idx) => {
                    return(
                        <Post 
                            key={idx}
                            index={idx}
                            nameFile={file.name} 
                            dateFile={file.date}
                            isFavorite={file.isFavorite}
                            files={files}
                            setFiles={setFiles}
                        />
                    )
                }) : <h1>Nao tem nenhum file</h1>
            }
        </section>
    )
}