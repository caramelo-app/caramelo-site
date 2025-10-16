import React from "react";
import "@/styles/global.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { Onest } from "next/font/google";
import { Metadata } from "next";

const onest = Onest({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Caramelo",
    description:
        "Chega de cartãozinho! Com o Caramelo®, seus selinhos de fidelidade estão todos no celular — simples, confiável e de graça!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={onest.className}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
