import TopBar from '@/components/header/TopBar';
import Header from '@/components/header/Header';
import Banner from '@/components/Banner';
import Season from '@/components/season-collection/Season';
import Seller from '@/components/products/Seller';
import Discount from '@/components/discounts/Discount';
import Feature from '@/components/features/Feature';
import Map from '@/components/Map';
import Brand from '@/components/Brand';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Header fullHeader={true} />
      <Banner />
      <Season />
      <Seller />
      <Discount />
      <Feature />
      <Map />
      <Brand />
      <Footer />
      
    </>
  );
}
