import { FC } from "react";
import CustomButton from "../global/CustomButton";
import Image from "next/image";

const forYourBusinessImage = "/images/index/for-your-business.webp";

const ForYourBusinessSection: FC = () => {
    return (
        <section id="for-your-business">
            <div id="for-your-business-container">
                <h2>
                    <small>Pro seu negócio</small>
                    <br />
                    Fidelize seus clientes com recorrência e recompensas
                </h2>
                <section>
                    <div id="for-your-business-content">
                        <p>
                            O <strong>Caramelo®</strong> foi pensado de maneira
                            que você, dono ou responsável pelo estabelecimento
                            possa gerenciar os selos dos seus clientes de
                            maneira simples e amigável.
                        </p>
                        <p>
                            Aproveite para construir uma rede de
                            estabelecimentos parceiros na sua região, de forma a
                            fomentar o consumo local! Se seus vizinhos tem{" "}
                            <strong>Caramelo®</strong>, a chance dos clientes
                            deles consumirem com você aumenta muito.
                        </p>
                        <p>
                            Conheça nosso{" "}
                            <u>programa de estabelecimentos experimentais*</u> e{" "}
                            <strong>não pague nada por 6 meses</strong>!
                            Petshops, restaurantes, estúdios musicais,
                            barbearias, e muitos outros segmentos são aceitos!
                        </p>
                        <CustomButton href="/quero-no-meu-estabelecimento">
                            Quero no meu estabelecimento
                        </CustomButton>
                    </div>
                    <Image
                        src={forYourBusinessImage}
                        alt="Caramelo® - For Your Business"
                        width={911}
                        height={763}
                    />
                </section>
            </div>
        </section>
    );
};

export default ForYourBusinessSection;
