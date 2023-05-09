import { NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Money from "./components/money";
import Statistics from "./components/statistics";
import Tags from "./components/tags";
import Error from "./components/error";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
border: 1px solid green;
  flex: 1;
  overflow: auto;
`
const Nav=styled.nav`
  border: 1px solid red;
  >ul{
  display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
  
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
   
      <Nav>
      <ul>
        <li><NavLink to="tags">标签页</NavLink></li>
        <li><NavLink to="money">记账页</NavLink></li>
        <li><NavLink to="statistic">统计页</NavLink></li>
      </ul>
      </Nav>
    </Wrapper>
   
  );
}

export default App;
