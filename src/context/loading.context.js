import { createContext, useState } from "react";


const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState("")
    const [posts, setPosts] = useState([])


    return (
        <LoadingContext.Provider value={{ user, isLoading, setIsLoading, setUser, search, setSearch, posts, setPosts }} >
            {children}
        </LoadingContext.Provider>
    )

}

export { LoadingContext, LoadingProvider }