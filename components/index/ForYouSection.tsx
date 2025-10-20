import Image from "next/image";
import React, { FC } from "react";
import CustomButton from "../global/CustomButton";
import {
    QrCodeIcon,
    BuildingStorefrontIcon,
    CheckBadgeIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

const forYouImage = "/images/index/for-you.webp";

const ForYouSection: FC = () => {
    return (
        <section id="for-you">
            <h2>
                <small>Pra você e pra todo mundo</small>
                <br />O Caramelo® é sua carteira digital de selinhos de
                fidelidade
            </h2>
            <p>
                O <strong>Caramelo®</strong> acaba com os cartõezinhos de
                papel: você guarda seus selos de vários estabelecimentos no seu
                celular - e estabelecimentos criam seus cartões digitais,
                aprovam solicitações e eliminam fraudes — tudo simples e muito
                rápido - e a melhor parte: É de graça!
            </p>
            <div id="highlights-container">
                <Image
                    src={forYouImage}
                    alt="Caramelo® - For You"
                    width={650}
                    height={715}
                />
                <div id="highlights-container-content">
                    <section>
                        <div>
                            <CheckBadgeIcon
                                className="icon-highlight"
                                aria-hidden="true"
                            />
                            <div>
                                <h3>Crie sua conta rapidinho</h3>
                                <p>
                                    Pra fazer sua conta é rapidinho! Basta
                                    informar seu telefone, uma senha e pronto! O{" "}
                                    <strong>Caramelo®</strong> já tá pronto pra
                                    usar. Você pode completar seu perfil depois
                                    com mais dados, mas é opcional!
                                </p>
                            </div>
                        </div>
                        <div>
                            <BuildingStorefrontIcon
                                className="icon-highlight"
                                aria-hidden="true"
                            />
                            <div>
                                <h3>Onde aceita?</h3>
                                <p>
                                    Use a localização do celular para buscar por
                                    lugares próximos de você. Você também pode
                                    filtrar por segmentos e ver lugares que são
                                    pertos uns dos outros. Assim, você aproveita
                                    mais!
                                </p>
                            </div>
                        </div>
                        <div>
                            <QrCodeIcon
                                className="icon-highlight"
                                aria-hidden="true"
                            />
                            <div>
                                <h3>Como eu uso?</h3>
                                <p>
                                    Você pode escanear o QR Code que contém o
                                    código do estabelecimento, e aí, é com eles!
                                    Eles liberam seu selo informando o que você
                                    comprou, e o selo cai na hora!
                                </p>
                            </div>
                        </div>
                        <div>
                            <SparklesIcon
                                className="icon-highlight"
                                aria-hidden="true"
                            />
                            <div>
                                <h3>E quando eu completar meu cartão?</h3>
                                <p>
                                    Só entrar em contato novamente com o
                                    estabelecimento responsável pelos selos e
                                    solicitar seu benefício! Eles vão dar baixa
                                    nos selos utilizados, e você pode continuar
                                    utilizando!
                                </p>
                            </div>
                        </div>
                    </section>
                    <CustomButton href="/">
                        Baixe o app agora - gratuito
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default ForYouSection;
