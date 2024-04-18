import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
<Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
