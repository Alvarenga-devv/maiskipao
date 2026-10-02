import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Moments from './components/Moments'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Open24 from './components/Open24'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Moments />
        <Menu />
        <Gallery />
        <Open24 />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
