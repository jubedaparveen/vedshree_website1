
import Image from "next/image";
import { Banners } from "@/component/Banners";
import Category from "@/component/category";
import ProductList from "@/component/ProductList";
import Productsection from "@/component/Productsection";
import AboutSection from "@/component/AboutSection";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen   border-green-300/10  font-[family-name:var(--font-geist-sans)]  ">
      <main className=" ">
       <Banners/>
       <Category />
       <Productsection/>
       <ProductList/>
       <AboutSection/>
      </main>
    </div>
  );
}
