import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/card/cardSlice";

const Modal = () => {
    const dispatch = useDispatch();

    const clearCartList = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    }
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={clearCartList}>
                        confirm
                    </button>
                    <button type='button' className='btn clear-btn' onClick={() => dispatch(closeModal())}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;