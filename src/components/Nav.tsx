import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
const NavWrapper=styled.nav`
  line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
  display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
    
`
const Nav = () => {
    return (
        <NavWrapper>
             <ul>
        <li><NavLink to="tags">标签页</NavLink></li>
        <li><NavLink to="money">记账页</NavLink></li>
        <li><NavLink to="statistic">统计页</NavLink></li>
      </ul>
        </NavWrapper>
    )
}
export default Nav