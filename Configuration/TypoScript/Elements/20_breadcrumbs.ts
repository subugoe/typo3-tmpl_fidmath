###add breadcrumbs
lib.breadcrumbs = HMENU
lib.breadcrumbs {
	wrap = <ul class="breadcrumb-navigation">|</ul>
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
