import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Money from "./views/money";
import Statistics from "./views/statistics";
import Tags from "./views/tags";
import Error from "./views/error";

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Money />} />
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/money" element={<Money />}></Route>
        <Route path="/statistic" element={<Statistics />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
