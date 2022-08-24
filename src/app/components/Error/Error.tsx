import React from "react"
import ErrorMessage from "./ErrorMessage"
import { EStatus } from "../../../features/posts/types"
import { useAppSelector } from "../../hooks/reduxHooks"

const Error = (): JSX.Element | null => {
    const { error, status } = useAppSelector((state) => state.posts)

    if (status === EStatus.REJECTED && error) {
        return <ErrorMessage message={error} />
    } else {
        return null
    }
}
export default Error
