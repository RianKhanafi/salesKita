import { IConsProps } from "module/common/type";
import * as React from "react";

function MinusSVG(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "black" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 8.12354H3.75C3.58424 8.12354 3.42527 8.05769 3.30806 7.94048C3.19085 7.82327 3.125 7.6643 3.125 7.49854C3.125 7.33277 3.19085 7.1738 3.30806 7.05659C3.42527 6.93938 3.58424 6.87354 3.75 6.87354H11.25C11.4158 6.87354 11.5747 6.93938 11.6919 7.05659C11.8092 7.1738 11.875 7.33277 11.875 7.49854C11.875 7.6643 11.8092 7.82327 11.6919 7.94048C11.5747 8.05769 11.4158 8.12354 11.25 8.12354Z"
        fill={fill}
      />
    </svg>
  );
}

export default MinusSVG;
