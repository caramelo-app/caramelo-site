import { FC } from "react";
import Image from "next/image";
import CustomButton from "@/components/global/CustomButton";

const logo = "/images/global/logo-caramelo-horizontal-black.webp";

const Header: FC = () => {
    return (
        <header>
            <Image src={logo} alt="Caramelo® - Logo" width={240} height={30} />
            <div>
                <CustomButton href="/">Para você</CustomButton>
                <CustomButton href="/">Pro seu negócio</CustomButton>
            </div>
        </header>
    );
};

export default Header;
