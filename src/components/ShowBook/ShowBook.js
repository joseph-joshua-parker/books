import {useState} from 'react';
import EditBook from '../EditBook/EditBook';

function ShowBook({book, deleteBook, editBook}){
	const [showEdit, setShowEdit] = useState(false);
	
	const handleDelete = (id)=>{
		deleteBook(id);
	}

	const startEdit = ()=>{
		setShowEdit(true);
	}

	const handleEditSubmit = (id, newTitle)=>{
		setShowEdit(!showEdit);
		editBook(id, newTitle)
	}

	let content = <h3>{book.title}</h3>
	if(showEdit) content = <EditBook onSubmitEdit={handleEditSubmit} book={book}/>

	return (
		<div className="book-show">
			<img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
			<div>{content}</div>
			<div>
				<button className="edit" onClick={startEdit}></button>
				<button className="delete" onClick={()=>handleDelete(book.id)}></button>
			</div>
		</div>
		
	)
}

export default ShowBook;