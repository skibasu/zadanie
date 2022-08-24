import React from "react"
import { EStatus } from "../../../features/posts/types"
import { useAppSelector } from "../../hooks/reduxHooks"
import PostsList from "../PostsList.tsx/PostsList"

const HomeContent = (): JSX.Element | null => {
    const { status, error } = useAppSelector((state) => state.posts)

    if (status === EStatus.FULLFILED && !error) {
        return <PostsList />
    } else {
        return null
    }
}

export default HomeContent
