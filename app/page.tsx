// import Navbar from '@/components/navbar';
// import Radar from '../components/radar';
// import SinglePane from './singlePane';
// import ThreeV from './threeV';
// import Hero from './hero';
import Platform from './platform';
import Summary from './summary';
import Security from './security';
import Federated from './federated';
import RealTime from './realtime';
import Interactive from './interactive';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Hero></Hero> */}
      {/* <SinglePane /> */}
      {/* <ThreeV /> */}
      <Platform />
      <Summary />
      <Federated />
      <RealTime />
      <Interactive />
      <Security />
    </main >
  )
}
