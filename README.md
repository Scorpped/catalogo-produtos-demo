# Forma — Catálogo de produtos

**Projeto de demonstração · React · JavaScript · Node.js**

Catálogo responsivo de uma marca fictícia de objetos para casa e escritório. Criado do zero para demonstrar organização de componentes, estado de interface, filtros combinados e cálculo de uma sacola simulada.

> Todos os produtos, textos, preços e a marca são fictícios. Não há checkout, pagamentos, estoque real ou dados de clientes. Este exemplo não é uma versão de um projeto privado.

## Executar

Requisito: Node.js 20 ou superior.

```sh
npm start
```

Abra **http://127.0.0.1:3000**. Não há instalação de dependências npm. O navegador carrega React 18.3.1 e React DOM pelo esm.sh, por isso o primeiro carregamento requer internet. A porta pode ser alterada com a variável `PORT`.

## Funcionalidades

- Busca por nome ou descrição, ignorando acentos.
- Categoria e busca combinadas; ordenação por nome ou preço.
- Sacola com quantidades, remoção e total em centavos.
- Estado vazio, controles identificados e layout para celular.
- Ilustrações feitas com CSS e símbolos, sem imagens externas.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `catalog.mjs` | Dados sintéticos e regras de busca/total |
| `app.mjs` | Componentes e estado React |
| `style.css` | Identidade visual e layout responsivo |
| `server.mjs` | Servidor local com rotas de arquivos permitidas |
| `test.mjs` | Testes das regras de catálogo |

## Testes

```sh
npm test
```

Cobrem busca sem acentos, combinação de filtros, ordenação sem mutação e cálculo monetário. Para conferência manual: buscar “luminaria”, adicionar duas unidades, abrir a sacola e remover uma.

## Decisões e limites

Dados imutáveis separados da interface; preços inteiros em centavos. A sacola fica em memória e é apagada ao recarregar. O servidor escuta apenas em `127.0.0.1`. Não há autenticação, API de pedidos ou persistência: o objetivo é demonstrar uma interface de catálogo, não uma loja pronta para produção.

Desenvolvido como demonstração para o portfólio de [Nycolas França](https://github.com/Scorpped).
