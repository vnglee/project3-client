import { useState, useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import {post} from '../services/authService'
import AddPost from "../components/AddPost"

const Post = ({post, _id}) => {



  return (
    <div>
     <AddPost/>
   
    </div>
  )
}

export default Post