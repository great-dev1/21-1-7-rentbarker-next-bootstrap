import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div>
        {children}
      </div>

      <Footer />
    </div>
  )
}