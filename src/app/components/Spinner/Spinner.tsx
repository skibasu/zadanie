import { useAppSelector } from "../../hooks/reduxHooks"
import { Puff } from "react-loader-spinner"

import { EStatus } from "../../../features/posts/types"

const Spinner = (): JSX.Element | null => {
    const { status } = useAppSelector((state) => state.posts)
    if (status === EStatus.PENDING) {
        return (
            <div className="my-5">
                <Puff
                    height="40"
                    width="40"
                    radius={1}
                    color="#4fa94d"
                    ariaLabel="puff-loading"
                    wrapperClass="spinner d-flex justify-content-center"
                    visible={true}
                />
            </div>
        )
    } else {
        return null
    }
}
export default Spinner
