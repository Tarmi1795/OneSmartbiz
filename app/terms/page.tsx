import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | One SmartBiz Qatar",
  description: "Terms and Conditions for One SmartBiz services, pricing, and client engagements.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/" className="text-xs text-[#00ff88] hover:underline mb-4 inline-block" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mt-2" style={{ fontFamily: "var(--font-heading), sans-serif" }}>
              Terms & Conditions
            </h1>
            <p className="text-sm text-muted-foreground mt-3" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              Last updated: March 31, 2026
            </p>
          </div>

          <div className="space-y-10" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>1. Acceptance of Terms</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                By accessing or using the One SmartBiz website (<strong className="text-white">onesmartbiz.pro</strong>) or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>2. Services Overview</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">One SmartBiz provides the following business and digital services:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li><strong className="text-white">Web & App Development:</strong> Custom websites, web applications, and mobile app development</li>
                <li><strong className="text-white">Multimedia & VFX:</strong> Video production, motion graphics, and visual effects</li>
                <li><strong className="text-white">Financial Services:</strong> Audit, bookkeeping, tax filing, and financial consulting</li>
                <li><strong className="text-white">VISA Assistance:</strong> Visa readiness, document review, coordination, and renewal support</li>
                <li><strong className="text-white">Business Formation:</strong> Company setup guidance, licensing support, and launch planning</li>
                <li><strong className="text-white">Business Consulting:</strong> Strategic digital advisory and AI-powered business analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>3. Pricing and Estimates</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">
                The prices displayed on our website, including the pricing calculator, are <strong className="text-white">estimates only</strong> and serve as a baseline for discussion. Final project costs are determined after a formal discovery phase and will be outlined in an official proposal or service agreement.
              </p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>All estimates are provided in QAR (Qatari Riyal) with optional USD and PHP conversions</li>
                <li>Currency conversion rates are approximate and may vary</li>
                <li>Custom requirements marked as &ldquo;Pending Analysis&rdquo; require additional scoping before pricing</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>4. Project Engagement Process</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">Our standard project engagement follows these stages:</p>
              <ol className="list-decimal list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li><strong className="text-white">Inquiry:</strong> You submit your requirements through our contact form, pricing calculator, or WhatsApp</li>
                <li><strong className="text-white">Discovery:</strong> We conduct an initial consultation to understand your needs and scope</li>
                <li><strong className="text-white">Proposal:</strong> We provide a formal proposal with detailed scope, timeline, and pricing</li>
                <li><strong className="text-white">Agreement:</strong> Both parties sign a service agreement before work begins</li>
                <li><strong className="text-white">Execution:</strong> We deliver the project according to agreed milestones</li>
                <li><strong className="text-white">Delivery:</strong> Final review, revisions, and handover</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>5. Payment Terms</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">Unless otherwise specified in a service agreement:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>A deposit of 30-50% is required before project commencement</li>
                <li>Progress payments are tied to agreed milestones</li>
                <li>Final payment is due upon project delivery and acceptance</li>
                <li>Late payments may incur additional charges</li>
                <li>All payments are non-refundable unless otherwise agreed in writing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>6. Intellectual Property</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">
                Upon full payment, you receive ownership of the final deliverables specifically created for your project. However:
              </p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>One SmartBiz retains the right to display completed work in our portfolio</li>
                <li>Third-party assets (fonts, stock images, plugins) remain subject to their respective licenses</li>
                <li>Proprietary tools, frameworks, and code libraries developed by us remain our intellectual property</li>
                <li>You grant us a non-exclusive license to use your brand assets solely for project delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>7. Revisions and Changes</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Each project includes a defined number of revision rounds as specified in the service agreement. Additional revisions or scope changes beyond the agreed terms will be billed at our standard hourly rate of <strong className="text-white">QR 100/hour</strong> or as otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>8. Support and Maintenance</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">
                Post-launch support and maintenance are available at <strong className="text-white">QR 100/hour</strong> and include:
              </p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>Content updates</li>
                <li>Plugin and dependency management</li>
                <li>Security patches</li>
                <li>Technical support</li>
              </ul>
              <p className="text-[#a0a0a0] leading-relaxed mt-3">
                Extended maintenance packages can be arranged separately. Support does not cover issues caused by third-party modifications or unauthorized changes to delivered work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>9. AI Analysis Disclaimer</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Our AI Business Advisor tool provides automated estimates and insights based on the data you input. These results are <strong className="text-white">for informational purposes only</strong> and should not be considered as professional financial advice. We recommend consulting a qualified financial advisor before making business decisions. One SmartBiz is not liable for any actions taken based on AI-generated analysis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>10. Limitation of Liability</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                To the maximum extent permitted by applicable law, One SmartBiz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>11. Confidentiality</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of any service agreement for a period of 2 years.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>12. Termination</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Either party may terminate a project engagement with written notice. Upon termination, you are responsible for payment for all work completed up to the termination date. One SmartBiz reserves the right to withhold deliverables until all outstanding payments are settled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>13. Governing Law</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Doha, Qatar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>14. Contact</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 p-6 bg-[#12121a] border border-[#2a2a3a]" style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
                <p className="text-white font-semibold">One SmartBiz</p>
                <p className="text-[#a0a0a0] text-sm mt-1">Doha, Qatar</p>
                <p className="text-[#a0a0a0] text-sm">Email: <a href="mailto:admin@onesmartbiz.pro" className="text-[#00ff88] hover:underline">admin@onesmartbiz.pro</a></p>
                <p className="text-[#a0a0a0] text-sm">WhatsApp: <a href="https://wa.me/97431308665" className="text-[#00ff88] hover:underline">+974 5585 5221</a></p>
                <p className="text-[#a0a0a0] text-sm">Website: <a href="https://onesmartbiz.pro" className="text-[#00ff88] hover:underline">onesmartbiz.pro</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
