import styled from "styled-components";
import Layout from "components/Layout";

const Tags = styled.section`
  background-color: #fff;
  padding: 12px 16px;
  > ol {
    margin: 0 -12px;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    margin-top: 8px;
    color: #666;
  }
`;

const Notes = styled.section``;
const Category = styled.section``;
const NumberPad = styled.section``;
const Money = () => {
  return (
    <Layout>
      <Tags>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </Tags>
      <Notes>
        <label>
          <span>备注</span>
          <input type="text" />
        </label>
      </Notes>
      <Category>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </Category>

      <NumberPad>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>

          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>

          <button>0</button>
          <button>.</button>
        </div>
      </NumberPad>
    </Layout>
  );
};

export default Money;
