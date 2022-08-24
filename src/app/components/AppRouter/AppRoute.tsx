import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import ErrorPage from "../../views/404"
import Home from "../../views/Home"
import Post from "../../views/Post"

const AppRoute: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="404" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Router>
    )
}

export default AppRoute
