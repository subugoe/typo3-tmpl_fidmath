# TOPNAV:
lib.topNavigation = COA

lib.topNavigation.10 = HMENU
lib.topNavigation.10 {
	special = list
	special.value = {$temp.topNavigation.10.special.value}

	includeNotInMenu = 1
	1 = TMENU
	1.NO {
		linkWrap = <li> | </li>
	}

	1.CUR = 1
	1.CUR {
		linkWrap = <li> | </li>
		ATagParams = class = "act"
	}
}
