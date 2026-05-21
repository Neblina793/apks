# D&D 2024 - Criador de Fichas

App local para criar, salvar, visualizar e exportar fichas em PDF.

## Como abrir

Abra o arquivo `index.html` no navegador.

## O que já funciona

- Criar ficha com nome, jogador, nível, PV, CA e deslocamento.
- Escolher espécie, classe e antecedente por botões clicáveis.
- Ajustar atributos e ver modificadores.
- Marcar proficiencia em testes de resistencia.
- Marcar perícias: clique 1 vez para proficiência, 2 vezes para especialização, 3 vezes para limpar.
- Adicionar ataques, danos e acoes de combate.
- Controlar PV atuais/maximos/temporarios, inspiracao, exaustao, moedas, condicoes e recursos.
- Adicionar magias e habilidades à ficha.
- Adicionar conteúdo personalizado ao app.
- Importar conteúdo por JSON.
- Salvar fichas no navegador.
- Ver fichas salvas em uma lista expansível.
- Exportar a ficha aberta como PDF pelo diálogo de impressão do navegador.

## Sobre conteúdo oficial

O app vem com conteúdo-base resumido/demonstrativo. Ele não inclui textos completos de livros pagos. Para usar conteúdo oficial completo, importe apenas material que você tenha direito/licença para usar, como conteúdo aberto compatível ou material que você mesmo escreveu.

Formato de importação aceito:

```json
{
  "species": [{ "name": "Nome", "summary": "Resumo" }],
  "classes": [{ "name": "Nome", "summary": "Resumo", "hitDie": "d8" }],
  "backgrounds": [{ "name": "Nome", "summary": "Resumo" }],
  "spells": [{ "name": "Nome", "level": 1, "summary": "Resumo" }],
  "features": [{ "name": "Nome", "summary": "Resumo" }]
}
```
