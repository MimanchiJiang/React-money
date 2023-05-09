import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Icons from "./Icons";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icons name="tags"></Icons>
          <NavLink to="tags">标签页</NavLink>
        </li>
        <li>
          <Icons name="money"></Icons>

          <NavLink to="money"> 记账页</NavLink>
        </li>
        <li>
          <Icons name="chart"></Icons>

          <NavLink to="statistic">统计页</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
