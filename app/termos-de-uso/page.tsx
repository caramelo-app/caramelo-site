import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de uso | Caramelo®",
    description:
        "Termos de uso do Caramelo®: condições, responsabilidades e limitações aplicáveis ao serviço.",
    alternates: { canonical: "/termos-de-uso" },
};

function P({ children }: { children: React.ReactNode }) {
    return <p className="text-neutral-700 mb-4">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl md:text-2xl font-bold mt-8 mb-3">{children}</h2>;
}

const Page: React.FC = () => {
    return (
        <main className="page">
            <h1>Termos de uso</h1>
            <P>
                Ao usar o Caramelo®, você concorda com estes Termos de Uso. Se
                não concordar, não utilize o serviço.
            </P>

            <H2>Objeto do serviço</H2>
            <P>
                O Caramelo® fornece uma plataforma para gestão de selos de
                fidelidade digitais entre estabelecimentos e seus clientes.
            </P>

            <H2>Cadastro e conta</H2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Você deve fornecer informações verdadeiras e manter a conta segura.</li>
                <li>É proibido compartilhar credenciais ou usar a conta de terceiros.</li>
                <li>Podemos suspender contas em caso de fraude, violação destes Termos ou uso indevido.</li>
            </ul>

            <H2>Responsabilidades</H2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>O usuário é responsável pelo uso adequado do serviço e das validações de selos.</li>
                <li>O estabelecimento é responsável pelas ofertas, regras e concessão de benefícios.</li>
                <li>O Caramelo® não se responsabiliza por danos indiretos, perda de lucros ou atos de terceiros.</li>
            </ul>

            <H2>Licença e propriedade intelectual</H2>
            <P>
                O app e o site são de nossa propriedade. Você recebe uma licença
                limitada, não exclusiva e intransferível para uso pessoal e
                empresarial nos termos aqui previstos.
            </P>

            <H2>Pagamentos e planos</H2>
            <P>
                Durante o lançamento, oferecemos 6 meses gratuitos a
                estabelecimentos selecionados. Após o período, os valores e
                condições de assinatura serão informados antes de qualquer
                cobrança.
            </P>

            <H2>Privacidade</H2>
            <P>
                O tratamento de dados pessoais segue a nossa Política de
                Privacidade, parte integrante destes Termos.
            </P>

            <H2>Suporte e contato</H2>
            <P>
                Canais de suporte: e-mail maykel@appcaramelo.com.br e WhatsApp
                oficial.
            </P>

            <H2>Vigência e alterações</H2>
            <P>
                Estes Termos têm vigência indeterminada e podem ser atualizados
                a qualquer tempo. Publicaremos a versão atualizada neste site.
            </P>

            <H2>Foro</H2>
            <P>
                Fica eleito o foro da Comarca de Curitiba/PR, Brasil, com
                renúncia a qualquer outro, por mais privilegiado que seja.
            </P>
        </main>
    );
};

export default Page;


