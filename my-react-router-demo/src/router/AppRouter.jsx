import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "../templates/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import TaskDetails from "../pages/TaskDetails.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tasks/:id" element={<TaskDetails />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;