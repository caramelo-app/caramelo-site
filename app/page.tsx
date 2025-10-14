import ForYouSection from "@/components/index/ForYouSection";
import ForYourBusinessSection from "@/components/index/ForYourBusinessSection";
import AdvantagesSection from "@/components/index/AdvantagesSection";
import HeroSection from "@/components/index/HeroSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ForYouSection />
            <ForYourBusinessSection />
            <AdvantagesSection />
        </>
    );
}
