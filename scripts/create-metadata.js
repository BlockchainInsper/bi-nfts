const fs = require('fs')
const path = require('path');
const Web3 = require('web3');
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK('', '');

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

const semestre = "2021.2"
const dataPath = `./scripts/${semestre}`;

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  external_url: "",
  attributes: [
    {
      trait_type: "Cargo",
      value: ""
    }
  ]
}

function checkNFTInformations(object) {
  return web3.utils.isAddress(object.wallet) && cargos.includes(object.cargo);
}

module.exports = async callback => {
  const imagesPath = path.join(dataPath, "images")
  const files = await fs.promises.readdir(imagesPath);
  const data = JSON.parse(fs.readFileSync(path.join(dataPath, "data.json"), 'utf8'));

  for await (const fileName of files) {

    let readableStreamForFile = fs.createReadStream(path.join(imagesPath, fileName));
    let fileNumber = fileName.replace(/\.[^/.]+$/, "")

    if (!checkNFTInformations(data[fileNumber])) {
      console.log(`Error in ${fileNumber}. Skipping...`)
      break
    }

    let result = await pinata.pinFileToIPFS(readableStreamForFile)

    let metadata = metadataTemplate

    metadata['name'] = data[fileNumber].nome
    metadata['external_url'] = data[fileNumber].linkedin
    metadata['attributes'][0]["value"] = data[fileNumber].cargo
    metadata['image'] = `https://ipfs.io/ipfs/${result["IpfsHash"]}`

    let localFilename = `metadata/${semestre}/${fileNumber}`

    fs.writeFileSync(localFilename + '.json', JSON.stringify(metadata))
  }
}
