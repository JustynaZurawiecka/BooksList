import { createStore } from 'redux';

// initial state
const initialState = {
  books: [
    {
      id: 1, 
      title: 'Of Mice and Men',
      price: 24
    },
    {
      id: 2, 
      title: 'Harry Potter',
      price: 23
    }
  ]
}

export const settings = {
  bookCreatorText: 'Add new book and price',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
};

//action creators
export const removeBook = payload => ({type: "REMOVE_BOOK", payload });
export const addBook = payload => ({type: "ADD_BOOK", payload });

// reducer
export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'REMOVE_BOOK':
      return { books: state.books.filter(book => book !== action.payload)};
    case 'ADD_BOOK':
      return [
        ...state.books,
        {
          id: 2+Math.random(),
          title: action.payload,
          price: action.payload
        }        
      ];
  default:
    return state;
}}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// window.store=store;

export default store;
