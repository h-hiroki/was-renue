import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Calendar } from "./components/Calendar";
import { Details } from "./components/Details";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};
