import type { ButtonHTMLAttributes } from "react";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MainButton = (props: MainButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-linear-to-r from-fm-yellow to-fm-green hover:to-fm-yellow transition-colors duration-500 text-white w-fit px-4 py-1 text-lg font-bold rounded-tl-md ${props.className}`}
    />
  );
};

export default MainButton;
