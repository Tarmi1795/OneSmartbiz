import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | One SmartBiz Qatar",
  description: "Privacy Policy for One SmartBiz — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/" className="text-xs text-[#00ff88] hover:underline mb-4 inline-block" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              ← Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mt-2" style={{ fontFamily: "var(--font-heading), sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mt-3" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              Last updated: March 31, 2026
            </p>
          </div>

          <div className="space-y-10" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>1. Introduction</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                One SmartBiz (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-white">onesmartbiz.pro</strong> or use our services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>2. Information We Collect</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and company name when you submit an inquiry or contact form.</li>
                <li><strong className="text-white">Project Details:</strong> Information about your project requirements, budget estimates, and service preferences submitted through our pricing calculator.</li>
                <li><strong className="text-white">Communication Data:</strong> Messages sent via our contact forms, WhatsApp integration, or email correspondence.</li>
                <li><strong className="text-white">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website collected automatically through analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>3. How We Use Your Information</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Prepare project proposals and cost estimates</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Analyze website usage and optimize performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>4. Data Storage and Security</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Your data is stored securely using Supabase, a trusted cloud database provider. We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your personal information. While we strive to protect your data, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>5. Third-Party Services</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">We use the following third-party services that may collect information:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li><strong className="text-white">WhatsApp:</strong> For direct communication &mdash; subject to WhatsApp&apos;s privacy policy</li>
                <li><strong className="text-white">Google Gemini API:</strong> For AI-powered business analysis &mdash; subject to Google&apos;s privacy policy</li>
                <li><strong className="text-white">Vercel:</strong> For website hosting and analytics &mdash; subject to Vercel&apos;s privacy policy</li>
                <li><strong className="text-white">Supabase:</strong> For data storage &mdash; subject to Supabase&apos;s privacy policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>6. Cookies and Tracking</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>7. Data Retention</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Inquiry data and project estimates are retained for a minimum of 2 years to support ongoing client relationships.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>8. Your Rights</h2>
              <p className="text-[#a0a0a0] leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-[#a0a0a0] leading-relaxed space-y-2 ml-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal information</li>
                <li>Request transfer of your data to another service</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-[#a0a0a0] leading-relaxed mt-3">
                To exercise any of these rights, contact us at <a href="mailto:onebizfam@gmail.com" className="text-[#00ff88] hover:underline">onebizfam@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>9. Children&apos;s Privacy</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>10. Changes to This Policy</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#00ff88] mb-4" style={{ fontFamily: "var(--font-heading), sans-serif" }}>11. Contact Us</h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-[#12121a] border border-[#2a2a3a]" style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
                <p className="text-white font-semibold">One SmartBiz</p>
                <p className="text-[#a0a0a0] text-sm mt-1">Doha, Qatar</p>
                <p className="text-[#a0a0a0] text-sm">Email: <a href="mailto:onebizfam@gmail.com" className="text-[#00ff88] hover:underline">onebizfam@gmail.com</a></p>
                <p className="text-[#a0a0a0] text-sm">WhatsApp: <a href="https://wa.me/97455855221" className="text-[#00ff88] hover:underline">+974 5585 5221</a></p>
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
