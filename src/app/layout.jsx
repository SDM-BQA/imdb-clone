import Header from './components/Header'
import Navbar from './components/Navbar'
import Search from './components/Search'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
      <Header/>
        {/* navbar */}
      <Navbar/>
        {/* search */}
      <Search/>
        {children}
        </body>
    </html>
  )
}
