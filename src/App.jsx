import { Suspense, lazy } from 'react';
import Loader from './utils/Loader/Loader.jsx';
import Layout from '../src/components/ui/Layout';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Sections/Contact.jsx';
import Footer from './Footer/Footer';

const LazyHero = lazy(() => import('./components/Hero/Hero.jsx'));

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Suspense fallback={<Loader />}>
          <LazyHero />
        </Suspense>
        <Contact />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
