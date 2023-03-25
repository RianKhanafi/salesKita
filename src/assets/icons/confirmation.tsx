import { IConsProps } from "module/common/type";
import * as React from "react";

function ConfirmationSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  return (
    <svg
      width="111"
      height="111"
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="55.5" cy="55.5" r="51.5" stroke="#63C476" stroke-width="7" />
      <ellipse
        cx="55.5003"
        cy="89.1975"
        rx="3.17901"
        ry="2.54321"
        fill="#63C476"
      />
      <path
        d="M55.4997 79.0245V74.0055C55.4997 69.8996 57.5395 66.0621 60.9428 63.7652L64.334 61.4765C69.5438 57.9604 72.6663 52.0858 72.6663 45.8006V44.0553C72.6663 34.5744 64.9806 26.8887 55.4997 26.8887V26.8887C46.0188 26.8887 38.333 34.5744 38.333 44.0553V44.2673"
        stroke="#63C476"
        stroke-width="7"
      />
    </svg>
  );
}

export default ConfirmationSvg;
