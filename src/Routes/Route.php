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
            RouteSecurityHelper::serveSecureStaticFile(
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
        }, ['get'], false);
    }
}
