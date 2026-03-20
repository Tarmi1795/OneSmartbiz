import Nav from "@/components/Nav";
import PricingCalculator from "@/components/PricingCalculator";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project Pricing Tool | One SmartBiz Qatar",
  description: "Plan your investment with our accurate project pricing tool. Tailored solutions for businesses in Doha, Qatar.",
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
