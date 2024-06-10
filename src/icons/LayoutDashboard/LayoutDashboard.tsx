import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const LayoutDashboard = (props: IconProps) => {
  const { height = 16, width = 16, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        stroke="#334155"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.667 2H2v6h4.667V2ZM14 2H9.333v3.333H14V2ZM14 8H9.333v6H14V8ZM6.667 10.667H2V14h4.667v-3.333Z"
      />
    </svg>
  );
};
export { LayoutDashboard };
