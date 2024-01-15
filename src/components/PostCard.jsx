import React from 'react';

const PostCard = ({title, desc}) => {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-indigo-50 dark:border-orange-400">
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-600">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</p>
        </div>
    );
};

export default PostCard;