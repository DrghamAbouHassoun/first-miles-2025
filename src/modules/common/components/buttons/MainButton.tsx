import type { ButtonHTMLAttributes } from "react";
import { useLocale } from "../../hooks/useLocale";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const MainButton = ({ isActive, ...props }: MainButtonProps) => {
  const { lang } = useLocale();
  const activeClass = isActive ? (lang === "ar" ? "from-fm-yellow" : "to-fm-yellow") : "";
  return (
    <button
      {...props}
      className={`bg-linear-to-r ${lang === "ar" ? "from-fm-green to-fm-yellow hover:from-fm-yellow rounded-tr-md" : "from-fm-yellow to-fm-green hover:to-fm-yellow rounded-tl-md"} transition-colors duration-500 text-white w-fit px-4 py-1 text-lg font-bold ${activeClass} ${props.className ?? ""}`}
    />
  );
};

export default MainButton;
