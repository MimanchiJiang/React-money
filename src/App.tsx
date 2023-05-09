import { NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Money from "./components/money";
import Statistics from "./components/statistics";
import Tags from "./components/tags";
import Error from "./components/error";
import Nav from './components/Nav'
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
  overflow: auto;
`



function App() {
  return (
    <Wrapper>
      <Main>
      <Routes >
      <Route path="/" element={<Money />} />
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/money" element={<Money />}></Route>
        <Route path="/statistic" element={<Statistics />}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </Main>
      <Nav/>
    </Wrapper>
   
  );
}

export default App;
