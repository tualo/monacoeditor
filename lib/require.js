/*
if (typeof require=='undefined') require={};
if (typeof require.paths=='undefined') require.paths={};
require['vs'] = './monacoeditorlib/min/vs/';
*/
//var require = { paths: { 'vs': 'monacoeditorlib/min/vs/' } };


window['require'].config({ paths: { 'vs': './monacoeditorlib/min/vs' } })
window['require'](['vs/editor/editor.main'], function () {
    const monaco = window.monaco || require('monaco-editor'); // for IntelliSense
    /*
    var editor = monaco.editor.create(document.querySelector('.editor-container'), {
        language: "javascript",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: "vs",
        fontSize: 20,
    });
    */
});


