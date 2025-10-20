import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de privacidade | Caramelo®",
    description:
        "Política de privacidade do Caramelo® conforme a LGPD (Lei 13.709/2018). Saiba como tratamos seus dados.",
    alternates: { canonical: "/politica-de-privacidade" },
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
            <h1>Política de privacidade</h1>
            <P>
                Esta Política descreve como o Caramelo® coleta, usa e compartilha
                dados pessoais em conformidade com a Lei Geral de Proteção de
                Dados (LGPD – Lei 13.709/2018).
            </P>

            <H2>Controlador e contato</H2>
            <P>
                Controlador: Esser Serviços em Tecnologia - E&M Tech. Contato do
                Encarregado (DPO): maykel@appcaramelo.com.br.
            </P>

            <H2>Dados que coletamos</H2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Cadastro: nome, e-mail, telefone, senha (hash/criptografia).</li>
                <li>Uso do app: registros de validação de selos, data e horário.</li>
                <li>Localização aproximada no momento da validação (quando permitido).</li>
                <li>Dados técnicos: IP, dispositivo, sistema operacional, identificadores de sessão.</li>
                <li>Comunicações de suporte e preferências.</li>
            </ul>

            <H2>Bases legais</H2>
            <P>
                Tratamos dados com base em execução de contrato (prestação do
                serviço), legítimo interesse (prevenção a fraudes, melhorias) e
                consentimento quando necessário (notificações, localização).
            </P>

            <H2>Finalidades</H2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
                <li>Operar o app e manter seus cartões de fidelidade.</li>
                <li>Prevenir fraudes e abuso nas validações de selos.</li>
                <li>Atendimento e comunicação sobre o serviço.</li>
                <li>Melhorias de produto e métricas agregadas.</li>
                <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>

            <H2>Compartilhamento</H2>
            <P>
                Compartilhamos dados com provedores de infraestrutura,
                autenticação, envio de SMS/e-mail e análises, sempre com
                contratos e medidas de segurança adequadas. Não vendemos dados
                pessoais.
            </P>

            <H2>Segurança</H2>
            <P>
                Utilizamos criptografia de senhas, tokens de acesso, controle de
                permissões e backups. Apesar dos esforços, nenhum sistema é 100%
                seguro.
            </P>

            <H2>Direitos dos titulares</H2>
            <P>
                Você pode solicitar confirmação de tratamento, acesso, correção,
                anonimização, portabilidade, eliminação e revisão de decisões
                automatizadas pelo e-mail do DPO.
            </P>

            <H2>Retenção</H2>
            <P>
                Mantemos dados enquanto necessários para a prestação do serviço e
                para cumprimento de obrigações legais. Após esse período, são
                eliminados ou anonimizados.
            </P>

            <H2>Transferências internacionais</H2>
            <P>
                Alguns provedores podem estar fora do Brasil. Nessas hipóteses,
                adotamos cláusulas contratuais e medidas compatíveis com a LGPD.
            </P>

            <H2>Cookies e tecnologias semelhantes</H2>
            <P>
                Utilizamos cookies essenciais e de medição agregada para
                melhorar a experiência. Você pode ajustar suas preferências no
                navegador.
            </P>

            <H2>Atualizações</H2>
            <P>
                Esta Política pode ser atualizada. Indicaremos a data da última
                alteração e, quando cabível, solicitaremos novo consentimento.
            </P>
        </main>
    );
};

export default Page;


