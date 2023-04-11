'use strict';
import fs from 'fs';

const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
     ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}

const pascalName = process.argv[2];
const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);
const kebebName = kebabize(pascalName);

const tsxTemplate = 
`import React from 'react'

import styles from './${ kebebName }.module.scss'

interface ${ pascalName }Props {

};

export const ${ pascalName } = ({}: ${ pascalName }Props) => {
  return (
    <div className={ styles.${ camelName } }>
      <mark>${ pascalName }</mark>
    </div>
  );
}
`;

const scssTemplate = 
`.${ kebebName } {
  border: 1px dashed hotpink;
}
`;

fs.mkdirSync(`./${ pascalName }`, { recursive: true })
fs.mkdirSync(`./${ pascalName }/assets`, { recursive: true })

fs.writeFileSync(`./${ pascalName }/${ pascalName }.tsx`, tsxTemplate);
fs.writeFileSync(`./${ pascalName }/${ kebebName }.module.scss`, scssTemplate);