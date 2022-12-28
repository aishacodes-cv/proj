import {Route, Routes} from "react-router-dom";
import "./App.scss";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Classroom from "./pages/dashboard/Classroom";
import Forms from "./pages/dashboard/Forms";
import Dashboard from "./pages/dashboard/Home/index";
import Messages from "./pages/dashboard/Messages";
import NotificationPage from "./pages/dashboard/Notification";
import Projects from "./pages/dashboard/Projects";
import EachProject from "./pages/dashboard/Projects/EachProject";
import Settings from "./pages/dashboard/Settings";
import TimeLogger from "./pages/dashboard/TimeLogger";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Path from "./pages/dashboard/Classroom/Path";
import Course from "./pages/dashboard/Classroom/Course";
import Lessons from "./pages/dashboard/Classroom/Lessons";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D9E63",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timelogger" element={<TimeLogger />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<EachProject />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/classroom/path/:name" element={<Path />} />
        <Route path="/classroom/course/" element={<Course />} />
        <Route path="/classroom/course/lesson" element={<Lessons />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
