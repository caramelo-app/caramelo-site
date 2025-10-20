"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/global/CustomButton";
import { usePathname } from "next/navigation";
const logo = "/images/global/logo-caramelo-horizontal-black.webp";

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = window.innerHeight * 0.5; // 50vh
            setIsScrolled(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";

    return (
        <header className={!isHome || isScrolled ? "scrolled" : ""}>
            <div id="header-container">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Caramelo® - Logo"
                        width={240}
                        height={30}
                    />
                </Link>
                <div>
                    <CustomButton href="/#for-you">Pra você</CustomButton>
                    <CustomButton href="/#for-your-business">
                        Pro seu negócio
                    </CustomButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
