import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/postActions';
import Loader from '../components/reusable/Loader';

const Home = () => {
    const {isLoading, posts, isError} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts());
    },[]);

    return (
        <div>
            <div className='mx-auto my-12 w-[95%] grid grid-cols-3 gap-6'>
                {
                    posts?.map((post,i) =><PostCard title={post?.title} desc={post?.body} />)
                }
            </div>
        </div>
    );
};

export default Home;