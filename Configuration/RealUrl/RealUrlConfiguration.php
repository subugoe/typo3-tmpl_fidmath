<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT'] = [
    'init' => [
        'appendMissingSlash' => 'ifNotFile',
        'postVarSet_failureMode' => 'redirect_goodUpperDir',
        'emptyUrlReturnValue' => true,
        'respectSimulateStaticURLs' => 1,
        'enableCHashCache' => 1,
        'enableUrlDecodeCache' => 0,
        'enableUrlEncodeCache' => 0,
    ],
    'preVars' => [
        [
            'GETvar' => 'L',
            'valueMap' => [
                'en' => '1',
            ],
            'valueDefault' => 'de',
            'noMatch' => 'bypass',
        ],
        [
            'GETvar' => 'no_cache',
            'valueMap' => [
                'no_cache' => 1,
            ],
            'noMatch' => 'bypass',
        ],
    ],
    'pagePath' => [
        'type' => 'user',
        'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
        'spaceCharacter' => '-',
        'segTitleFieldList' => 'tx_realurl_pathsegment,nav_title,title',
        'languageGetVar' => 'L',
        'expireDays' => 3,
        'rootpage_id' => '1',
    ],
    'fixedPostVars' => [
        'newsDetailConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[news]',
                'lookUpTable' => [
                    'table' => 'tx_news_domain_model_news',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => [
                        'strtolower' => 1,
                        'spaceCharacter' => '-',
                    ],
                    'languageGetVar' => 'L',
                    'languageExceptionUids' => '',
                    'languageField' => 'sys_language_uid',
                    'transOrigPointerField' => 'l10n_parent',
                    'autoUpdate' => 1,
                    'expireDays' => 180,
                ],
            ],
        ],
        'newsCategoryConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
                'lookUpTable' => [
                    'table' => 'tx_news_domain_model_category',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => [
                        'strtolower' => 1,
                        'spaceCharacter' => '-',
                    ],
                ],
            ],
        ],
        'newsTagConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[overwriteDemand][tags]',
                'lookUpTable' => [
                    'table' => 'tx_news_domain_model_tag',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => [
                        'strtolower' => 1,
                        'spaceCharacter' => '-',
                    ],
                ],
            ],
        ],
        '46' => 'newsDetailConfiguration',
    ],
    'postVarSets' => [
        '_DEFAULT' => [
            'controller' => [
                [
                    'GETvar' => 'tx_news_pi1[action]',
                    'noMatch' => 'bypass',
                ],
                [
                    'GETvar' => 'tx_news_pi1[controller]',
                    'noMatch' => 'bypass',
                ],
            ],
            'dateFilter' => [
                [
                    'GETvar' => 'tx_news_pi1[overwriteDemand][year]',
                ],
                [
                    'GETvar' => 'tx_news_pi1[overwriteDemand][month]',
                ],
            ],
            'page' => [
                [
                    'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
                ],
            ],
        ],
    ],
];
