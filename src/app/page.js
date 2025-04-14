
import { Banners } from "@/component/Banners";

import ProductList from "@/component/ProductList";
import Productsection from "@/component/Productsection";
import AboutSection from "@/component/AboutSection";
import Category from "@/component/Category";

export default function Home() {
  return (
    <div className="w-full items-center justify-items-center   font-[family-name:var(--font-geist-sans)]  ">
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
