plugin.tx_news._LOCAL_LANG {
    default {
        more-link = more
        back-link = Back to: News
    }

    de {
        more-link = mehr
        back-link = Zurück zu: Neues
    }
}

[globalVar = TSFE:type = 100]
    config {
        disableAllHeaderCode = 1
        xhtml_cleaning = none
        admPanel = 0
        metaCharset = utf-8
        additionalHeaders = Content-Type:application/xml;charset=utf-8
        disablePrefixComment = 1
        debug = 0
    }

    pageNewsRSS = PAGE
    pageNewsRSS {
        typeNum = 100
        10 < tt_content.list.20.news_pi1
        10 {
            switchableControllerActions {
                News {
                    1 = list
                }
            }

            settings < plugin.tx_news.settings
            settings {
                limit = 30
                detailPid = 46
                startingpoint = 38
                format = atom
            }
        }
    }
[global]
