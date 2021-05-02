import { createSlice } from '@reduxjs/toolkit';

export const diffSlice = createSlice({
	name:'diff',
	initialState:{
		isShow: false,
	},
	reducers:{
		show: state => {
			state.isShow = true;
		}
	}
});

export const {show} = diffSlice.actions;

export default diffSlice.reducer;