import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Perguntas frequentes | Caramelo®",
    description:
        "Perguntas e respostas sobre o Caramelo® para clientes e estabelecimentos.",
    alternates: { canonical: "/faq" },
};

type QA = { q: string; a: string };

const clientes: QA[] = [
    {
        q: "O Caramelo® é gratuito para clientes?",
        a: "Sim. O app é gratuito para baixar e usar para guardar seus selinhos digitais.",
    },
    {
        q: "Preciso de internet para usar?",
        a: "Para consultar e sincronizar seus cartões, sim. Em breve teremos suporte offline para leitura do QR Code e sincronização posterior.",
    },
    {
        q: "Meus dados estão seguros?",
        a: "Usamos boas práticas de segurança, criptografia de senhas e tokens de sessão. Consulte a Política de Privacidade para detalhes.",
    },
];

const estabelecimentos: QA[] = [
    {
        q: "Como funciona a emissão de selinhos digitais?",
        a: "O estabelecimento valida selos por QR Code. Cada validação é registrada no sistema com data, hora e local aproximado.",
    },
    {
        q: "Quanto custa?",
        a: "Durante o lançamento, oferecemos 6 meses gratuitos. Após o período, divulgaremos planos de assinatura com recursos avançados.",
    },
    {
        q: "Posso migrar de um programa atual?",
        a: "Sim. Temos uma ferramenta simples para migrar seus cartões atuais para o Caramelo®."
    },
];

function Section({ title, items }: { title: string; items: QA[] }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
            <ul className="space-y-4">
                {items.map((item) => (
                    <li key={item.q}>
                        <p className="font-semibold">{item.q}</p>
                        <p className="text-neutral-700">{item.a}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const Page: React.FC = () => {
    return (
        <main className="page">
            <h1>FAQ - Perguntas frequentes</h1>
            <Section title="Para clientes" items={clientes} />
            <Section title="Para estabelecimentos" items={estabelecimentos} />
        </main>
    );
};

export default Page;


