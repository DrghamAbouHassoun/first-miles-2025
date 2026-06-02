import Container from "../../../common/components/Container/Container";
import { useTranslation } from "../../../common/hooks/useTranslation";
import SlideTopAnimation from "../../../common/components/animations/SlideTopAnimation";
import PopupAnimation from "../../../common/components/animations/PopupAnimation";

// Products Image
import PImage0 from "../../../../assets/images/operating-review/coo/products/1.png";
import PImage1 from "../../../../assets/images/operating-review/coo/products/2.png";
import PImage2 from "../../../../assets/images/operating-review/coo/products/3.png";
import PImage3 from "../../../../assets/images/operating-review/coo/products/4.png";
import PImage4 from "../../../../assets/images/operating-review/coo/products/5.png";
import PImage5 from "../../../../assets/images/operating-review/coo/products/6.png";
import PImage6 from "../../../../assets/images/operating-review/coo/products/7.png";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "cooContent.productsSection.products.0.title",
    desc: "cooContent.productsSection.products.0.desc",
    image: PImage0,
  },
  {
    title: "cooContent.productsSection.products.1.title",
    desc: "cooContent.productsSection.products.1.desc",
    image: PImage1,
  },
  {
    title: "cooContent.productsSection.products.2.title",
    desc: "cooContent.productsSection.products.2.desc",
    image: PImage2,
  },
  {
    title: "cooContent.productsSection.products.3.title",
    desc: "cooContent.productsSection.products.3.desc",
    image: PImage3,
  },
  {
    title: "cooContent.productsSection.products.4.title",
    desc: "cooContent.productsSection.products.4.desc",
    image: PImage4,
  },
  {
    title: "cooContent.productsSection.products.5.title",
    desc: "cooContent.productsSection.products.5.desc",
    image: PImage5,
  },
  {
    title: "cooContent.productsSection.products.6.title",
    desc: "cooContent.productsSection.products.6.desc",
    image: PImage6,
  },
];

const ProductsSection = () => {
  const { t } = useTranslation("operating-review");
  return (
    <section className="py-16">
      <Container>
        <SlideTopAnimation>
          <h1 className="text-3xl font-bold">
            <span className="text-fm-yellow">
              {t("cooContent.productsSection.title1")}
            </span>{" "}
            {t("cooContent.productsSection.title2")}
          </h1>
        </SlideTopAnimation>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {products.map((item, index) => (
            <div
              key={item.title}
              className={
                products.length % 2 !== 0 && index === products.length - 1
                  ? "col-span-1 md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <PopupAnimation>
                <ProductCard
                  title={t(item.title)}
                  desc={t(item.desc)}
                  image={item.image}
                />
              </PopupAnimation>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
