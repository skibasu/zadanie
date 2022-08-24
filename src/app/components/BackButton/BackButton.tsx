import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"

const BackButton: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Button variant="warning" onClick={() => navigate("/")}>
            Back to Home Page
        </Button>
    )
}

export default BackButton
