import Image from "next/image";
export async function getServerSideProps(context) {
  const id = context.params.productid;
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await result.json();

  return { props: { data } };
}

function ProductsDetail({ data }) {
  return (
    <div className="product__detail__containar d-flex">
      <div className="product__detail d-flex">
        <div className="image__section">
          <Image
            className="image"
            src={`${data.image}`}
            alt={data.title}
            width={300}
            height={300}
          />
        </div>
        <div className="detail__section">
          <span className="product__name">{data.title}</span>
          <span className="product__category">{data.category}</span>
          <div className="product__price">
            <span className="discount">${data.price}</span>
            <span className="price"> ${data.price}</span>
          </div>

          <div className="description">
            <span className="description__title">DESCRIPTION</span>
            <p className="description__des">{data.description}</p>
          </div>

          <div className="product__count d-flex">
            <span className="title">count</span>
            <span className="count">{data.rating.count}</span>
          </div>

          <div className="btn">
            <button className="addToCard">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetail;
