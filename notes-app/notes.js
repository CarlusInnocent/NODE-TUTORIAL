import fs from 'fs';

fs.writeFileSync('notes.txt', 'My first line! \n')
fs.appendFileSync('notes.txt', 'This is my second line!')

export const myName = 'Carlus'