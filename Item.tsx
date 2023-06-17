import React from 'react'

const Item = (props) => {

  return (
    <div className="border-solid border-2 border-teal-500 flex p-5 mt-5 ml-5 mr-5">
      <div>
        <strong>{props.number}. {props.posts.title}</strong>
        <div>{props.posts.body}</div>
      </div>
      <button className="absolute right-0 py-2 px-5 border bg-yellow-400 active:bg-yellow-200 mr-10" type="submit">Doesn't work</button>
    </div>
  )
}

export default Item
