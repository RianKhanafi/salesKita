import { IConsProps } from "module/common/type";
import * as React from "react";

function TreeDotSvg(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 25, height = 24, fill = "#C5C7CD" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0844 8C13.1921 8 14.0985 7.1 14.0985 6C14.0985 4.9 13.1921 4 12.0844 4C10.9767 4 10.0703 4.9 10.0703 6C10.0703 7.1 10.9767 8 12.0844 8ZM12.0844 10C10.9767 10 10.0703 10.9 10.0703 12C10.0703 13.1 10.9767 14 12.0844 14C13.1921 14 14.0985 13.1 14.0985 12C14.0985 10.9 13.1921 10 12.0844 10ZM12.0844 16C10.9767 16 10.0703 16.9 10.0703 18C10.0703 19.1 10.9767 20 12.0844 20C13.1921 20 14.0985 19.1 14.0985 18C14.0985 16.9 13.1921 16 12.0844 16Z"
        fill={fill}
      />
    </svg>
  );
}

export default TreeDotSvg;
