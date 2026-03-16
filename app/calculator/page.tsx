import Nav from "@/components/Nav";
import PricingCalculator from "@/components/PricingCalculator";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing Engine | One SmartBiz Qatar",
  description: "Calculate your custom web development investment with our advanced pricing engine.",
};

export default function CalculatorPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-20">
        <PricingCalculator />
      </main>
      <Footer />
    </>
  );
}
