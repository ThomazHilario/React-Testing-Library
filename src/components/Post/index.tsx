// import icons
import { Heart, Trash2 } from 'lucide-react'

// filesProps
interface filesType{
    name:string,
    date: number,
    isFavorite:boolean
}

// type
type PostProps = {
    index:number,
    nameFile:string,
    dateFile:number,
    isFavorite:boolean,
    files:filesType[],
    setFiles:React.Dispatch<React.SetStateAction<filesType[]>>
}

// date-fns
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const Post = ({ index, nameFile, dateFile, isFavorite, files, setFiles }:PostProps) => {

    // deleteFile
    function deleteFile(){
        // Removendo file
        files?.splice(index,1)

        // Salvando alteracoes
        setFiles([...files])

        // salvando na localStorage
        localStorage.setItem('files', JSON.stringify(files)) 
    }

    // updateValueIsFavoriteInFile
    function updateValueIsFavoriteInFile(){
        // logica para alterar o valor do favorite
        files[index].isFavorite ? files[index].isFavorite = false : files[index].isFavorite = true 

        // Salvando na localStorage
        setFiles([...files])

        // localStorage
        localStorage.setItem('files', JSON.stringify(files))
    }

    // data formatada
    const dateFormated = formatDistanceToNow(dateFile,{locale:ptBR, addSuffix:true})

    return(
        <div className="files" data-testid="files">
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