import Header from "@/components/header";
import Hero from "@/components/hero";
import Brands from "@/components/brands";
import NewArrivals from "@/components/new-arrivals";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Hero />
      {/* <Brands /> */}
      <NewArrivals />
      <Footer/>
    </main>
  );
}
