import { useContext, useEffect } from "react"
import { LoadingContext } from "../context/loading.context"
import PostCard from "../components/PostCard"

const Recipes = () => {

    const {posts, search, getAllPosts, setSearch} = useContext(LoadingContext)


    useEffect(() => {
        if (!posts.length) {
            getAllPosts()
            setSearch("recipe")
        }
    }, [])

  return (
    <div>
    <h1>Recipes</h1>



    <>

    {posts.filter((element) => element.type.includes(search)).map((post) => {
  return (
    <PostCard key={post._id} post={post}/>
  )
})}
    </>


    </div>
  )
}

export default Recipes