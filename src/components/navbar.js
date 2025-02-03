"use client";
import Experience from "@/pages/experience";
import Education from "@/pages/education";
import Projects from "@/pages/projects";
import { useState} from "react";
import { useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; 
    }
    
    return (
      <div>
        <nav className="navbar navbar-expand sepNavbar font-moderustic">
            <div className="mx-auto flex row p-4 ">
                <ul className="nav navbar-nav p-6 gap-x-10 flex justify-around">
                  <li className="text-2xl text-customBlue">Sydney Shillinglaw</li>
                  <li><Link href="/" className="hover:text-white">
                    Home </Link></li>
                   <li><Link href="/experience">Experience</Link></li>
                    <li><Link href="/education">Education</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="https://github.com/sydneyshill">
                    <FaGithub size={25}></FaGithub></Link></li>
                    <li><Link href="https://www.linkedin.com/in/sydney-shillinglaw-164126212/">
                    <FaLinkedin size={25}></FaLinkedin></Link></li>
                </ul>
            </div>
        </nav>
        </div>
    );
    
}

export default Navbar;