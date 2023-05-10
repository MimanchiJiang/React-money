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
      padding: 4px 0;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags">
            <LinkWrapper>
              <Icons name="tags"></Icons>
              <span>标签页</span>
            </LinkWrapper>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <LinkWrapper>
              <Icons name="money"></Icons>记账页
            </LinkWrapper>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic">
            <LinkWrapper>
              <Icons name="chart"></Icons>统计页
            </LinkWrapper>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
