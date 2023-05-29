import {useState, useContext} from 'react';
import BooksContext from '../../context/books';
function EditBook({book, onEditSubmit}){

	const [title, setTitle] = useState(book.title);
	const {editBookById} = useContext(BookContext);
	const handleChange = (event)=>{
		setTitle(event.target.value);
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		onEditSubmit();
		editBookById(book.id, title);
	}

	return (
		<form className="book-edit" onSubmit={handleSubmit}>
			<label></label>
			<input className="input" value={title} onChange={handleChange}/>

			<button className="button is-primary">
				Save
			</button>
		</form>
	)
}

export default EditBook;