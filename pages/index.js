import ProductList from "../components/ProductList";
export async function getServerSideProps() {
  const result = await fetch(`https://fakestoreapi.com/products`);
  const productList = await result.json();

  return {
    props: {
      productList,
    },
  };
}

const Index = ({ productList }) => (
  <div className="product__container">
    <h2>Product List</h2>
    <ProductList products={productList} />
  </div>
);

export default Index;
