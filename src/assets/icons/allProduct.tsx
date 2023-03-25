import { IConsProps } from "module/common/type";
import * as React from "react";

function SvgProduct(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "white" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12_79)">
        <path
          d="M13.1626 21.6776L17.7614 17.0789L6.35389 5.68761C3.81889 8.22261 3.81889 12.3339 6.35389 14.8851L13.1626 21.6776ZM24.1801 18.7364C26.6664 19.8901 30.1601 19.0776 32.7439 16.4939C35.8476 13.3901 36.4489 8.93761 34.0601 6.54886C31.6876 4.17636 27.2351 4.76136 24.1151 7.86511C21.5314 10.4489 20.7189 13.9426 21.8726 16.4289L6.01264 32.2889L8.30389 34.5801L19.5001 23.4164L30.6801 34.5964L32.9714 32.3051L21.7914 21.1251L24.1801 18.7364Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_12_79">
          <rect width="39" height="39" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgProduct;
