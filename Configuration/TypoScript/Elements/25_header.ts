### Logo + dynamic picture right on the top

temp.logo = TEXT

temp.logo.stdWrap.wrap = <div id="logo"> | </div>
[globalVar = TSFE:id =1]
temp.logo {
  value =<img alt="Vifamath Logo" title="{$logoTitleDE.value}" src="{$logoImgFile.value}"/>
  lang.de = <img alt="Vifamath Logo" title="{$logoTitleDE.value}" src="{$logoImgFile.value}"/>
  lang.en = <img alt="Vifamath Logo" title="{$logoTitleEN.value}" src="{$logoImgFile.value}"/>
}
[else]
temp.logo {
  value = <a href=""><img alt="Vifamath Logo" title="{$logoTitleDE.value}" src="{$logoImgFile.value}"/></a>
  lang.de = <a href=""><img alt="Vifamath Logo" title="{$logoTitleDE.value}" src="{$logoImgFile.value}"/></a>
  lang.en = <a href="?L=1"><img alt="Vifamath Logo" title="{$logoTitleEN.value}" src="{$logoImgFile.value}"/></a>
}
[global]


temp.actionsPicture = TEXT
temp.actionsPicture{
  stdWrap.wrap = <div id="actionsPicture"> | </div>
  value = <img alt="{$actionsPictureAltDE.value}" title="{$actionsPictureTitleDE.value}" src="{$actionsPictureFile.value}"/>
  lang.de = <img alt="{$actionsPictureAltDE.value}" title="{$actionsPictureTitleDE.value}" src="{$actionsPictureFile.value}"/>
  lang.en = <img alt="{$actionsPictureAltEN.value}" title="{$actionsPictureTitleEN.value}" src="{$actionsPictureFile.value}"/>
}

temp.header = COA
temp.header.10 = COA
temp.header.10 {
       stdWrap.wrap = <div id="header"> | </div>
       10 < temp.logo
       20 < temp.actionsPicture
       30 < temp.topNavigation
}
temp.header.20 < temp.middlebar