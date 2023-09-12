import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog =>{
    // console.log('Bookmark clicked');
    const newBookmarkArr = [...bookmarks, blog]
    setBookmarks(newBookmarkArr)
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <div className='md:flex '>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
