import {useState} from 'react';

function EditBook({book, onSubmitEdit}){

	const [title, setTitle] = useState(book.title);

	const handleChange = (event)=>{
		setTitle(event.target.value);
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		onSubmitEdit(book.id, title);


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