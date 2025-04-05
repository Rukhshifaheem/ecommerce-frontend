import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext.jsx";
import Breadcrum from "../components/Breadcrums/Breadcrum.jsx";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay.jsx";
import DiscriptionBox from "../components/DiscriptionBox/DiscriptionBox.jsx";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts.jsx";

const Product = () => {
  const { all_products = [] } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((product) => product.id === productId);

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox product={product}/>
      <RelatedProducts />
    </div>
  )
}

export default Product
