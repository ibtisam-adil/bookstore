import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// wngWb1DXtjD6KiiPyWId

export const createBook = createAsyncThunk('storeData', async ({ title, author, category }) => {
  const itemId = Date.now();
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wngWb1DXtjD6KiiPyWId/books',
    {
      title,
      author,
      item_id: itemId,
      category,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return { title, author, category };
});

export const getBook = createAsyncThunk('getData', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wngWb1DXtjD6KiiPyWId/books');

  if (response.data) {
    return Object.entries(response.data).map(([id, bookData]) => ({
      id: parseInt(id, 10),
      title: bookData[0].title,
      author: bookData[0].author,
      category: bookData[0].category,
    }));
  }
  return [];
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wngWb1DXtjD6KiiPyWId/books/${id}`);
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(getBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },

});

export default bookSlice.reducer;
