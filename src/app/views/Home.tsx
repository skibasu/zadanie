import React, { useEffect } from "react"
import { getPosts } from "../../features/posts/postsSlice"
import { useAppDispatch } from "../hooks/reduxHooks"
import Spinner from "../components/Spinner/Spinner"
import Error from "../components/Error/Error"
import HomeContent from "../components/HomeContent/HomeContent"
import Template from "../components/Template/Template"

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPosts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Template>
            <section className="py-5">
                <h1 className="text-center mb-5">Welcome</h1>
                <Spinner />
                <Error />
                <HomeContent />
            </section>
        </Template>
    )
}

export default Home
