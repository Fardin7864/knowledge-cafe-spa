import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleMarkeRad}) => {
    const [blogs,setBlogs] = useState([]);

    // load fake data
    useEffect(() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className="mt-8">
            {
                blogs.map((blog) => 
                <Blog
                key={blog.id}
                blog={blog}
                handleBookmark={handleBookmark}
                handleMarkeRad={handleMarkeRad}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleMarkeRad: PropTypes.func.isRequired
}

export default Blogs;