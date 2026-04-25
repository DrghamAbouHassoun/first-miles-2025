import ProductCardSpike from "../../../../assets/vectors/coo/spike.svg";

interface ProductCardProps {
  title: string;
  desc: string;
  image: string;
}

const ProductCard = ({ title, desc, image }: ProductCardProps) => {
  return (
    <div className="flex w-full flex-col items-stretch justify-between h-full">
      <div className="flex flex-row items-center w-full p-4 gap-4">
        <div className="w-30">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg text-fm-yellow font-bold">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <img
        src={ProductCardSpike}
        alt={title}
        className="w-full object-contain object-right"
      />
    </div>
  );
};

export default ProductCard;
