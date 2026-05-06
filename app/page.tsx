import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Industries />
      <Contact />
    </main>
  );
}
