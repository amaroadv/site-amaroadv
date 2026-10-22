import { readFileSync } from "node:fs";

const tituloSeo = {
  "civel": "Advocacia Cível",
  "familia-e-sucessoes": "Direito de Família e Sucessões",
  "consumidor": "Direito do Consumidor",
  "bancario": "Direito Bancário",
  "trabalhista": "Direito do Trabalho",
  "previdenciario": "Direito Previdenciário",
  "servidores-publicos": "Direito dos Servidores Públicos",
  "criminal": "Advocacia Criminal",
  "empresarial": "Direito Empresarial",
  "contratos": "Contratos Civis e Empresariais",
  "tributario": "Direito Tributário",
  "trabalhista-empresarial": "Direito do Trabalho para Empresas",
  "administrativo": "Direito Administrativo",
  "criminal-empresarial": "Direito Penal Empresarial",
};

export default function () {
  const dados = JSON.parse(readFileSync(new URL("./areas.json", import.meta.url)));
  return dados.grupos.flatMap((g) => g.itens.map((i) => ({ ...i, grupo: g.nome, tituloSeo: `${tituloSeo[i.slug] || i.area} em Bastos/SP` })));
}
