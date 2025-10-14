import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Platform from './platform';
import Summary from './summary';
import Security from './security';
import Federated from './federated';
import EntityMatching from './entityMatching';
import RealTime from './realtime';
import Hero from './hero';
import riveWASMResource from '@rive-app/canvas/rive.wasm';
import Resources from './resources';
import Gallery from './gallery';

export default function Home() {
  return (
    <main>
      <link rel="preload" href={riveWASMResource} as="fetch" crossOrigin="anonymous" />
      <script type="application/ld+json">
        {`{
          "@context" : "https://schema.org",
          "@type" : "WebSite",
          "name" : "Tetmon",
          "url" : "https://www.tetmon.com/"
        }`}
      </script>
      <Navbar />
      <Hero />
      <Platform />
      <Summary />
      <Federated />
      <EntityMatching />
      <RealTime />
      <Gallery />
      <Security />
      <Resources />
      <Footer />
    </main >
  )
}
