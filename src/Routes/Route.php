<?php
namespace Tualo\Office\MonacoEditor\Routes;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\Route As R;
use Tualo\Office\Basic\IRoute;


class Route implements IRoute{
    public static function register(){

        
        R::add('/monacoeditorlib/(?P<file>[\/.\w\d\-]+)',function($matches){

   //         print_r($matches);
            if (file_exists(dirname(__DIR__,2).'/lib/'.$matches['file'].'')){
 $path_parts = pathinfo(dirname(__DIR__,2).'/lib/'.$matches['file'].'');
 /*print_r( $path_parts); echo "*";
 exit();
 */
 //                $path_parts = pathinfo( parse_url($matches, PHP_URL_PATH) ); // pathinfo(dirname(__DIR__,2).'/src/js/'.$matches['file'].'');
                if ($path_parts['extension']=='js')   TualoApplication::contenttype('application/javascript');
                if ($path_parts['extension']=='css')   TualoApplication::contenttype('text/css');
                TualoApplication::etagFile((dirname(__DIR__,2).'/lib/'.$matches['file'].''));
            }else{
                TualoApplication::body("// hm, something is wrong ".$matches['file']);
            }
        },array('get','post'),false);

        R::add('/monacoeditorjs/(?P<file>[\/.\w\d\-]+)(?P<remains>[.]+)',function($matches){
            if (file_exists(dirname(__DIR__,2).'/src/js/'.$matches['file'].'')){
                $path_parts = pathinfo(dirname(__DIR__,2).'/lib/'.$matches['file'].'');
       //         print_r( $path_parts);
     //           exit();
                // $path_parts = pathinfo( parse_url($matches, PHP_URL_PATH) ); // pathinfo(dirname(__DIR__,2).'/src/js/'.$matches['file'].'');
                if ($path_parts['extension']=='js')   TualoApplication::contenttype('application/javascript');
                if ($path_parts['extension']=='css')   TualoApplication::contenttype('text/css');
                TualoApplication::etagFile((dirname(__DIR__,2).'/src/js/'.$matches['file'].''));
            }else{
                TualoApplication::body("// hm, something is wrong ".$matches['file']);
            }
        },array('get','post'),false);


    }
}