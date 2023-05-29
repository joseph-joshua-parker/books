
import {useEffect, useContext} from 'react';
import CreateBook from './components/CreateBook/CreateBook';
import ListBook from './components/ListBook/ListBook';

import BooksContext from './context/books';


function App(){

	const {fetchBooks} = useContext(BooksContext);

	useEffect(()=>{
		fetchBooks();
	}, [])	

	return (
		<div className="App">
			
			<ListBook />
			<CreateBook/>
		</div>
	)
}

export default App;