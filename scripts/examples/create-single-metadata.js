const fs = require('fs')

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
      value: ""
    },
  ]
}

module.exports = async callback => {
  let metadata = metadataTemplate

  let filename = 'metadata/v1/' + metadata['name'].toLowerCase().replace(/\s/g, '-')

  let data = JSON.stringify(metadata)

  fs.writeFileSync(filename + '.json', data)
}
