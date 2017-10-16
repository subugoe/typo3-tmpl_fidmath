<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

$boot = function (string $key) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'.$key.'/Configuration/PageTS/BackendLayouts.t3s">'
    );
};

$boot($_EXTKEY);
unset($boot);
