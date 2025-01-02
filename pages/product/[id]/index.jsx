import { getProductById } from "@/pages/api/route";
import Navbar from "@/pages/components/Navbar";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getProductById({ id });

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.images[0]],
      url: `https://seo-next-pink.vercel.app/products/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const product = await getProductById({ id });

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <div className="w-full h-full pt-20 text-3xl font-semibold text-center">
        Product not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container w-full h-full px-0 py-10 mx-auto lg:px-10">
        <div className="flex flex-col w-full h-full mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            {/* <img
              src={product.images[0]}
              alt={product.title}
              className="object-contain object-center w-full h-[400px]"
            /> */}
            <Image
              src={product.images[0]}
              alt={product.title}
              width={400}
              height={400}
              loading="eager"
              className="object-contain object-center w-full h-[400px]"
            />
          </div>
          <div className="flex flex-col w-full gap-2 md:w-1/2">
            <div className="flex justify-start item-center">
              Reviews: {product.reviews?.length}
            </div>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
