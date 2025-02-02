import BookIcon from "./BookIcon";
import Ripples2 from "./Ripples2";
import PropTypes from "prop-types";

const Stepper2 = ({ id }) => {
  const loadheight = (id) => {
    const height = {
      1: "lg:h-[275px]",
      2: "h-[1192px]  lg:h-[655px] xl:h-[655px]",
    };
    console.log(typeof id);
    return height[id];
  };

  return (
    <div>
      <div className="relative w-12 h-12 bg-black rounded-lg top-2 right-5 threed">
        <BookIcon id={id} />
      </div>
      <div
        className={`w-1 rounded-lg shadow-lg ${loadheight(
          id
        )} threed shadow-black-100`}
      ></div>
      <Ripples2 size="1" />
      <Ripples2 size="2" />
      <Ripples2 size="3" />
      <Ripples2 size="4" />
      <Ripples2 size="5" />
      <Ripples2 size="6" />
    </div>
  );
};

Stepper2.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Stepper2;
