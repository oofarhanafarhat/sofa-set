export const dynamic = "force-dynamic";
export const dynamicParams = true;
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/component/Nav";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    price,
    image,
    description
  }`;

  const product = await client.fetch(query, { slug });

  if (!product) return notFound();

  return (
    <div>
      <Nav bg={true} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image
          src={urlFor(product.image).width(600).height(400).url()}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-lg lg:w-[600px]"
        />
        <p className="mt-4 text-xl text-gray-700">${product.price}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}

// 🔥 THIS IS CRITICAL
export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"]{ slug }`);
  return products.map((product: any) => ({
    slug: product.slug.current,
  }));
}