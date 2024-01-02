"use client";
import useScroll from "@/hooks/isScroll";
import styles from "./index.module.css";
import classNames from "classnames";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function NavBar() {
  const isScrolled = useScroll();
  return (
    <nav
      className={classNames(
        styles.navbar,
        isScrolled ? "bg-endeavour" : "bg-transparent",
      )}
    >
      <div className={classNames(styles['navbar-container'], isScrolled ? "text-white": "text-deep-sapphire")}>
        <Link href="/" className="">Hamza</Link>
        <div className="flex ms-auto space-x-4">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact Me</Link>
        </div>
        <div className="flex items-center ms-auto">
            <FaLinkedinIn/>
        </div>
      </div>
    </nav>
  );
}
