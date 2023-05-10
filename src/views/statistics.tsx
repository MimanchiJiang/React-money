import Nav from "components/Nav";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1;
  overflow: auto;
`;
function Statistics() {
  return (
    <Wrapper>
      <Main>
        <h1>统计</h1>
      </Main>
      <Nav></Nav>
    </Wrapper>
  );
}

export default Statistics;
