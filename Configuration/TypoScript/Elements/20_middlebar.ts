###create middlebar

temp.middlebar = COA
temp.middlebar.stdWrap.wrap = <div id="mittelLeiste"> | </div>
temp.middlebar.5 = TEXT
temp.middlebar.5 {
  stdWrap.wrap = <span class="SieSindHier"> | </span>
  value = {$breadcrumbTextDE.value}
  lang.de = {$breadcrumbTextDE.value}
  lang.en = {$breadcrumbTextEN.value}

  }


###add breadcrumbs
temp.middlebar.10 = HMENU
temp.middlebar.10 {
        wrap= <ul id="breadcrumb">|</ul>
        special = rootline
        spacial.range = 0/-1
        1 = TMENU
        1 {

        NO.linkWrap = |*| <li> |&nbsp;&gt; </li> |*| |

        CUR = 1
        CUR.linkWrap =  <li> &nbsp;| </li>
        CUR.doNotLinkIt = 1

        }

}