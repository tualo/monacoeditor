# How To build

´´´

git clone  https://github.com/microsoft/monaco-editor
cd monaco-editor 
npm install .
cd samples/browser-esm-webpack

´´´

Edit index.js

remove 

´´´
monaco.editor.create(document.getElementById('container'), {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript'
});
´´´

add `window.monaco = monaco;`



´´´

npm run build


´´´
