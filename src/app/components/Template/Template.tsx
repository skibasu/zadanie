import React from "react"
import Container from "react-bootstrap/Container"

interface ITemplate {
    children: JSX.Element | JSX.Element[]
}
const Template: React.FC<ITemplate> = ({ children }) => {
    return (
        <main>
            <Container>{children}</Container>
        </main>
    )
}

export default Template
