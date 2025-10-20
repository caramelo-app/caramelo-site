import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Em breve | Status do lançamento | Caramelo®",
    description:
        "Acompanhe o status do lançamento do Caramelo®: site, canais de suporte, app build, deploy iOS e Android.",
    alternates: { canonical: "/em-breve" },
};

const items: Array<{ name: string; status: "ok" | "pending" }> = [
    { name: "Site", status: "ok" },
    { name: "Canais de suporte", status: "ok" },
    { name: "App build", status: "ok" },
    { name: "Deploy iOS", status: "pending" },
    { name: "Deploy Android", status: "pending" },
];

function StatusBadge({ status }: { status: "ok" | "pending" }) {
    const label = status === "ok" ? "Operacional" : "Em progresso";
    const color = status === "ok" ? "bg-green-500" : "bg-yellow-400";
    return (
        <span className={`text-xs font-bold text-white rounded-full px-2 py-1 ${color}`}>
            {label}
        </span>
    );
}

const Page: React.FC = () => {
    return (
        <main className="page">
            <h1>Status do lançamento</h1>
            <p>
                Aqui você acompanha a evolução do nosso lançamento. Atualizamos esta página sempre que há mudanças relevantes. O app está em fase final de liberação, portanto ainda não está disponível para download nas plataformas.
            </p>

            <div className="card">
                <div className="bg-green-100 text-green-800 card-header">
                    Todos os sistemas principais operacionais
                </div>
                <ul className="divide-y">
                    {items.map((item) => (
                        <li key={item.name} className="flex items-center justify-between px-4 py-4">
                            <span>{item.name}</span>
                            <StatusBadge status={item.status} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Page;


