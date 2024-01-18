import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/postActions';

const PostCard = ({ title, desc, id }) => {
    const dispatch = useDispatch();
    
    const handleCart = (id) =>{
        console.log("handle click", id);
        dispatch(addToCart(id));
    }

    return (
        <div class="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-50 dark:border-orange-400">
            <div>
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-600">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
            </div>
            <div onClick={()=>handleCart(id)} className=' absolute bottom-2 right-2'>
                <p className='bg-transparent p-2 hover:cursor-pointer text-yellow-500 border-none hover:text-amber-500'>🛒Add to cart</p>
            </div>
        </div>
    );
};

export default PostCard;