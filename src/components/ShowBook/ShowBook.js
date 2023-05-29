import {useState, useContext} from 'react';
import EditBook from '../EditBook/EditBook';
import BooksContext from '../../context/books';

function ShowBook({book}){
	const [showEdit, setShowEdit] = useState(false);
	const {deleteBookById, editBookById} = useContext(BooksContext);

	const handleDelete = (id)=>{
		deleteBookById(id);
	}

	const startEdit = ()=>{
		setShowEdit(true);
	}

	const handleEditSubmit = ()=>{
		setShowEdit(!showEdit);
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