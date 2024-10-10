import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Platform from './platform';
import Summary from './summary';
import Security from './security';
import Federated from './federated';
import RealTime from './realtime';
import Interactive from './interactive';
import Hero from './hero_v2';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Platform />
      <Summary />
      <Federated />
      <RealTime />
      <Interactive />
      <Security />
      <Footer />
    </main >
  )
}
