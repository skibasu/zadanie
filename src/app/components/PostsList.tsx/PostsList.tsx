import React from "react"
import { useAppSelector } from "../../hooks/reduxHooks"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "./PostList.scss"

const PostsList: React.FC = () => {
    const { data } = useAppSelector((state) => state.posts)
    if (data.length) {
        return (
            <div className="post d-flex flex-wrap">
                {data.map((element) => {
                    return (
                        <article
                            className="post-list__custom-col"
                            key={element.id}
                        >
                            <Link
                                to={`/post/${element.id}`}
                                className="post-list__custom-link d-block rounded overflow-hidden h-100"
                            >
                                <figure className="m-0 post-list__custom-figure">
                                    <LazyLoadImage
                                        effect="blur"
                                        src={element.thumbnailUrl}
                                        alt={element.title}
                                    />
                                </figure>
                                <h2 className="h6 py-3 px-2 m-0 text-capitalize">
                                    {element.title}
                                </h2>
                            </Link>
                        </article>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                <h2>Nothing found</h2>
            </div>
        )
    }
}

export default PostsList
