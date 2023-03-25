import { IConsProps } from "module/common/type";
import * as React from "react";

function ChavronRight(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#9FA2B4" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L14.9293 12.0707C14.9683 12.0317 14.9683 11.9683 14.9293 11.9293L9 6"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default ChavronRight;
