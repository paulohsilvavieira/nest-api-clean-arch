/* eslint-disable @typescript-eslint/no-var-requires */
const { appendFileSync } = require('fs');
const args = process.argv.slice(2);

const nameFile = args[0].replace('--name=', '');
const moduleName = args[1].replace('--moduleName=', '');

const exportFileName = "export * from './" + nameFile + "';";

appendFileSync(
  `./src/${moduleName}/infra/database/entities/index.ts`,
  exportFileName + '\n',
  'utf-8',
);
console.log('\n');
console.log(
  '\x1b[32mFile \x1b[34m./src/infra/database/entities/index.ts \x1b[32mhas been updated successfully!',
);
