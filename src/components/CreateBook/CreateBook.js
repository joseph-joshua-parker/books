import {useState} from 'react';


function CreateBook({onSubmit}){

	const [title, setTitle] = useState('');
	const handleTitleChange = (event)=>{
		setTitle(event.target.value);
	}

	const handleSubmit = (event)=>{
		event.preventDefault();
		onSubmit(title);
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