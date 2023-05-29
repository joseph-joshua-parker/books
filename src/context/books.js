import {createContext, useState} from 'react';

const BooksContext = createContext();



const BooksProvider = ({children})=>{
    const [books, setBooks] = useState([]);

	const fetchBooks = async ()=>{
		const response = await axios.get('http://localhost:3001/books');
		setBooks(response.data);
	}

	function newID(){
		return Math.random(Math.round()*9999);
	}
	const createBook = async (title) => {
		 const response = await axios.post('http://localhost:3001/books', {title })
		console.log(response);
		
		const updatedBooks = [...books, response.data] 
		setBooks(updatedBooks)
	}
	const editBookById = async (id, newTitle) => {
		const response = await axios.put(
			`http://localhost:3001/books/${id}`, 
			{title: newTitle}
		);


		const updatedBooks = books.map((book)=>{
			if(book.id === id) return {...book, ...response.data}
			else return book;
		})

		setBooks(updatedBooks);
	}
	const deleteBookById = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`)

		const updatedBooks = books.filter((book)=> book.id !== id);
		setBooks(updatedBooks);
	}
    return (
        <BooksContext.Provider value={{
            books,
            fetchBooks, 
            createBook, 
            editBookById, 
            deleteBookById}}
        >
            {children}
        </BooksContext.Provider>
    )
}

export {BooksProvider};
export default BooksContext;