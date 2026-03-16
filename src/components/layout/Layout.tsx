import { useLocale } from "../../hooks/useLocale"
import Menu from "./Menu"
import Navbar from "./Navbar"
import SocialLinks from "./SocialLinks"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { lang } = useLocale()
  return (
    <div className="w-full min-h-screen font-gotham relative" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      <Menu />
      <SocialLinks />
      {children}
    </div>
  )
}

export default Layout