import React from "react";
import { Metadata } from "next";
import BusinessIntentForm from "@/components/forms/BusinessIntentForm";

export const metadata: Metadata = {
    title: "Quero no meu estabelecimento | Caramelo®",
    description:
        "Formulário de intenção para estabelecimentos interessados no Caramelo®. Lançamento com 6 meses gratuitos na primeira etapa.",
    alternates: { canonical: "/quero-no-meu-estabelecimento" },
    robots: { index: true, follow: true },
};

const Page: React.FC = () => {
    return (
        <main className="page">
            <h1>
                Quero o Caramelo® no meu estabelecimento
            </h1>
            <p>
                Nesta primeira etapa de lançamento, oferecemos <strong>6 meses
                gratuitos</strong> para os primeiros estabelecimentos que se
                cadastrarem. Preencha o formulário abaixo e retornaremos com os
                próximos passos.
            </p>
            <BusinessIntentForm />
        </main>
    );
};

export default Page;


