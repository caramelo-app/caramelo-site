import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const logo = "/images/global/logo-caramelo-horizontal-white.webp";

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div id="footer-container">
                <div>
                    <Image
                        src={logo}
                        alt="Caramelo® - Logo"
                        width={240}
                        height={40}
                    />
                    <p>
                        O Caramelo® é um app para estabelecimentos e seus
                        clientes abolirem de vez os cartõezinhos de papel que
                        são utilizados para contabilizar selos em troca de um
                        benefício. Chega de carimbinho ou adesivo! O Caramelo®
                        centraliza todos seus cartões em um meio digital fácil,
                        confiável e rápido. Clientes podem buscar diretamente no
                        app quais estabelecimentos aceitam Caramelo® na sua
                        região.
                    </p>
                </div>
                <nav>
                    <ul>
                        <li>
                            Caramelo
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/suporte">Suporte</Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        FAQ - Perguntas frequentes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-privacidade">
                                        Política de privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/termos-de-uso">
                                        Termos de uso
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Para você e sua empresa
                            <ul>
                                <li>
                                    <Link href="/em-breve">
                                        Baixar app - iOS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/em-breve">
                                        Baixar app - Android
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/quero-no-meu-estabelecimento">
                                        Quero no meu estabelecimento
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/precos">Preços</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <Link
                                        href="https://x.com/appcaramelo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Conheça nossa conta no X (abre em nova aba)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            aria-label="Conheça nossa conta no X"
                                            role="img"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.instagram.com/appcaramelo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Conheça nossa conta no Instagram (abre em nova aba)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            aria-label="Conheça nossa conta no Instagram"
                                            role="img"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:maykel@appcaramelo.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Envie-nos um e-mail (abre o cliente de e-mail)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            aria-label="Envie-nos um e-mail"
                                            role="img"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <rect
                                                    width="18.5"
                                                    height="17"
                                                    x="2.682"
                                                    y="3.5"
                                                    rx="4"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m2.729 7.59l7.205 4.13a3.956 3.956 0 0 0 3.975 0l7.225-4.13"
                                                />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=5541984012834&text=Olá, gostaria de falar sobre o Caramelo!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Precisa de ajuda? Entre em contato no WhatsApp (abre em nova aba)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 432 432"
                                            aria-label="Precisa de ajuda? Entre em contato no WhatsApp"
                                            role="img"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/company/appcaramelo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Conheça nossa conta no LinkedIn (abre em nova aba)"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 432 432"
                                            aria-label="Conheça nossa conta no LinkedIn"
                                            role="img"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="footer-copyright">
                <p>
                    {year}® Caramelo - Todos os direitos reservados - Esser
                    Serviços em Tecnologia - E&M Tech - CNPJ 57962671000150{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
