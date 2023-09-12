import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'

const Blog = ({ blog, handleBookmark }) => {
    console.log(blog);
    const { cover, author, author_img, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div>
            <img className='mb-10 w-full' src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <img width={60} height={60} src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex'>
                    <p>{reading_time} min read</p>
                    <button
                    
                        className='ml-4'>
                        <FaBookmark onClick={() => handleBookmark(blog)} className='text-2xl text-red-300'></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-2xl mt-4 mb-4 font-bold'>{title}</h2>
            <p className='mb-5'>
                {
                    hashtags.map((hahs, idx) => <span
                        key={idx}
                    ><a href="">#{hahs}</a> </span>)
                }
            </p>
        </div>
    );
} 

Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleBookmark: PropTypes.func.isRequired
}

export default Blog;