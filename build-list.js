const fs = require('fs')

async function getListFromDir() {
  let files = fs.readdirSync(__dirname + '/tips')
  const internalMarkdown = ['README.md']

  return files.filter(fileName => /\d*\.md/gi.test(fileName) && internalMarkdown.indexOf(fileName) === -1)
  // TODO: sort by create time
}

async function writeListToMarkdown(list) {
  let str = '# Tips\n\n'

  list.forEach((fileName, index) => {
    str += `- [${index+1}-${fileName}](./${fileName})\n`
  })

  fs.writeFileSync('./README.md', str)
}

async function main() {
  const list = await getListFromDir()
  writeListToMarkdown(list)
}

main()
