let text = `
import { ElDescriptionsItem } from './descriptions-item'
import { ElResult } from './result'


export class Alert extends ElAlert {}
`

const index = text.indexOf('export') - 1;
const importString = `import { Test } from './hhhh}'`;

text = text.slice(0, index) + importString + '\n' + text.slice(index);

console.log(text);