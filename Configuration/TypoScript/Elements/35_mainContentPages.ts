## mainContentPages object for all pages
## offers "search" page type for iport search pages and
## "normal" page type for all other pages

temp.searchContent = COA
temp.searchContent.10 < styles.content.get

temp.styledContent = CASE
temp.styledContent {
	key.field = layout
	default < temp.searchContent
	0 < .default
	0.stdWrap.wrap = <div id="cInhalt"><div id="cText"> | </div></div>
	1 < .default
}

lib.mainContentPages = COA
lib.mainContentPages {
	10 = TEXT
	10 {
		data = page:subtitle
		wrap = <h1 class="headline-first_standard">|</h1>
	}

	20 < temp.mainmenu
	30 < temp.styledContent
}
