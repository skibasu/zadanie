import React from "react"
import Template from "../components/Template/Template"
import BackButton from "../components/BackButton/BackButton"

const ErrorPage: React.FC = () => {
    return (
        <Template>
            <section className="py-5">
                <h2 className="text-center">Page doesn't exist - 404</h2>
                <div className="d-flex justify-content-center mt-3">
                    <BackButton />
                </div>
            </section>
        </Template>
    )
}

export default ErrorPage
