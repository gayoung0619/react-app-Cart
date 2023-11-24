import { createSlice } from "@reduxjs/toolkit";

const initialTeaState = [
	{
		product_no: '1',
		src: '/images/tea1.jpeg',
		name: '1837 블랙티',
		description: '달콤한 베리와 캐러맬의 풍미가 짙은 여운을 남기는 홍차',
		price: 20000,
	},
	{
		product_no: '2',
		src: '/images/tea2.jpeg',
		name: '엠페러 보이차',
		description: '강한 흙 내음으로 따스한 기운을 전하는 보이차',
		price: 70000,
	},
	{
		product_no: '3',
		src: '/images/tea3.jpeg',
		name: '레드 오브 아프리카 티',
		description: '마리골드에 상큼한 오렌지 향이 더해진 루이보스차',
		price: 40000,
	},
	{
		product_no: '4',
		src: '/images/tea4.jpeg',
		name: '싱가포르 브렉퍼스트 티',
		description: '녹차, 바닐라, 향싱료를 블렌딩해 동양적 풍미를 그려낸 홍차',
		price: 20000,
	},
]

const teaSlice = createSlice({
	name: 'teas',
	initialState: initialTeaState
});

export const teaActions = teaSlice.actions;
export default teaSlice.reducer;
