import PropTypes from 'prop-types';
const Bookmark = ({bookmarkes}) => {
    // console.log(bookmarkes);
    return (
        <div className="w-411px rounded-lg bg-[#1111110D] flex flex-col items-center justify-center">
            <h3 className="text-black text-2xl font-semibold mt-5 mb-5">Bookmarked Blogs:{bookmarkes.length}</h3>
            {
                bookmarkes.map((blog, ind) => 
                <div key={ind} className="w-96 h-24 rounded-lg bg-[#FFF] flex flex-col items-center justify-center mb-4 mt-4">
                <h4 className="text-black text-lg font-semibold ml-4">{blog.title}</h4>
            </div>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarkes: PropTypes.array.isRequired
}

export default Bookmark;