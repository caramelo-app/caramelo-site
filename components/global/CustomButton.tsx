import React, { FC } from "react";
import Link from "next/link";

interface CustomButtonProps {
    href: string;
    children: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ href, children }) => (
    <Link className="custom-button" href={href}>
        {children}
    </Link>
);

export default CustomButton;
