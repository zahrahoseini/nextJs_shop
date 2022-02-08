import Image from "next/image";

const ProductCard = ({ product }) => (
  <div className="product__card">
    <Image
      className="product__image"
      src={`${product.image}`}
      alt={product.category}
      width={200}
      height={200}
    />
    <div className="product__info">
      <h5 className="product__name">{product.title}</h5>
      <div className="product__price__sec d-flex">
        <span className="dscount">${product.price}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
