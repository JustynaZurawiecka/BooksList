import { connect } from 'react-redux';
import { removeBook, addBook, settings } from '../../redux/store';
import BookCreator from '../BookCreator/BookCreator.js';


const BooksList = ({ books, removeBook, addBook }) => (
  <section>
      <ul>
        {books.map(book => <li key={book.id}>{book.title}, ${book.price} <button onClick={() => removeBook(book)}>Delete</button></li>)}
      </ul>
      <div>
          <BookCreator text={settings.bookCreatorText} action={addBook} />
      </div>
  </section>
  
)

const mapStateToProps = state => ({
  books: state.books,
})

const mapDispatchToProps = dispatch => ({
  removeBook: (book) => dispatch(removeBook(book)),
  addBook: (title, price) => dispatch(addBook(title, price)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);


/*
import { useSelector } from 'react-redux';

const BooksList = () => {
  
  const books = useSelector(state => state.books)

  return (
    <ul>
      {books.map(book => <li key={book.id}>{book.title}, ${book.price}</li>)}
    </ul>
  )

}

export default BooksList;
*/