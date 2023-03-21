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
                

            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}