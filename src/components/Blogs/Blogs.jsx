import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mt-8">
            {
                blogs.map((blog) => <Blog 
                key={blog.id} 
                blog={blog}
                handleBookmark={handleBookmark}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired, 
    handleReadingTime: PropTypes.func.isRequired, 
}

export default Blogs;