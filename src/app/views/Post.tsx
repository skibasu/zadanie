import React, { useEffect, useState } from "react"
import Template from "../components/Template/Template"
import { useParams, useNavigate } from "react-router-dom"
import SinglePost from "../components/SinglePost/SinglePost"
import { fetchData } from "../../features/posts/postsApi"
import "react-lazy-load-image-component/src/effects/blur.css"
import "./Post.scss"
import { TPicturesData } from "../../features/posts/types"
import ErrorMessage from "../components/Error/ErrorMessage"

const Post: React.FC = () => {
    const [post, setPost] = useState<TPicturesData[]>([])
    const [error, setError] = useState<string>()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getPost = async (id: string) => {
            try {
                const { data } = await fetchData({ params: { id } })

                if (data.length > 0) {
                    setPost(data)
                } else {
                    navigate("/404")
                }
            } catch (error: any) {
                setError(error.message)
            }
        }

        getPost(id!)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Template>
            <section className="py-5 post">
                {error && <ErrorMessage message={error} />}
                <SinglePost
                    post={post.length > 0 ? post[0] : ({} as TPicturesData)}
                />
            </section>
        </Template>
    )
}

export default Post
