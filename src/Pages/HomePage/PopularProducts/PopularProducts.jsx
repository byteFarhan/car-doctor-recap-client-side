import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionIntro from "../SectionIntro/SectionIntro";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/popularProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(products);
  return (
    <>
      <section id="popularProducts" className="my-40">
        <SectionIntro
          sectionCategory="Popular Products"
          sectionTitle="Browse Our Products"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <button className="block mx-auto my-10 btn-transparent btn-transparent-red">
          More Products
        </button>
      </section>
    </>
  );
};

export default PopularProducts;
