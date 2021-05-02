import {createSlice} from '@reduxjs/toolkit';

export const chartSlice = createSlice({
	name:'chart',
	initialState:{
		isShow:false,
	},
	reducers:{
		showChart: state => {
			state.isShow = true;
		},
		setChartVisible: (state, action) => {
			state.isShow = action.payload;
		}
	}
});

export const { showChart, setChartVisible } = chartSlice.actions;

export default chartSlice.reducer;