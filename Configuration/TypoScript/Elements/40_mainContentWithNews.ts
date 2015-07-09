### main content for homepage with news box

temp.mainContentWithNews = COA
temp.mainContentWithNews {
  10 = TEXT
  10 {
        field = subtitle
        stdWrap.wrap = <h1 class="welcome"> | </h1>
  }

  20 = COA
  20 {
  stdWrap.wrap = <div id="cLeft"> | </div>
  10 < temp.mainmenu
  20 < styles.content.get
  20.stdWrap.wrap = <div id="cSearch"> | </div>
  }

}