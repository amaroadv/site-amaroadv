import { readFileSync } from "node:fs";

export default function () {
  const dados = JSON.parse(readFileSync(new URL("./areas.json", import.meta.url)));
  return dados.grupos.flatMap((g) => g.itens.map((i) => ({ ...i, grupo: g.nome })));
}
