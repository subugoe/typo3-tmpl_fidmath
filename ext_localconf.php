<?php

defined('TYPO3_MODE') or die();

$boot = function ($extKey) {
    $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['nkwgok']['gokTreeJavaScript'][] = 'Subugoe\\TmplFidmath\\Hooks\\Gok->javascript';
};

$boot('tmpl_fidmath');

unset($boot);
