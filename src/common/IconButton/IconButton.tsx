import React from "react";

import { buttonContainerClass } from "./styles";
import "./styles.css";

interface Props {
  icon: JSX.Element;
  onClick: () => void;
  isLoading?: boolean;
}

const IconButton = (props: Props): React.ReactElement => {
  const { icon, onClick, isLoading } = props;
  return (
    <button className={buttonContainerClass} type="button" onClick={onClick}>
      <div className={isLoading ? "refresh-icon" : ""}>{icon}</div>
    </button>
  );
};
export default IconButton;
