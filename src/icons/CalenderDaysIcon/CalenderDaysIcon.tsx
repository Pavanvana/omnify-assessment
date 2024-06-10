import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const CalenderDaysIcon = (props: IconProps) => {
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
        d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.667 1.333V4M5.333 1.333V4M2 6.667h12M5.333 9.333h.007M8 9.333h.007M10.667 9.333h.006M5.333 12h.007M8 12h.007M10.667 12h.006"
      />
    </svg>
  );
};
export { CalenderDaysIcon };
