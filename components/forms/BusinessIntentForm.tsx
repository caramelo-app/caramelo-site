"use client";

import React, { FormEvent, useMemo } from "react";

const BusinessIntentForm: React.FC = () => {
    const mailto = useMemo(() => "maykel@appcaramelo.com.br", []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const entries: Array<[string, string]> = [];
        formData.forEach((value, key) => entries.push([key, String(value)]));
        const lines = entries.map(([key, value]) => `${key}: ${value}`);
        const subject = encodeURIComponent("Quero o Caramelo no meu estabelecimento");
        const body = encodeURIComponent(lines.join("\n"));
        window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="nome">Seu nome</label>
                <input id="nome" name="Nome" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="Email" type="email" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="telefone">Telefone/WhatsApp</label>
                <input id="telefone" name="Telefone" className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="empresa">Nome do estabelecimento</label>
                <input id="empresa" name="Estabelecimento" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="segmento">Segmento (ex.: cafeteria, barbearia, petshop...)</label>
                <input id="segmento" name="Segmento" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" name="Cidade" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="estado">Estado</label>
                <input id="estado" name="Estado" required className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="unidades">Número de unidades</label>
                <input id="unidades" name="Unidades" type="number" min={1} defaultValue={1} className="border rounded-lg px-4 py-3" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="mensagem">Conte um pouco sobre o seu negócio</label>
                <textarea id="mensagem" name="Mensagem" rows={5} className="border rounded-lg px-4 py-3" />
            </div>

            <div className="md:col-span-2 flex items-center gap-4 pt-2">
                <button type="submit" className="bg-black text-white px-6 py-3 rounded-full font-bold">
                    Enviar intenção
                </button>
                <a
                    href={`mailto:${mailto}`}
                    className="underline"
                    aria-label="Enviar e-mail para a equipe do Caramelo"
                >
                    Prefere falar por e-mail? {mailto}
                </a>
            </div>
        </form>
    );
};

export default BusinessIntentForm;


