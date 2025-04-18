"use client";
import Link from "next/link";
import styles from "@/app/page.module.css";
import clsx from "clsx";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.header}>
      <div className={styles.headerTop}>
        <Link href="/">
          <Image
            src="/manac-b.svg"
            alt="Logo"
            width={100}
            height={63}
            className={styles.logo}
          />
        </Link>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={clsx(styles.burger, menuOpen)}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Image src="/icons/menu.svg" alt="menu" width={24} height={24} />
        </motion.button>
      </div>
      <div className={styles.navLinksDesktop}>
        <HeaderLinks></HeaderLinks>
        <LocaleSwitcher />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className={clsx(styles.navLinks, styles.open)}
          >
            <div className={styles.closeContainer}>
              <Image
                onClick={() => setMenuOpen(false)}
                src="/icons/close.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </div>

            <HeaderLinks onClick={() => setMenuOpen(false)}></HeaderLinks>
            <LocaleSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className={styles.windowCloser}
        ></div>
      )}
    </nav>
  );
}
