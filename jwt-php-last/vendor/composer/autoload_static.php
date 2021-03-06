<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit18b88ce200cd6f1d5391a3a07a2562f5
{
    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Lcobucci\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Lcobucci\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/lcobucci/jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit18b88ce200cd6f1d5391a3a07a2562f5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit18b88ce200cd6f1d5391a3a07a2562f5::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
