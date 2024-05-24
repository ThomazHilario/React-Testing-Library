// import icons
import { Heart, Trash2 } from 'lucide-react'

// type
type PostProps = {
    nameFile:string,
    dateFile:number,
    isFavorite:boolean,
    deleteFile: () => void,
    updateValueIsFavoriteInFile: () => void
}

// date-fns
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const Post = ({ nameFile, dateFile, isFavorite, deleteFile, updateValueIsFavoriteInFile }:PostProps) => {

    const dateFormated = formatDistanceToNow(dateFile,{locale:ptBR, addSuffix:true})

    return(
        <div className="files">
            <div>
                <p>{nameFile}</p>
                <p>Criado {dateFormated}</p>
            </div>

            <div className="files__interaction">
                <Heart color={isFavorite ? 'red' : 'white'} onClick={updateValueIsFavoriteInFile}/>
                <Trash2 color="white" onClick={deleteFile}/>
            </div>
        </div>
    )
}