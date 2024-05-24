import { useCallback, useEffect, useState } from "react"

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

    // deleteFile
    const deleteFile = useCallback((index:number) => {  
            // Removendo file
            files?.splice(index,1)
    
            // Salvando alteracoes
            setFiles([...files])
    
            // salvando na localStorage
            localStorage.setItem('files', JSON.stringify(files)) 
    },[files])

    // favoriteFile
    const updateValueIsFavoriteInFile = useCallback((index:number) => {
        // logica para alterar o valor do favorite
        files[index].isFavorite ? files[index].isFavorite = false : files[index].isFavorite = true 

        // Salvando na localStorage
        setFiles([...files])

        // localStorage
        localStorage.setItem('files', JSON.stringify(files))
    },[files])

    return(
        <section id="section__home">
            {
                files.length > 0 ? files.map((file, idx) => {
                    return(
                        <Post 
                            key={idx}
                            nameFile={file.name} 
                            dateFile={file.date}
                            isFavorite={file.isFavorite}
                            updateValueIsFavoriteInFile={() => updateValueIsFavoriteInFile(idx)} 
                            deleteFile={() => deleteFile(idx)}
                        />
                    )
                }) : <h1>Nao tem nenhum file</h1>
            }
        </section>
    )
}