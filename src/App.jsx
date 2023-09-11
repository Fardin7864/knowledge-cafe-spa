import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/BookmarkList/Bookmark";
import Header from "./components/Header/Header";
import ReadinTime from "./components/ReadingTime/ReadinTime";

function App() {

  const[bookmarkes,setBookmarkes] = useState([]);
  const [markRead, setMarkRead] = useState(0);

  const handleBookmark = (blog) => { 
          setBookmarkes([...bookmarkes,blog]);
   }

   const handleMarkeRad = blog => {
    const newReadTime = markRead + blog.reading_time;
    setMarkRead(newReadTime);
    }

// console.log(bookmarkes)

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex gap-4">
        <Blogs
        handleBookmark={handleBookmark}
        handleMarkeRad ={handleMarkeRad}
        ></Blogs>
        <div>
          <ReadinTime
          markRead={markRead}
          ></ReadinTime>
          <Bookmark
          bookmarkes={bookmarkes}
          ></Bookmark>
        </div>
      </div>
    </div>
  );
}

export default App;
