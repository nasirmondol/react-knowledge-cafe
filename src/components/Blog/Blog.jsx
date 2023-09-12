import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { cover, author, author_img, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <img width={60} height={60} src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-2xl mt-4 mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hahs, idx) => <span 
                    key={idx}
                    ><a href="">#{hahs}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;