"use client";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";
import { FaShoppingCart, FaChevronRight } from 'react-icons/fa'; // Import icons directly
import { FaFacebook } from 'react-icons/fa'; // Import icon directly
import {Nav} from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hero";


export default function Home() {
  return (
    <>
    <Nav/>
   <Hero/>
    <Footer/>
    </>
  
    
    
  );
}
