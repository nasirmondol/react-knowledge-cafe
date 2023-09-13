import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';


const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(typeof bookmarks);
    // const {title} = bookmarks;
    return (
        <div className='p-4 w-1/3'>
            <div className='bg-[#6047EC1A] rounded-lg'>
                <h4 className='text-2xl font-bold mt-4 text-[#6047EC] px-10 py-5'>Spent time on read : {readingTime} mins</h4>
            </div>
            <h2 className='text-2xl'>Bookmarks: {bookmarks.length}</h2>
            <div className='bg-slate-100 p-3 rounded-lg mt-2'>
                {
                    bookmarks.map((bookmark, index) => <Bookmark
                        key={index}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;