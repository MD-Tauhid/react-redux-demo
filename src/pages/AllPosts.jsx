import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getAllPosts } from '../redux/actions/postActions';
import { Link } from 'react-router-dom';

const AllPosts = () => {
    const { posts } = useSelector((state) => state)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }
    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-12">

                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-indigo-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">ID</th>
                                <th className="py-3 px-6">UserID</th>
                                <th className="py-3 px-6">Title</th>
                                {/* <th className="py-3 px-6">Salary</th> */}
                                <th className="py-3 px-6"></th>

                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                posts?.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">{item?.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item?.userId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item?.title}</td>
                                        <td className="text-right px-6 whitespace-nowrap">
                                            <Link to={`/edit-post/${item?.id}`} className="py-2 px-3 me-5 font-medium text-indigo-600 hover:text-indigo-400 duration-150 bg-gray-50 rounded-lg">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(item?.id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 bg-indigo-200 hover:bg-gray-50 rounded-lg">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPosts;