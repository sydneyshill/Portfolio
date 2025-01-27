import Navbar from "@/components/navbar"
import "@/app/globals.css";

export default function MyApp({Component, pageProps}) {
    return (
       <>
        <Navbar></Navbar>
        <Component {...pageProps} />
       </>
    )
}