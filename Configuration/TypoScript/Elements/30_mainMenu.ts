# mainmenu content object:
temp.mainmenu = HMENU
temp.mainmenu.stdWrap.wrap = <ul id="menuMain"> | </ul>

#first level menu
temp.mainmenu.1 = TMENU
temp.mainmenu.1 {
        noBlur = 1
        
        NO = 1
        NO.wrapItemAndSub = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
        NO.stdWrap.wrap = <span class="menuPraefix">&rsaquo;</span>&nbsp;|

        ACT = 1
        ACT.wrapItemAndSub = <li class="first current">|</li>|*|<li class="current">|</li>|*|<li class="last current">|</li>
        ACT.stdWrap.wrap = <span class="menuPraefix">&rsaquo;</span>&nbsp;|

        CUR = 1
        CUR.wrapItemAndSub = <li class="first current"><a>|</a></li>|*|<li class="current"><a>|</a></li>|*|<li class="current last"><a>|</a></li>
        CUR.stdWrap.wrap = <span class="menuPraefix">&rsaquo;</span>&nbsp;|
        CUR.doNotLinkIt = 1

        SPC = 1 // Das ist der Trenner
        SPC {
            allWrap = <li class="trenner">&nbsp;</li>
            doNotShowLink = 1
            // Den Titel der Seite ausblenden...
        }
}