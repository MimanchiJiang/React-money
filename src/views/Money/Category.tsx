import styled from "styled-components";

const Category = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected:after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        background: #333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
export default Category;
