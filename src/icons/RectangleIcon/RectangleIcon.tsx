import * as React from "react";
import { IconProps } from "@/types/iconTypes";
const RectangleIcon = (props: IconProps) => {
  const { height = 22, width = 22, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...rest}
    >
      <path
        fill="#262626"
        d="M18.48 0H3.52A3.52 3.52 0 0 0 0 3.52v14.96A3.52 3.52 0 0 0 3.52 22h14.96A3.52 3.52 0 0 0 22 18.48V3.52A3.52 3.52 0 0 0 18.48 0Z"
      />
      <path
        fill="#fff"
        d="M17.763 12.938a1.988 1.988 0 0 0 1.986-1.99c0-1.1-.89-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.889 1.99 1.986 1.99ZM4.178 12.958a1.988 1.988 0 0 0 1.986-1.99c0-1.1-.889-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99ZM6.125 8.102a1.988 1.988 0 0 0 1.986-1.99c0-1.1-.889-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99ZM10.97 6.152a1.988 1.988 0 0 0 1.986-1.99c0-1.1-.89-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99ZM15.816 8.102a1.988 1.988 0 0 0 1.987-1.99c0-1.1-.89-1.99-1.987-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99ZM15.816 17.655a1.988 1.988 0 0 0 1.987-1.99c0-1.1-.89-1.99-1.987-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99ZM10.97 19.724a1.988 1.988 0 0 0 1.986-1.99c0-1.099-.89-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.1.89 1.99 1.986 1.99ZM6.125 17.655a1.988 1.988 0 0 0 1.986-1.99c0-1.1-.889-1.99-1.986-1.99a1.988 1.988 0 0 0-1.986 1.99c0 1.099.89 1.99 1.986 1.99Z"
      />
    </svg>
  );
};
export { RectangleIcon };