import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cartItems } = useSelector(state => state);
    console.log(cartItems);

    return (
        <div className='mx-auto my-12 w-[95%] grid grid-cols-3 gap-6'>
            {
                cartItems?.map(item => {
                    return (<div class="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-50 dark:border-orange-400">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-600">{item?.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{item?.body}</p>
                    </div>)
                })
            }
        </div>
    );
};

export default Cart;