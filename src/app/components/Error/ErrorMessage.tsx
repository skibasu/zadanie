import React from "react"
interface IErrorMessage {
    message: string
}
const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
    return (
        <div className="text-center">
            <h2>Something went wrong</h2>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage
