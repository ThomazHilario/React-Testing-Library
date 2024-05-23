import { useState } from "react"

// import css
import './home.css'

export const Home = () => {

    const [files, setFiles] = useState([
        {
            name:'testes',
            date: new Date()
        }
    ])

    return(
        <section id="section__home">
            {files.length > 0 && files.map((item, idx) => {
                return(
                    <div key={idx}>{item.name}</div>
                )
            })}
        </section>
    )
}