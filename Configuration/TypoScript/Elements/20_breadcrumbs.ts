###add breadcrumbs
lib.breadcrumbs = HMENU
lib.breadcrumbs {
	wrap = <ul class="breadcrumb-navigation">|</ul>
	special = rootline
	spacial.range = 0/-1
	1 = TMENU
	1 {
		NO.linkWrap = |*| <li> |&nbsp;&gt; </li> |*| |

		CUR = 1
		CUR.linkWrap = <li> &nbsp;| </li>
		CUR.doNotLinkIt = 1
	}
}
