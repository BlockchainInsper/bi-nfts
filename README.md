# Projeto NFT🚀

## Sobre o projeto 📈

A ideia principal por trás deste projeto é a criação de um contrato ERC-721 (NFTs) no qual poderam ser gerados tokens não-fungíveis, que representarão cada um dos membros participantes da entidade e seus respectivos cargos no semestre. Após a criação dos tokens, cada membro deverá receber seu respectivo NFT e, com a posse dele, poderá fazer o que desejar.

Alguns use-cases que pensei para este projeto, são:
  - Registro dos membros participantes e de seus respectivos cargos
  - Divulgação dos membros atuais e passados no site da Blockchain Insper (que aliás precisamos reformulá-lo nas férias!!)
  - Utilizar como marketing para entidade (Quem entrar na BI, vai receber um NFT...)
 
## Como baixar e instalar 💻 
1. Instalar Node.js, NPM, Truffle e Ganache
2. Abrir o Ganache Desktop ou ganache-cli
3. Clonar o Repositório
4. Na pasta criada executar os seguintes comandos
5. npm install
6. truffle migrate (para dar deploy) ou truffle test (para rodar os testes)

## Guidelines 🥶

### Alinhamentos gerais 🟣
- Rede onde serão publicados os NFTs: **Polygon**
- Será utilizada a plataforma do **OpenSea** para visualizar o contrato e os NFTs
- As imagens deverão ser publicadas no **IPFS** (Pinata ou Infura)
- O contrato deve seguir os padrões estabelecidos pelo **OpenZeppelin**
- Compilador e ferramenta de desenvolvimento: **Truffle e Ganache**

### Divisão de tarefas 📅
Teremos 7 semanas para começar e terminar o projeto antes do final do semestre. Dividi as tarefas pensando em finalizar o projeto em 6 semanas, para termos uma folga caso algo dê errado.

#### **Semana 25/10** ✅
- Curso de programação em Solidity (CryptoZombies)
- Pesquisa sobre criação de NFTs e como funcionam marketplaces (como o OpenSea)
- Como funciona a arquitetura de um contrato ERC-721
- Início do desenvolvimento do contrato (brincar e testar com o Remix)

Links Úteis:
- [CryptoZombies](https://cryptozombies.io/pt/course/)
- [🎟 NFT on 💜 Polygon + 🐳 Opensea](https://youtu.be/zgj8ZT4-9lk)
- [How to Build a Full Stack NFT Marketplace on Ethereum with Polygon and Next.js](https://youtu.be/GKJBEEXUha0)
- [Dicionário Solidity](https://solidity-by-example.org/)
- [Padrão ERC-721 OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/erc721)
- [Padrão IERC-721 OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721)
- [How to use Remix IDE](https://medium.com/moonbeam-network/using-the-remix-ide-to-deploy-a-solidity-smart-contract-to-moonbeam-35799261d971)
---

#### **Semana 1/11** ✅
- Download do Truffle, Ganache e Metamask
- Reimplementar o contrato com Truffle e Ganache
- Escrever testes para o contrato (apenas o dono do contrato pode criar NFTs!!)

Links Úteis:
- [Truffle e Ganache](https://www.trufflesuite.com/)
- [Truffle Docs](https://www.trufflesuite.com/docs/truffle/overview)
- [Metamask](https://metamask.io/)
---

#### **Semana 8/11** ✅
- Aprender sobre como funciona o IPFS e baixar o IPFS Desktop
- Fazer um mint de NFT no Ganache com uma URL de imagem que esteja hosteada no IPFS (pode ser no Pinata, Infura ou IPFS Desktop)
- Fazer o deploy do contrato para uma rede teste (pode ser Rinkeby, Kovan ou a própria Mubai da Polygon)

Links Úteis:
- [IPFS](https://ipfs.io/)
- [Deploying to Polygon with Truffle](https://docs.polygon.technology/docs/develop/truffle)
- [Mumbai Faucet](https://faucet.polygon.technology/)
- [Upload 10000 NFTs to IPFS](https://youtu.be/3jizwk6_m1s)
---

#### **Semana 15/11** ✅
- Aprender como funciona o padrão de metadados utilizado pelo OpenSea
- Fazer o deploy em uma rede teste e utilizá-lo dentro do OpenSea
- Começar o desenvolvimento da moldura dos NFTs (que servirá como base para todos eles)

Links Úteis:
- [OpenSea ERC-721 tutorial](https://docs.opensea.io/docs/getting-started)
- [OpenSea metadata standards](https://docs.opensea.io/docs/metadata-standards)
---

#### **Semana 22/11** ✅
- Pesquisar como criar uma Pixel Art (pode ser em Python ou alguma API)
- Criação das Pixel Arts para todos os membros da entidade 2021.2

Links Úteis:
- [Convert Photo into pixel art using Python](https://towardsdatascience.com/convert-photo-into-pixel-art-using-python-d0b9bd235797)
---

#### **Semana 29/11** ✅
- Deploy para a mainet da Polygon
- Distribuição dos NFTs para os membros da entidade
- Fazer posts no Insta, Linkedin, etc falando sobre o projeto
---

#### **Semana 6/12** ✅
- Encerramento do semestre
- Verificar disponibilidade da galera para refazer o site da BI nas férias
