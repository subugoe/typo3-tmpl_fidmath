# mainmenu content object:
lib.mainmenu = HMENU

#first level menu
lib.mainmenu {
	1 = TMENU
	1 {
		wrap = <ul>|</ul>
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

		SPC = 1
		SPC {
			allWrap = <li class="trenner">&nbsp;</li>
			doNotShowLink = 1
		}
	}
}
