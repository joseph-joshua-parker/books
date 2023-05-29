import { useContext } from "react";
import ShowBook from "../ShowBook/ShowBook";
import BooksContext from "../../context/books";

function ListBook(){
	const renderedBooks = books.map((book)=> <ShowBook key={book.id}/>)
	const {books} = useContext(BooksContext);

	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	)
}

export default ListBook;