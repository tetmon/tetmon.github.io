import Navbar from '@/components/navbar';
import Radar from '../components/radar';
import SinglePane from './singlePane';
import ThreeV from './threeV';
import Hero from './hero';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero></Hero>
      <SinglePane />
      <ThreeV />
    </main >
  )
}
