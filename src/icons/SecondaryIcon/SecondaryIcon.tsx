import * as React from "react";
import { IconProps } from "@/types/iconTypes";
const SecondaryIcon = (props: IconProps) => {
  const { height = 16, width = 16, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.667v4A1.334 1.334 0 0 1 10.667 14H3.333A1.334 1.334 0 0 1 2 12.667V5.333A1.333 1.333 0 0 1 3.333 4h4M10 2h4v4M6.667 9.333 14 2"
      />
    </svg>
  );
};
export { SecondaryIcon };
