// import css
import './newfiles.css'

export const NewFile = () => {
    return(
        <form>
            <div>
                <label>Name File:</label>
                <input type="text" required/>
            </div>

            <div>
                <button type="submit" id='send__File__Btn'>Create New File</button>
            </div>
        </form>
    )
}