import React from "react";
import { Metadata } from "next";
import CustomButton from "@/components/global/CustomButton";

export const metadata: Metadata = {
    title: "Preços | Caramelo®",
    description:
        "Caramelo®: grátis para consumidores. Para estabelecimentos: 6 meses grátis e depois R$13,90/mês.",
    alternates: { canonical: "/precos" },
};

function PlanCard({
    title,
    price,
    description,
    ctaHref,
    ctaLabel,
    highlight,
}: {
    title: string;
    price: string;
    description: string;
    ctaHref: string;
    ctaLabel: string;
    highlight?: boolean;
}) {
    return (
        <div className={`card p-6 ${highlight ? "ring-2 ring-orange-500" : ""}`}>
            <h3 className="text-2xl font-bold mb-2 text-orange-950">{title}</h3>
            <p className="muted mb-4">{description}</p>
            <div className="mb-6">
                <span className="text-4xl font-black text-orange-950">{price}</span>
            </div>
            <CustomButton href={ctaHref}>{ctaLabel}</CustomButton>
        </div>
    );
}

const Page: React.FC = () => {
    return (
        <main className="page">
            <h1>Preços</h1>
            <p>
                Simples, transparente e direto ao ponto. O Caramelo® é gratuito
                para consumidores e tem um plano acessível para estabelecimentos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <PlanCard
                    title="Para você (consumidor)"
                    price="R$ 0"
                    description="Baixe o app e organize seus selinhos em um só lugar."
                    ctaHref="/em-breve"
                    ctaLabel="Baixar app (em breve)"
                />

                <PlanCard
                    title="Para seu negócio (estabelecimento)"
                    price="6 meses grátis → R$ 13,90/mês"
                    description="Lançamento por tempo limitado. Comece agora e fidelize mais clientes."
                    ctaHref="/quero-no-meu-estabelecimento"
                    ctaLabel="Quero no meu estabelecimento"
                    highlight
                />
            </div>

            <section className="mt-12">
                <h2>O que está incluso</h2>
                <ul>
                    <li>Cartões de fidelidade digitais ilimitados</li>
                    <li>Validação por QR Code rápida e segura</li>
                    <li>Ferramenta de migração do seu programa atual</li>
                    <li>Suporte por e-mail e WhatsApp</li>
                </ul>
            </section>
        </main>
    );
};

export default Page;


