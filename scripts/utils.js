const Web3 = require('web3');

const web3 = new Web3();

const cargos = [
  "Presidente",
  "Diretor de Business",
  "Diretor de Finance",
  "Diretor de Tech",
  "Diretor de Conteúdos",
  "Analista de Business",
  "Analista de Finance",
  "Analista de Tech",
  "Analista de Business/Finance",
  "Analista de Business/Tech",
  "Analista de Finance/Tech",
  "Analista de Business/Finance/Tech",
]

function checkNFTInformations(object) {
  return web3.utils.isAddress(object.wallet) && cargos.includes(object.cargo);
}
