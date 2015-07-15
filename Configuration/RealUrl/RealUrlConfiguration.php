<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT'] = array(
	'init' => array(
		'appendMissingSlash' => 'ifNotFile',
		'postVarSet_failureMode' => 'redirect_goodUpperDir',
		'emptyUrlReturnValue' => TRUE,
		'respectSimulateStaticURLs' => 1,
		'enableCHashCache' => 1,
		'enableUrlDecodeCache' => 0,
		'enableUrlEncodeCache' => 0,
	),
	'preVars' => array(
		array(
			'GETvar' => 'L',
			'valueMap' => array(
				'en' => '1',
			),
			'valueDefault' => 'de',
			'noMatch' => 'bypass',
		),
		array(
			'GETvar' => 'no_cache',
			'valueMap' => array(
				'no_cache' => 1,
			),
			'noMatch' => 'bypass'
		),
	),
	'pagePath' => array(
		'type' => 'user',
		'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
		'spaceCharacter' => '-',
		'segTitleFieldList' => 'tx_realurl_pathsegment,nav_title,title',
		'languageGetVar' => 'L',
		'expireDays' => 3,
		'rootpage_id' => '1',
	),
	'fixedPostVars' => array(
		'newsDetailConfiguration' => array(
			array(
				'GETvar' => 'tx_news_pi1[news]',
				'lookUpTable' => array(
					'table' => 'tx_news_domain_model_news',
					'id_field' => 'uid',
					'alias_field' => 'title',
					'addWhereClause' => ' AND NOT deleted',
					'useUniqueCache' => 1,
					'useUniqueCache_conf' => array(
						'strtolower' => 1,
						'spaceCharacter' => '-'
					),
					'languageGetVar' => 'L',
					'languageExceptionUids' => '',
					'languageField' => 'sys_language_uid',
					'transOrigPointerField' => 'l10n_parent',
					'autoUpdate' => 1,
					'expireDays' => 180,
				)
			)
		),
		'newsCategoryConfiguration' => array(
			array(
				'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
				'lookUpTable' => array(
					'table' => 'tx_news_domain_model_category',
					'id_field' => 'uid',
					'alias_field' => 'title',
					'addWhereClause' => ' AND NOT deleted',
					'useUniqueCache' => 1,
					'useUniqueCache_conf' => array(
						'strtolower' => 1,
						'spaceCharacter' => '-'
					)
				)
			)
		),
		'newsTagConfiguration' => array(
			array(
				'GETvar' => 'tx_news_pi1[overwriteDemand][tags]',
					'lookUpTable' => array(
					'table' => 'tx_news_domain_model_tag',
					'id_field' => 'uid',
					'alias_field' => 'title',
					'addWhereClause' => ' AND NOT deleted',
					'useUniqueCache' => 1,
					'useUniqueCache_conf' => array(
						'strtolower' => 1,
						'spaceCharacter' => '-'
					)
				)
			)
		),
		'46' => 'newsDetailConfiguration',
	),
	'postVarSets' => array(
		'_DEFAULT' => array(
			'controller' => array(
				array(
					'GETvar' => 'tx_news_pi1[action]',
					'noMatch' => 'bypass'
				),
				array(
					'GETvar' => 'tx_news_pi1[controller]',
					'noMatch' => 'bypass'
				)
			),
			'dateFilter' => array(
				array(
					'GETvar' => 'tx_news_pi1[overwriteDemand][year]',
				),
				array(
					'GETvar' => 'tx_news_pi1[overwriteDemand][month]',
				),
			),
			'page' => array(
				array(
					'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
				),
			),
		),
	),
);
?>
