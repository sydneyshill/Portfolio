import Navbar from "@/components/navbar"
import "@/app/globals.css";
import RootLayout from "@/app/layout";
export default function MyApp({Component, pageProps}) {
    return (
       <div className="font-moderustic">
        <Navbar></Navbar>
        <Component {...pageProps} />
       </div>
    )
}