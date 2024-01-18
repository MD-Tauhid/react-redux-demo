import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/postActions';
import Loader from '../components/reusable/Loader';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const { isLoading, posts, isError, cartItems } = useSelector(state => state);
    const dispatch = useDispatch();

    const itemsPerPage = 6;
    const [currentPageStart, setCurrentPageStart] = useState(0);
    const currentPageEnd = currentPageStart + itemsPerPage;
    // console.log(`Loading items from ${currentPageStart} to ${currentPageEnd}`);
    const currentItems = posts.slice(currentPageStart, currentPageEnd);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setCurrentPageStart(newOffset);
    };

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div>
            <div className='mx-auto my-12 w-[95%] grid grid-cols-3 gap-6'>
                {
                    currentItems?.map((post, i) => <PostCard id={post?.id} title={post?.title} desc={post?.body} />)
                }
            </div>
            <ReactPaginate
                className='react-paginate'
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Home;