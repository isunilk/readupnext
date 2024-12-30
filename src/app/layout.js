import { Inter, Outfit, Urbanist } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "@/component/Footer/Footer";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin']
})
const urbanist = Urbanist({
  variable: '--font-urb',
  subsets: ['latin']
})


export const metadata = {
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/opengraph_image.png',
  },
  twitter:{
    creator: '@readupnext',
  },
  verification: {
    google: 'kw-vrpsX8wC6a9o_YVRcf0f6cpJk-dmn9ANV4eSex9Y',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} ${urbanist.variable}`}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
