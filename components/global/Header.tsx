"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "@/components/global/CustomButton";
const logo = "/images/global/logo-caramelo-horizontal-black.webp";

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = window.innerHeight * 0.5; // 50vh
            setIsScrolled(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <div id="header-container">
                <Image
                    src={logo}
                    alt="Caramelo® - Logo"
                    width={240}
                    height={30}
                />
                <div>
                    <CustomButton href="/">Pra você</CustomButton>
                    <CustomButton href="/">Pro seu negócio</CustomButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
