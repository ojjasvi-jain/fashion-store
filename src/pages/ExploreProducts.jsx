import { useEffect, useState } from "react";
import PriceFilter from "../component/explore/PriceFilter";
import SelectCategory from "../component/explore/SelectCategory";
import ProductCard from "../component/explore/ProductCard";

import fetchFromApi from "../utils/fetchFromApr";

import "./ExploreProduct.css";

function ExploreProduct() {
  const [products, setProducts] = useState([]);

  const [priceFlter, setPriceFilter] = useState("default");
  const [checkBoxState, setCheckBoxState] = useState({
    men: false,
    women: false,
  });

  function handlePriceFilter(e) {
    let filter = e.target.value;
    if (filter === "low-to-high") {
      let priceFilteredData = products
        .slice()
        .sort((a, b) => a.price - b.price);
      setProducts(priceFilteredData);
    }
    if (filter === "high-to-low") {
      let priceFilteredData = products
        .slice()
        .sort((a, b) => b.price - a.price);
      setProducts(priceFilteredData);
    }
    setPriceFilter(filter);
  }

  function handleCategoryCheckBox(e) {
    let { name, checked } = e.target;
    setCheckBoxState({ ...checkBoxState, [name]: checked });
  }

  useEffect(() => {
    async function getData() {
      let res = await fetchFromApi("products");
      function getFilteredData() {
        // if both men and women checkbox are not true than load both men's and women's clothing
        // we are filtering this since the default request also provide result for category that we don't want
        if (!checkBoxState.men && !checkBoxState.women) {
          return res;
        }

        let filteredData = res.filter((product) => {
          if (checkBoxState.men && product.category === "men's clothing") {
            return product;
          } else if (
            checkBoxState.women &&
            product.category === "women's clothing"
          ) {
            return product;
          }
        });
        return filteredData;
      }
      setProducts(getFilteredData());
      setPriceFilter("default");
    }
    getData();
  }, [checkBoxState]);

  return (
    <>
      <main className="product-main">
        <PriceFilter
          priceFlter={priceFlter}
          handlePriceFilter={handlePriceFilter}
        />
        <SelectCategory
          checkBoxState={checkBoxState}
          handleCheckBox={handleCategoryCheckBox}
        />
        <div className="products-container">
          {products?.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </main>
    </>
  );
}

export default ExploreProduct;
