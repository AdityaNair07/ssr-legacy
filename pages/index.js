import { getProducts } from "./api/route";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
            {products?.map((data) => {
              return <ProductCard data={data} key={data?.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
