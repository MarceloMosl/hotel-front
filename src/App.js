import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<>oi</>} />
          <Route path="/sign-in" element={<>sign-in</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
