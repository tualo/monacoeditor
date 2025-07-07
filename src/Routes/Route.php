<?php

namespace Tualo\Office\MonacoEditor\Routes;

use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\RouteSecurityHelper;
use Tualo\Office\Basic\Route as R;
use Tualo\Office\Basic\IRoute;


class Route implements IRoute
{
    public static function register()
    {


        R::add('/monacoeditorlib/(?P<file>[a-zA-Z0-9\-_\/\.]+)', function ($matches) {
            /*RouteSecurityHelper::serveSecureStaticFile(
                $matches['file'],
                dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'lib',
                ['js', 'css', 'html', 'svg', 'png', 'woff2', 'woff', 'ttf', 'json', 'map'],
                [
                    'application/javascript',
                    'application/json',
                    'text/css',
                    'text/html',
                    'image/svg+xml',
                    'image/png',
                    'font/woff2',
                    'font/woff',
                    'font/ttf'
                ]
            );
            */
            $allowedExtensions = ['js', 'css', 'map', 'ttf', 'woff', 'woff2'];
            $file = $matches['file'];
            if (
                strpos($file, '..') !== false ||
                strpos($file, './') !== false ||
                strpos($file, '\\') !== false
            ) {
                http_response_code(404);
                return;
            }

            $basePath = realpath(dirname(__DIR__, 2) . '/lib/v0.52.2');
            $fullPath = $basePath . '/' . $file;
            if (file_exists($fullPath)) {
                $path_parts = pathinfo($fullPath);
                if (in_array($path_parts['extension'], $allowedExtensions)) {
                    if ($path_parts['extension'] == 'ttf') TualoApplication::contenttype('font/ttf');
                    if ($path_parts['extension'] == 'woff') TualoApplication::contenttype('font/woff');
                    if ($path_parts['extension'] == 'woff2') TualoApplication::contenttype('font/woff2');
                    if ($path_parts['extension'] == 'js')   TualoApplication::contenttype('application/javascript');
                    if ($path_parts['extension'] == 'css')   TualoApplication::contenttype('text/css');
                    if ($path_parts['extension'] == 'map')   TualoApplication::contenttype('application/json');
                    http_response_code(200);
                    TualoApplication::etagFile($fullPath);
                } else {
                    http_response_code(404);
                    echo "Unsupported file type: " . $path_parts['extension'];
                    TualoApplication::body("Unsupported file type: " . $path_parts['extension']);
                }
            } else {
                http_response_code(404);
                echo "File not found: " . $fullPath;
                TualoApplication::body("File not found: " . $fullPath);
            }
        }, ['get'], false);
    }
}
