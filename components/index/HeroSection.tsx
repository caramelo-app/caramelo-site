import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AuroraBackground } from "../global/AuroraBackground";

const heroAppScreen = "/images/index/hero-app-screen.webp";
const heroAppDog = "/images/index/hero-cachorro-caramelo.webp";
const globalAppStore = "/images/global/button-download-on-app-store.webp";
const globalPlayStore = "/images/global/button-download-on-google-play.webp";

const HeroSection: FC = () => {
  return (
    <AuroraBackground id="main-hero">
      <div id="main-app-container">
        <h1>Chega de cartãozinho.</h1>
        <p>Tenha seus selos a um clique.</p>
        <div id="hero-app-download-buttons">
          <Link href="/">
            <Image src={globalAppStore} alt="Caramelo® - Telas do app" width={184} height={58} quality={100} />
          </Link>
          <Link href="/">
            <Image src={globalPlayStore} alt="Caramelo® - Download no Google Play Store" width={184} height={58} quality={100} />
          </Link>
        </div>
        <Image id="hero-app-screen" src={heroAppScreen} alt="Caramelo® - Telas do app" width={475} height={545} quality={100} />
        <Image id="hero-app-dog" src={heroAppDog} alt="Caramelo® - Cachorro com o celular" width={425} height={465} quality={100} />
      </div>
    </AuroraBackground>
  );
}

export default HeroSection;