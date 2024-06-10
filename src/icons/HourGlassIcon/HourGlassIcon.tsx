import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const HourGlassIcon = (props: IconProps) => {
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
        d="M3.333 14.667h9.334M3.333 1.333h9.334m-1.334 13.334v-2.782c0-.353-.14-.692-.39-.942L8 8m0 0-2.943 2.943c-.25.25-.39.589-.39.942v2.782M8 8 5.057 5.057c-.25-.25-.39-.589-.39-.942V1.333M8 8l2.943-2.943c.25-.25.39-.589.39-.942V1.333"
      />
    </svg>
  );
};
export { HourGlassIcon };
