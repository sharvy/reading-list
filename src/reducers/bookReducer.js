import uuid from "uuid/v1";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.book, id: uuid() }];
    case "REMOVE":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
