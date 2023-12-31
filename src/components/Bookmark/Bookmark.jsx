import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className="bg-gray-300 rounded-md">
            <h2 className="border rounded-lg p-2 text-2xl mb-3">{title}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;