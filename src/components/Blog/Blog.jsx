import PropTypes from 'prop-types';
import SaveIcon from "../../assets/images/Frame.png";

const Blog = ({ blog,handleBookmark,handleMarkeRad }) => {
  const { cover, title, author_img, author, posted_date, reading_time,hashtags } = blog;
  return (
    <div className="mb-10 w-[845px]">
      <div className="w-full mb-5">
        <img src={cover} alt="" className='rounded-lg'/>
      </div>

        {/* author details */}
      <div className="flex justify-between">

        <div className="flex items-center gap-3">
          <div className="w-16 h-16">
            <img src={author_img} alt="" className="rounded-[60px]"/>
          </div>

          <div>
            <h4 className="text-black text-2xl font-bold">{author}</h4>
            <p className="text-[#11111199] text-base font-semibold">{posted_date}</p>
          </div>

        </div>

        <div className="flex items-center gap-3">
          <p className="text-[#11111199] text-xl font-medium">{reading_time} min read</p>
          <button  onClick={() => handleBookmark(blog)} className="w-6 h-6 hover:bg-red-400"><img src={SaveIcon} alt="" /></button>
        </div>

      </div>
      {/* blog details */}
      <div>
        <h3 className="text-[#111] text-4xl font-bold mt-4 mb-4">{title}</h3>
        <p className="text-[#11111199] text-base font-semibold">#{hashtags[0]} #{hashtags[1]} #{hashtags[2]}</p>
        <button onClick={() => handleMarkeRad(blog)} className="text-[#6047EC] text-xl font-semibold underline mt-7 mb-8">Mark as read</button>
      </div>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object,
    cover: PropTypes.string,
    title: PropTypes.string,
    author_img: PropTypes.string,
    author: PropTypes.string,
    posted_date: PropTypes.string,
    reading_time: PropTypes.number,
    hashtags: PropTypes.string,
    handleBookmark: PropTypes.func,
    handleMarkeRad: PropTypes.func
}


export default Blog;
