import React from "react"
import BackButton from "../BackButton/BackButton"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { TPicturesData } from "../../../features/posts/types"

interface ISinglePost {
    post: TPicturesData
}
const SinglePost: React.FC<ISinglePost> = ({ post }) => {
    if (Object.keys(post).length > 0) {
        return (
            <article>
                <figure className="post__custom-figure">
                    <LazyLoadImage
                        effect="blur"
                        src={post?.url}
                        alt={post?.title}
                        className="w-100"
                    />
                </figure>
                <h1 className="text-capitalize">{post?.title}</h1>
                <p>ID: {post?.id}</p>
                <p>Album ID: {post?.albumId} </p>
                <BackButton />
            </article>
        )
    } else {
        return null
    }
}

export default SinglePost
