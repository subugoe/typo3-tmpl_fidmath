lib.breadcrumbs = COA
lib.breadcrumbs {
    wrap = <ul class="breadcrumb-navigation">|</ul>

    10 = HMENU
    10 {
        special = rootline
        spacial.range = 0/-1
        1 = TMENU
        1 {
            NO {
                linkWrap = <li class="breadcrumb-navigation_element">|</li>
                ATagParams = class="breadcrumb-navigation_link"
            }

            CUR = 1
            CUR {
                linkWrap = <li class="breadcrumb-navigation_element">|</li>
                doNotLinkIt = 1
                ATagParams = class="breadcrumb-navigation_link"
            }
        }
    }

    20 = RECORDS
    20 {
        stdWrap.if.isTrue.data = GP:tx_news_pi1|news
        stdWrap.required = 1

        lib.breadcrumbs.10.special.range = 0|-2

        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
            field = title
            htmlSpecialChars = 1
        }

        stdWrap.wrap = <li class="breadcrumb-navigation_element">|</li>
        ATagParams = class="breadcrumb-navigation_link"
    }
}
