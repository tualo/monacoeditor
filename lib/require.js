/*
if (typeof require=='undefined') require={};
if (typeof require.paths=='undefined') require.paths={};
require['vs'] = './monacoeditorlib/min/vs/';
*/
//var require = { paths: { 'vs': 'monacoeditorlib/min/vs/' } };
require.config({ paths: { vs: './monacoeditorlib/min/vs' } });


window.MonacoEnvironment = { 
    globalAPI: true, baseUrl: '/server/monacoeditorlib',
    getWorkerUrl: function (moduleId, label) {
        console.log("getWorkerUrl",arguments)
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
    }
}


var scriptLoadingPolicy = {
    createScriptURL: function allowOnlyMonacoPaths(url) {
        console.log('allowOnlyMonacoPaths',url);
        if (
            url.indexOf('./monacoeditorlib/min/vs') === 0 /*&&
            url.lastIndexOf('..') == 0*/
        ) {
            return url;
        }
    }
};
// If browser supports Trusted Types, use them.
if (typeof trustedTypes !== 'undefined') {
    scriptLoadingPolicy = trustedTypes.createPolicy('monaco-editor', scriptLoadingPolicy);
}
require.config({
    paths: { vs: '../node_modules/monaco-editor/min/vs' },
    trustedTypesPolicy: scriptLoadingPolicy
});

window['require'].config({ 
    paths: { 'vs': './monacoeditorlib/min/vs' },
    trustedTypesPolicy: scriptLoadingPolicy 
})
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

