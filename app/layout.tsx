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
    metadataBase: new URL("https://appcaramelo.com.br"),
    title: "Caramelo® - Carteira digital de selinhos de fidelidade",
    description:
        "Chega de cartãozinho! Com o Caramelo®, seus selinhos de fidelidade estão todos no celular — simples, confiável e de graça!",
    keywords: [
        "caramelo",
        "carteira digital",
        "selos",
        "fidelidade",
        "cartão fidelidade",
        "programa de fidelidade",
        "marketing digital",
        "marketing de fidelidade",
        "marketing pequenas empresas",
        "marketing estudios de música",
        "marketing barbearias",
        "marketing petshops",
        "marketing restaurantes",
        "marketing salão de beleza",
    ],
    openGraph: {
        type: "website",
        url: "https://appcaramelo.com.br/",
        title: "Caramelo® - Carteira digital de selinhos de fidelidade",
        description:
            "Chega de cartãozinho! Com o Caramelo®, seus selinhos de fidelidade estão todos no celular — simples, confiável e de graça!",
        images: [
            {
                url: "/images/seo/og.jpeg",
                width: 1200,
                height: 630,
                alt: "Caramelo®",
            },
        ],
        siteName: "Caramelo®",
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Caramelo® - Carteira digital de selinhos de fidelidade",
        description:
            "Chega de cartãozinho! Com o Caramelo®, seus selinhos de fidelidade estão todos no celular — simples, confiável e de graça!",
        images: ["/images/seo/og.jpeg"],
    },
    alternates: { canonical: "/", languages: { "pt-BR": "/" } },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    icons: {
        icon: [
            {
                url: "/images/seo/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/images/seo/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/images/seo/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/images/seo/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            { url: "/images/seo/favicon.ico", type: "image/x-icon" },
        ],
        apple: "/images/seo/apple-touch-icon.png",
        shortcut: "/images/seo/favicon.ico",
    },
    manifest: "/images/seo/site.webmanifest",
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
