import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65a90849219bfa3718683d4b.mockapi.io/api/car-to-rent/";

export const fetchCars = createAsyncThunk(
    "cars/fetchCars",
    async ({ page, limit }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/car?page=${page}&limit=${limit}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message || 'Fetch failed');
      }
    }
    );

// export const addContscts = createAsyncThunk(
//   'contacts/addContscts',
//   async function(contact, {rejectWithValue}) {
//    try {
    
//     const response = await axios.post(`/contacts`, {
//       ...contact
//     })
   
//     return response.data
//   }catch (error) {
//     return rejectWithValue(error.message)
//    }
//   }
// )


// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async function(id, {rejectWithValue}) {
//     try {
//       const response = await axios.delete(`/contacts/${id}`)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.message)
//     }
//   }
// )