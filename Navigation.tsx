import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className='items-center py-5 bg-purple-700 font-bold flex justify-between text-white'>
      <h3 className='ml-4'>Posts</h3>
      <span>
        <Link to="/" className='mr-4'>Created posts</Link >
        <Link to="/addedposts" className='mr-4'>Added posts</Link >
      </span>
    </nav>
  )
}