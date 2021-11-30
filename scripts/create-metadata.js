const fs = require('fs')
const path = require('path');
const { checkNFTInformations } = "./utils";
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK('', '');

const semestre = ""
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

    if (checkNFTInformations(data[fileNumber])) {
      console.log(`Error in ${fileNumber}. Skipping...`)
      break
    }

    let result = await pinata.pinFileToIPFS(readableStreamForFile)

    let metadata = metadataTemplate
    let fileNumber = fileName.replace(/\.[^/.]+$/, "")

    metadata['name'] = data[fileNumber].nome
    metadata['external_url'] = data[fileNumber].linkedin
    metadata['attributes'][0]["value"] = data[fileNumber].cargo
    metadata['image'] = `https://ipfs.io/ipfs/${result["IpfsHash"]}`

    let localFilename = `metadata/${semestre}/` + metadata['name'].toLowerCase().replace(/\s/g, '-')

    fs.writeFileSync(localFilename + '.json', JSON.stringify(metadata))
  }
}
