import { FC } from "react";
import Image from "next/image";

const logo = "/images/global/logo-caramelo-horizontal-white.webp";

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <Image
                    src={logo}
                    alt="Caramelo® - Logo"
                    width={240}
                    height={40}
                />
                <p>
                    O Caramelo® é um app para estabelecimentos e seus clientes
                    abolirem de vez os cartõezinhos de papel que são utilizados
                    para contabilizar selos em troca de um benefício. Chega de
                    carimbinho ou adesivo! O Caramelo® centraliza todos seus
                    cartões em um meio digital fácil, confiável e rápido.
                    Clientes podem buscar diretamente no app quais
                    estabelecimentos aceitam Caramelo® na sua região.
                </p>
                <nav>
                    <ul>
                        <li>
                            Caramelo
                            <ul>
                                <li>Home</li>
                                <li>Suporte</li>
                                <li>FAQ - Perguntas frequentes</li>
                                <li>Política de privacidade</li>
                                <li>Termos de uso</li>
                            </ul>
                        </li>
                        <li>
                            Para você e sua empresa
                            <ul>
                                <li>Baixar app - iOS</li>
                                <li>Baixar app - Android</li>
                                <li>Quero no meu estabelecimento</li>
                                <li>Preços</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>E-mail</li>
                                <li>WhatsApp</li>
                                <li>LinkedIn</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <p>
                    {year}® Caramelo - Todos os direitos reservados - Esser
                    Serviços em Tecnologia - E&M Tech - CNPJ 57962671000150{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
