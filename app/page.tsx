import ForYouSection from "@/components/index/ForYouSection";
import ForYourBusinessSection from "@/components/index/ForYourBusinessSection";
import AdvantagesSection from "@/components/index/AdvantagesSection";
import HeroSection from "@/components/index/HeroSection";
import Script from "next/script";

export default function HomePage() {
    return (
        <>
            <Script
                id="ld-app"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "Caramelo",
                        operatingSystem: "iOS, Android",
                        applicationCategory: "BusinessApplication",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "BRL",
                        },
                        url: "https://appcaramelo.com.br/",
                    }),
                }}
            />
            <HeroSection />
            <ForYouSection />
            <ForYourBusinessSection />
            <AdvantagesSection />
        </>
    );
}
