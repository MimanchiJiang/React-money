require("icons/chart.svg");
require("icons/money.svg");
require("icons/tags.svg");

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
type Props = {
  name: string;
};
const Icons = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name}></use>
    </svg>
  );
};

export default Icons;
