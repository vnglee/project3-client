import { createContext, useState } from "react";
import { get } from "../services/authService";


const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState("")
    const [posts, setPosts] = useState([])

    const getAllPosts = () => {
        get('/posts')
        .then((results) => {
          setPosts(results.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }


    return (
        <LoadingContext.Provider value={{ user, isLoading, setIsLoading, setUser, search, setSearch, posts, setPosts, getAllPosts }} >
            {children}
        </LoadingContext.Provider>
    )

}

export { LoadingContext, LoadingProvider }