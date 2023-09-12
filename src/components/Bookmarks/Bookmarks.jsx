import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks);
    // const {title} = bookmarks;
    return (
        <div className='p-4 w-1/3'>
            <h2 className='text-2xl'>Bookmarks: {bookmarks.length}</h2>
            <div className=''>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;