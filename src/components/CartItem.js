import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, decrease, increase } from "../features/card/cardSlice";

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();

    const removeCartItem = (cartItemId) => {
        dispatch(removeItem(cartItemId))
    }

    const increaseItemAmount = (cartItemId) => {
        dispatch(increase(cartItemId))
    }

    const decreaseItemAmount = (cartItemId) => {
        if (amount === 1) {
            dispatch(removeItem(cartItemId))
            return;
        }
        dispatch(decrease(cartItemId))
    }

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button className='remove-btn' onClick={()=> removeCartItem(id)}>remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn' onClick={()=> increaseItemAmount(id)}>
                    <ChevronUp />
                </button>
                {/* amount */}
                <p className='amount'>{amount}</p>
                {/* decrease amount */}
                <button className='amount-btn' onClick={()=> decreaseItemAmount(id)}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};

export default CartItem;