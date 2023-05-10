import ShowBook from "../ShowBook/ShowBook";

function ListBook({books, onDelete, onEdit}){
	const renderedBooks = books.map((book)=> <ShowBook key={book.id} editBook={onEdit} deleteBook={onDelete} book={book}/>)


	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	)
}

export default ListBook;