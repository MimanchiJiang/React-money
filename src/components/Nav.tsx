import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
require("icons/chart.svg");
require("icons/money.svg");
require("icons/tags.svg");

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
          <svg className="icon">
            <use xlinkHref="#tags"></use>
          </svg>
          <NavLink to="tags">标签页</NavLink>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <NavLink to="money"> 记账页</NavLink>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <NavLink to="statistic">统计页</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
