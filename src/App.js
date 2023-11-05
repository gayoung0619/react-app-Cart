import Header from "./components/Layout/Header";
import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Modal from "./components/UI/Modal";
// import CartProvider from "./store/CartProvider";
function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => {
		setCartIsShown(true);
	}
	const hideCartHandler = () => {
		setCartIsShown(false);
	}
	return (
		<div>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</div>
	);
}

export default App;
