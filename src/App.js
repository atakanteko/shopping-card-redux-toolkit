import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/card/cardSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(calculateTotals());
  },[cartItems])

  return (
      <div>
        <Modal />
        <Navbar/>
        <CartContainer />
      </div>
  );
}
export default App;
