import { IconProps } from "@/types/iconTypes";
import * as React from "react";

const UsersIcon = (props: IconProps) => {
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
        d="M10.667 14v-1.333A2.667 2.667 0 0 0 8 10H4a2.667 2.667 0 0 0-2.667 2.667V14M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM14.666 14v-1.333a2.666 2.666 0 0 0-2-2.58M10.666 2.087a2.667 2.667 0 0 1 0 5.166"
      />
    </svg>
  );
};
export { UsersIcon };
