import { FC } from "react";
import CustomButton from "../global/CustomButton";

const ForYourBusinessSection: FC = () => {
    return (
        <section>
            <h2>
                <small>Pro seu negócio</small>
                <br />
                Fidelize seus clientes com recorrência e recompensas
            </h2>
            <p>O <strong>Caramelo®</strong> foi pensado de maneira que você, dono ou responsável pelo estabelecimento possa gerenciar os selos dos seus clientes de maneira simples e amigável.</p>
            <p>Caso você ainda tenha cartões de papel, você poderá migrá-los facilmente e progressivamente com nossa ferramenta! Acabe com as fraudes usando um sistema 100% digital. Carimbos e adesivos podem ser fraudados facilmente - Nosso sistema não!</p>
            <p>Aproveite para construir uma rede de estabelecimentos parceiros na sua região, de forma a fomentar o consumo local! Se seus vizinhos tem <strong>Caramelo®</strong>, a chance dos clientes deles consumirem com você aumenta muito.</p>
            <p>Conheça nosso <u>programa de estabelecimentos experimentais*</u> e <strong>não pague nada por 6 meses</strong>! Petshops, restaurantes, estúdios musicais, barbearias, e muitos outros segmentos são aceitos!</p>
            <CustomButton href="/">Quero no meu estabelecimento</CustomButton>
        </section>
    );
};

export default ForYourBusinessSection;
