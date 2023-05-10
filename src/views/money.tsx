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
const Money = () => {
  return (
    <Wrapper>
      <Main>
        <h1>记账页</h1>
      </Main>
      <Nav />
    </Wrapper>
  );
};

export default Money;
