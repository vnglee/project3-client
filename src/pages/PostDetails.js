import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../services/authService"
import { Link } from "react-router-dom"


const PostDetails = ({post, image, type}) => {

    const [postDetail, setPostDetail] = useState(null)

    const {id} = useParams()

    const getPost = () => {
        get(`/posts/detail/${id}`)
        .then((results) => {
            console.log('getpost results', results.data)
            setPostDetail(results.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div>
    
    {postDetail && (
        <>
           <p>{postDetail.post}</p>
           <p>{postDetail.image}</p>
           <p>{postDetail.type}</p>
        </>
    )}

    <Link to={`/posts/edit/${id}`}><button>Edit Post</button></Link>




    </div>
  )
}

export default PostDetails