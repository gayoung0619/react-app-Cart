import Header from "./components/Layout/Header";
import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";
function App() {

	return (
		<div><Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
