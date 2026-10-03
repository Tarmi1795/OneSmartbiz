import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | One Smart Biz",
  description: "Internal administrative configuration for One Smart Biz.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
