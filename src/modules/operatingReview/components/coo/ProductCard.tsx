import { useState } from "react";
import ProductCardSpike from "../../../../assets/vectors/coo/spike.svg";
import { useLocale } from "../../../common/hooks/useLocale";

interface ProductCardProps {
  title: string;
  desc: string;
  image: string;
}

const ProductCard = ({ title, desc, image }: ProductCardProps) => {
  const { lang } = useLocale();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex w-full flex-col items-stretch justify-between h-full">
      <div
        className="relative flex flex-row items-center w-full p-4 gap-4 min-h-50 group cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className={`absolute w-full h-full top-0 left-0 bg-white flex justify-center items-center flex-col backface-hidden transition-all duration-700 lg:group-hover:rotate-y-180 ${flipped ? "rotate-y-180" : ""}`}
        >
          <img
            src={image}
            alt={title}
            className="w-30 h-auto object-contain"
          />
          <h3 className="text-lg text-fm-yellow font-bold">{title}</h3>
        </div>
        <div
          className={`flex-1 absolute bg-white backface-hidden transition-all duration-700 lg:group-hover:rotate-y-0 ${flipped ? "" : "rotate-y-180"}`}
        >
          <p>{desc}</p>
        </div>
      </div>
      <img
        src={ProductCardSpike}
        alt={title}
        className={`w-full object-contain ${lang === "ar" ? "object-left rotate-y-180" : "object-right"}`}
      />
    </div>
  );
};

export default ProductCard;
