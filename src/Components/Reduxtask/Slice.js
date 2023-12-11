import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name: 'counter',
  initialState: {
    Login:false,
    arr:[]
  },
  reducers: {
    updateLogin:(state,action)=>{
        state.Login=action.payload
    },
    updateChange:(state,action)=>{
        state.arr=action.payload
    }
  }
})

export const { updateLogin,updateChange } =Slice.actions

export default Slice.reducer