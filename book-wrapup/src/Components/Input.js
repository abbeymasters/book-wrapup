import "./Input.scss"
import { useState } from 'react'
import axios from "axios";

const Input = () => {

    const [search, setSearch] = useState("");
    const [updated, setUpdated] = useState("");
    const [results, setResults] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + updated + "&maxResults=20")
        .then(res => {
            setResults(res)
        })
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setUpdated(search);
          }
    }

    const bookOptions = results.data?.items.map(o => {
        return(
            <>
                <h1>{o.volumeInfo.title}</h1>
                <img src={o.volumeInfo.imageLinks.smallThumbnail} />
            </>
        )
    })

    

    return(
        <section className="inputSection">
            <form onSubmit={handleSubmit}
                onChange={handleChange} 
            >
                <input 
                    type="text" 
                    placeholder="Search your favorite book..."
                    onKeyDown={handleKeyDown}
                ></input>
                <div className="line"></div>
            </form>

            <ul>
                {bookOptions}
            </ul>
        </section>
    )
}

export default Input;