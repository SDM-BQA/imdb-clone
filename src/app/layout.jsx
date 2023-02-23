import Header from './components/Header'
import Navbar from './components/Navbar'
import Search from './components/Search'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {/* header */}
      <Header/>
        {/* navbar */}
      <Navbar/>
        {/* search */}
      <Search/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
