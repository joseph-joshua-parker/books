import {useState} from 'react';
import CreateBook from './components/CreateBook/CreateBook';
import ListBook from './components/ListBook/ListBook';

function App(){
	const [books, setBooks] = useState([]);

	function newID(){
		return Math.random(Math.round()*9999);
	}

	const createBook = (title) => {
		const updatedBooks = [...books, {id: newID(), title}] 
		setBooks(updatedBooks)
	}
	const editBookById = (id, newTitle) => {
		const updatedBooks = books.map((book)=>{
			if(book.id === id) return {...book, title:newTitle}
			else return book;
		})

		setBooks(updatedBooks);
	}

	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book)=> book.id !== id);
		setBooks(updatedBooks);
	}
	

	return (
		<div className="App">
			
			<ListBook onEdit={editBookById} onDelete={deleteBookById} books={books}/>
			<CreateBook onSubmit={createBook}/>
		</div>
	)
}

export default App;