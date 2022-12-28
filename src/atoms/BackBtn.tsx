import {useNavigate} from "react-router-dom";
import IconButton from "./Button/IconButton";
import ArrowLeft from "./vectors/ArrowLeft";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      rounded
      otherClasses="hover:bg-darkBlue-100 "
      icon={<ArrowLeft />}
      onClick={() => navigate(-1)}
    />
  );
};
export default BackBtn;
