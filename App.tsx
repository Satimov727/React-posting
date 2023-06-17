import React, {useState} from "react"
import {Routes, Route} from 'react-router-dom'
import { MainPage } from "./pages/MainPage"
import { AddedPosts } from "./pages/AddedPosts"
import { Navigation } from "./components/Navigation"
import { Window } from "./components/Window"
import Item from "./components/Item"
import Select from "./components/Select"

function App() {

  const [window, setWindow] = useState(false)
  
  const [posts, setPosts] = useState([
    { id: 1, title: 'React', body: 'JS library' },
    { id: 2, title: 'Typescript', body: 'Programming language' },
    { id: 3, title: 'Javascript', body: 'Programming language'}
  ])

  const [post, setPost] = useState({ title: '', body: '' })
  
  const [sort, setSort] = useState('')

  const sortPosts = (sort) => {
    setSort(sort)
    setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))])
  }

  const addPost = () => {
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  interface CreateProps {
  onCreate: () => void
  }


  function Post({ onCreate }: CreateProps) {

    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
      onCreate()
    }

    return (

        <form onSubmit={submitHandler}>

          <input className="border py-2 px-4 mb-2 w-full outline-0" type="text" placeholder="Enter title of the post..." value={post.title} onChange={e => setPost({...post, title: e.target.value })}/>

          <textarea className="w-full border py-2 px-4 mb-2 outline-0" rows={10} placeholder="Enter the content of the post..." value={post.body} onChange={e => setPost({...post, body: e.target.value })}></textarea>
          
        </form>
    )
  }

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addedposts" element={<AddedPosts />}/>
      </Routes>

      <div>
        <Select
          defaultValue='Sort by'
          options={[{ value: 'title', name: 'By title' }, { value: 'body', name: 'By description' }]}
          value={sort}
          onChange={sortPosts}/>
      </div>

      {window && <Window onClose={() => setWindow(false)}>
        <Post onCreate={() => setWindow(false)} />
        <button className="py-2 px-7 border bg-yellow-400 active:bg-yellow-200" type="submit" onClick={addPost}>Post</button>
      </Window>}

      <button
        className="fixed rounded-full bottom-5 right-5 bg-red-700 text-white font-bold text-2xl px-4 py-2" 
        onClick={() => setWindow(true)}>
        +
      </button>

      <div>
        {posts.map((posts, index) => 
          <Item number={index + 1} posts={posts} key={posts.id}/>
        )}
      </div>
    </>
  )
}

export default App
