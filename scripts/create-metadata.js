const fs = require('fs')
const path = require('path');
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK('', '');

const semestre = ""
const dataPath = `./scripts/${semestre}`;

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  external_url: "https://blockchainsper.com/",
  attributes: [
    {
      display_type: "date",
      trait_type: "birthday",
      value: 0
    },
    {
      trait_type: "Cargo",
      value: ""
    },
    {
      trait_type: "Semestre",
      value: semestre
    },
  ]
}


module.exports = async callback => {
  const imagesPath = path.join(dataPath, "images")
  const files = await fs.promises.readdir(imagesPath);
  const data = JSON.parse(fs.readFileSync(path.join(dataPath, "data.json"), 'utf8'));

  for await (const fileName of files) {

    let readableStreamForFile = fs.createReadStream(path.join(imagesPath, fileName));

    let result = await pinata.pinFileToIPFS(readableStreamForFile)

    let metadata = metadataTemplate
    let fileNumber = fileName.replace(/\.[^/.]+$/, "")

    metadata['name'] = data[fileNumber].nome
    metadata['attributes'][0]["value"] = data[fileNumber].aniversario
    metadata['attributes'][1]["value"] = data[fileNumber].cargo
    metadata['image'] = `https://ipfs.io/ipfs/${result["IpfsHash"]}`

    let localFilename = `metadata/${semestre}/` + metadata['name'].toLowerCase().replace(/\s/g, '-')

    fs.writeFileSync(localFilename + '.json', JSON.stringify(metadata))
  }
}
