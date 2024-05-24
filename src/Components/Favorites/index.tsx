// import React
import { useState, useEffect } from "react"

// interface
interface filesType{
    name:string,
    date: number,
    isFavorite:boolean
}

// Post Component
import { Post } from "../Post"

export const Favorites = () => {

    // Buscando os files na localStorage
    useEffect(() => {
        // Verificando se tem files na localStorage
        if(localStorage.getItem('files') !== null){
            
            // Convertendo os files do usuario para dados do javascript
            const filesUser = JSON.parse(localStorage.getItem('files') as string)

            // Salvando na state
            setFiles(filesUser)
        }
    },[])

    // state - files
    const [files, setFiles] = useState<filesType[]>([])

    // favoritesFilesUser
    const favoritesFilesUser = files.filter((file) => file.isFavorite === true)

    return(
        <div className="container">
            {favoritesFilesUser?.length > 0 ? favoritesFilesUser?.map((favoriteFile, idx) => {
                return <Post 
                    key={idx} 
                    index={files.findIndex(file => file.name === favoriteFile.name)}
                    nameFile={favoriteFile.name} 
                    dateFile={favoriteFile.date} 
                    isFavorite={favoriteFile.isFavorite}
                    files={files}
                    setFiles={setFiles}
                />
            }) : <h1>Não possui file favoritos!</h1>}
        </div>
    )
}