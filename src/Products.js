import ProductCard from "./ProductCard";
function Products({ productList }) {
  return (
    <div>
      {productList.map(product => (
        <ProductCard product={product} key={product.id}

        />
      ))}


    </div>
  )
}

export default Products;