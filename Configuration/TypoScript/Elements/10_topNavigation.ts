# TOPNAV:
temp.topNavigation = COA
[globalVar = GP:L = 1]
temp.topNavigation.stdWrap.wrap = <ul id="menuService">|</ul>
[else]
temp.topNavigation.stdWrap.wrap = <ul id="menuService">|</ul>
[global]
#temp.topNavigation.stdWrap.wrap = <ul id="menuService"><li><a href="recherche/erweiterte-suche/"><img src="typo3conf/ext/metasuchexml/res/search.png" alt="Lupe" title="Gesamtsuche" /></a></li> | </ul>


temp.topNavigation.10 = HMENU


temp.topNavigation.10 {
        special = list
        special.value = {$temp.topNavigation.10.special.value}

        includeNotInMenu = 1
        1 = TMENU
        1.NO {
                linkWrap = <li> | </li>

                #ATagTitle.field = subtitle
        }
       1.CUR = 1
        1.CUR {
                linkWrap = <li> | </li>
                ATagParams = class = "act"
       }

}
temp.topNavigation.20 = HMENU

temp.topNavigation.20.stdWrap.wrap = <li class="langMenu"> | </li>

temp.topNavigation.20 {
                special = language
                special.value = 0,1


                wrap =
                1 = GMENU
                1.disableAltText = 1
                1.NO {
                  backColor = transparent
                  XY = [10.w],[10.h]
                  altImgResource.disableAltText = 1
                  altImgResource = fileadmin/images/flag_de.gif || uploads/tf/flag_en_01.gif
                  linkWrap = <li> | </li>
                  noLink = 1
                  allStdWrap.typolink {


                            parameter.data = page:uid
                            additionalParams = &L=0 || &L=1
                            addQueryString = 1
                            addQueryString.exclude = id
                            addQueryString.method = GET
                    }

                  }

}


[globalVar = GP:L = 1]
  temp.topNavigation.20.1.NO.imgParams = alt="German Version" title="German Version" || alt="English Version" title="English Version"

[else]
  temp.topNavigation.20.1.NO.imgParams = alt="Deutsche Version" title="Deutsche Version" || alt="Englische Version" title="Englische Version"
[global]


