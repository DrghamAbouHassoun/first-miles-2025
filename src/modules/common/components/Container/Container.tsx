import React, { type HTMLAttributes } from "react";
import { useLocale } from "../../hooks/useLocale";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  const { lang } = useLocale();
  return (
    <div
      {...props}
      className={`w-full max-w-337.5 mx-auto px-4 ${lang !== "ar" ? "lg:pr-16 2xl:pr-4" : "lg:pl-16 2xl:pl-4"} ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Container;
