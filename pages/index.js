import Head from "next/head";
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
      <Head>
        <title>Product Hunt</title>
        <meta
          name="description"
          content="Get information about various products from various categories"
        />
        <meta property="og:title" content="Product Hunt" />
        <meta
          property="og:description"
          content="Get information about various products from various categories"
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
        />
        <meta
          property="og:url"
          content={`https://ssr-legacy-07.vercel.app/products`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Hunt" />
        <meta
          name="twitter:description"
          content="Get information about various products from various categories"
        />
        <meta
          name="twitter:image"
          content="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
        />
      </Head>
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
