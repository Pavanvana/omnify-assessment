import * as React from "react";

import { IconProps } from "@/types/iconTypes";
const ArrowLeftRight = (props: IconProps) => {
  const { height = 18, width = 18, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke="#475569"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.333 7.333 14 4.667 11.333 2M14 4.667H6M4.667 14 2 11.333l2.667-2.666M10 11.333H2"
      />
    </svg>
  );
};
export { ArrowLeftRight };
