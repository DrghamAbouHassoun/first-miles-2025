import type { HTMLAttributes } from "react";
import SlideTopAnimation from "../animations/SlideTopAnimation";

interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: "green" | "yellow" | "white";
}

const PageTitle = ({ title, color = "green", ...props }: PageTitleProps) => {
  return (
    <SlideTopAnimation level="50">
      <h2
        {...props}
        className={`text-4xl font-bold ${
          color === "green"
            ? "text-fm-green"
            : color === "yellow"
              ? "text-fm-yellow"
              : "text-white"
        } ${props.className}`}
      />
    </SlideTopAnimation>
  );
};

export default PageTitle;
