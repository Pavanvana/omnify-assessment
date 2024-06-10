import * as React from "react";
import { IconProps } from "@/types/iconTypes";

const UserIcon = (props: IconProps) => {
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
        d="M9.5 10.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1M6 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};
export { UserIcon };
