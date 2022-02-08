import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => (
  <div className="products" id="products">
    {products.map((product) => (
      <Link href={`/products/${product.id}`} key={product.id}>
        <a>
          <ProductCard product={product} />
        </a>
      </Link>
    ))}
  </div>
);

export default ProductList;
