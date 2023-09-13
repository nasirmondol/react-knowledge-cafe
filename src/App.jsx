import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    // console.log('Bookmark clicked');
    const newBookmarkArr = [...bookmarks, blog]
    setBookmarks(newBookmarkArr)
  }

  const handleReadingTime = (time, id) => {
    console.log('Reading time ', time);
    setReadingTime(readingTime + time)
    console.log('Remove bookmar', id);
    const newBookmarkId = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmarkId);
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <div className='md:flex '>
        <Blogs
          handleBookmark={handleBookmark}
          handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </div>
  )
}

export default App
