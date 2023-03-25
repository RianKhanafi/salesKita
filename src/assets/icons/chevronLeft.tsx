import { IConsProps } from "module/common/type";
import * as React from "react";

function ChavronLeft(props: React.SVGProps<SVGSVGElement> & IConsProps) {
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
        d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default ChavronLeft;
