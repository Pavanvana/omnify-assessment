import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const HashIcon = (props: IconProps) => {
  const { height = 12, width = 12, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 4.5h8M2 7.5h8M5 1.5l-1 9M8 1.5l-1 9"
      />
    </svg>
  );
};
export { HashIcon };
