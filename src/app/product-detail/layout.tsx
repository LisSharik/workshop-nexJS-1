import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Header fullHeader ={false} />
        <main className="text-neutral-800">{children}</main>
        <Footer />
      </>
    );
  }