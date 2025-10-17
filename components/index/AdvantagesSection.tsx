import { FC } from "react";
import CustomButton from "../global/CustomButton";

const AdvantagesSection: FC = () => {
    return (
        <section id="advantages">
            <h2>Vantagens</h2>
            <div id="advantages-content">
                <div>
                    <h3>Para você</h3>
                    <ul>
                        <li>
                            Tenha cartões de todos os lugares credenciados
                            possíveis ❤️
                        </li>
                        <li>
                            Chega de perder seus cartões ou esquecer de levá-los
                            😂
                        </li>
                        <li>É de graça e super fácil de usar 🤑</li>
                        <li>Sem limite de uso ✅</li>
                        <li>Pesquise lugares perto de você 📍</li>
                        <li>
                            Nunca mais deixe de aproveitar seus benefícios 😍
                        </li>
                    </ul>
                    <CustomButton href="/">
                        Baixe o app agora - gratuito
                    </CustomButton>
                </div>
                <div>
                    <h3>Para seu negócio</h3>
                    <ul>
                        <li>
                            🤝 Fidelize seus clientes com a
                            recorrência-por-recompensa
                        </li>
                        <li>
                            💰 Mais barato que cartões de papel e ecológico do
                            que cartões de papel
                        </li>
                        <li>😍 Cartões e clientes ilimitados</li>
                        <li>👆 Libere créditos com um clique</li>
                        <li>🔒 Sistema 100% digital e seguro</li>
                        <li>
                            🔄 Migre seus cartões atuais facilmente com a nossa
                            ferramenta!
                        </li>
                    </ul>
                    <CustomButton href="/">
                        Quero no meu estabelecimento
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
