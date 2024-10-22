<?php

namespace Tualo\Office\MonacoEditor\Middlewares;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware{
    public static function register(){
        TualoApplication::use('monacoeditor',function(){
            try{

                TualoApplication::javascript('monacoeditor_loader', './monacoeditorlib/min/vs/loader.js',[],-10000);
                TualoApplication::javascript('monacoeditor_require', './monacoeditorlib/require.js',[],-500);

                // TualoApplication::module('monacoeditor_loader','./monacoeditorlib/esm/metadata.js',[],-10000);

                
                //TualoApplication::stylesheet( './monacoeditorlib/min/vs/editor/editor.main.css',10000);
                //TualoApplication::javascript('monacoeditor_loader', './monacoeditorlib/compiled.js',[],10000);
                

                //TualoApplication::javascript('monacoeditor_editor', './monacoeditorjs/CodeEditor.js',[],500);
                
                /*
                TualoApplication::javascript('monacoeditor_require', './monacoeditorlib/require.js',[],10000-9);
                TualoApplication::javascript('monacoeditor_main', './monacoeditorlib/min/vs/editor/editor.main.js',[],10001);
                TualoApplication::javascript('monacoeditor_main_de', './monacoeditorlib/min/vs/editor/editor.main.nls.de.js',[],10002);
                */
            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}