import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Platform from './platform';
import Summary from './summary';
import Security from './security';
import Federated from './federated';
import RealTime from './realtime';
// import Interactive from './interactive';
import Hero from './hero_v2';
import riveWASMResource from '@rive-app/canvas/rive.wasm';
import Resources from './resources';
import Gallery from './gallery';

export default function Home() {
  return (
    <main>
      <link rel="preload" href={riveWASMResource} as="fetch" crossOrigin="anonymous" />
      <Navbar />
      <Hero />
      <Platform />
      <Summary />
      <Federated />
      <RealTime />
      {/* <Interactive /> */}
      <Gallery />
      <Security />
      <Resources />
      <Footer />
    </main >
  )
}
