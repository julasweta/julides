import React from 'react'
import { AddPostForm } from '../components/forms/AddPostForm'
import { AddBlocksForm } from '../components/forms/AddBlocksForm'


const AddPost = () => {
  return (
    <div>

      <AddBlocksForm />
      <AddPostForm />
    </div>
  )
}

export  {AddPost}