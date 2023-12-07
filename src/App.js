import Header from "./components/Layout/Header";
import {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const queryClient = new QueryClient();
function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => {
		setCartIsShown(true);
	}
	const hideCartHandler = () => {
		setCartIsShown(false);
	}
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				{cartIsShown && <Cart onClose={hideCartHandler} />}
				<Header onShowCart={showCartHandler} />
				<main>
					<Meals />
				</main>
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
