const { createSlice } = require("@reduxjs/toolkit")

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {          //reducer is changes the action and we can say pure function
        add(state, action) {
            //redux: 
            //return[...state, action.payload]   this return works internally in createSlice
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
