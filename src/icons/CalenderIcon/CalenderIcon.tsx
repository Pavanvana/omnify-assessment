import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const CalenderIcon = (props: IconProps) => {
  const { height = 12, width = 12, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 12"
      {...rest}
    >
      <path
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM8 1v2M4 1v2M1.5 5h9"
      />
    </svg>
  );
};
export { CalenderIcon };
