import Header from "@/components/common/header";
import TopAnimation from "@/components/top/top-animation";
import Footer from "@/components/common/footer";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <TopAnimation />
      {children}
      <Footer />
    </>
  );
}
