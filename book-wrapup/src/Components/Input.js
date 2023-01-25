import "./Input.scss"
import { useState } from 'react'
import axios from "axios";

const Input = () => {

    const [search, setSearch] = useState("");
    const [updated, setUpdated] = useState("");
    const [results, setResults] = useState([])
    const [selectedBook, setSelectedBook] = useState({})

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

    const addFavorite = (book) => {
        setSelectedBook(book)
    }

    const bookOptions = results.data?.items.map(o => {
        return(
            <li key={o.id}>
                <img src={o.volumeInfo.imageLinks.smallThumbnail} alt={o.id} />
                <h1>{o.volumeInfo.title}</h1>
                <button onClick={() => addFavorite(o)}>+</button>
            </li>
        )
    })

    return(
        <section className="inputSection">
            <form onSubmit={handleSubmit}
                onChange={handleChange} >
                <input 
                    type="text" 
                    placeholder="Search your favorite book..."
                    onKeyDown={handleKeyDown}
                ></input>
                <div className="line"></div>
            <ul className="bookOptionsSection">
                {bookOptions}
            </ul>
            </form>

        </section>
    )
}

export default Input;