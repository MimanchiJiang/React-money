import styled from "styled-components";
import Layout from "components/Layout";
import Tags from "./Money/Tags";
import Notes from "./Money/Notes";
import Category from "./Money/Category";
import NumberPad from "./Money/Pad";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
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
          <input placeholder="在这里添加备注" type="text" />
        </label>
      </Notes>
      <Category>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </Category>

      <NumberPad>
        <div className="output">100</div>
        <div className="pad clearfix">
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
          <button className="OK">OK</button>

          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPad>
    </MyLayout>
  );
};

export default Money;
