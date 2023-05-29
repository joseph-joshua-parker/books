import {useState, useContext} from 'react';
import BooksContext from '../../context/books';

function CreateBook(){

	const [title, setTitle] = useState('');
	const {createBook} = useContext(BooksContext);
	const handleTitleChange = (event)=>{
		setTitle(event.target.value);
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		createBook(title);
		setTitle('');
	}

	return (
		<div className="book-create">
			<form>
				<label>Title</label>
				<input className="input" value={title} onChange={handleTitleChange}/>
				<button className="button" onClick={handleSubmit}>Create</button>
			</form>
		</div>
		)
}

export default CreateBook;