page = PAGE
page {
    typeNum = 0

    shortcutIcon = EXT:tmpl_fidmath/Resources/Public/Images/favicon.ico

    config {
        sys_language_uid = 0
        language = de
        locale_all = de_DE.UTF-8
        defaultLanguageISOCode = DE
        htmlTag_langKey = de
        removeDefaultJS = 1
    }

    headerData = COA
    headerData {
        12 = TEXT
        12 {
            wrap = <link href="|" rel="alternate" type="application/rss+xml" title="Fachinformationsdienst Mathe News"/>
            typolink {
                parameter = 1,100
                returnLast = url
            }
        }

        14 = TEXT
        14.value = <script type="text/x-mathjax-config">MathJax.Hub.processSectionDelay = 0;MathJax.Hub.Config({TeX: {Macros:{sb: ["{_#1}", 1], sp: ["{^#1}", 1]}}, extensions: ["tex2jax.js"],jax: ["input/TeX", "output/HTML-CSS"],tex2jax: { inlineMath: [ ['$','$'], ["\\(","\\)"] ], displayMath: [ ['$$','$$'], ["\\[","\\]"] ], processEscapes: true }, "HTML-CSS": { availableFonts: ["TeX"] } }); </script>

        15 = TEXT
        15.value = <script type="text/javascript" src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

        16 = TEXT
        16 {
            wrap = <link rel="search" type="application/opensearchdescription+xml" title="Fachinformationsdienst Mathematik" href="|" />
            typolink {
                parameter = 1,9004
                returnLast = url
            }
        }
    }

    meta {
        author = Fachinformationsdienst Mathematik
        description = Der Fachinformationsdienst Mathematik ist ein zentraler Einstieg für die Recherche nach mathematikspezifischen Informationen; z. B. können Bibliothekskataloge, Preprintserver und Sammlungen von Reviews, Zeitschriften und mathematisch relevanten Internetseiten simultan durchsucht werden.
        abstract = Der Fachinformationsdienst Mathematik ist ein zentraler Einstieg für die Recherche nach mathematikspezifischen Informationen; z. B. können Bibliothekskataloge, Preprintserver und Sammlungen von Reviews, Zeitschriften und mathematisch relevanten Internetseiten simultan durchsucht werden.
        Content-language = de, en
        Robots = index, follow
        viewport = width=device-width, initial-scale=1
    }

    includeCSS {
        file1 = EXT:tmpl_fidmath/Resources/Public/Css/screen.css
        file1.media = all

        file2 = EXT:tmpl_fidmath/Resources/Public/Css/print.css
        file2.media = print

        file3 = EXT:tmpl_fidmath/Resources/Public/Css/screenIE8.css
        file3.allWrap = <!--[if IE 8]>|<![endif]-->
    }

    includeJS {
        file1 = EXT:tmpl_fidmath/Resources/Public/JavaScript/fidmath.js
    }

    includeJSLibs {
        jquery = EXT:tmpl_fidmath/Resources/Public/JavaScript/jquery.min.js
    }

    10 = FLUIDTEMPLATE
    10 {
        file = EXT:tmpl_fidmath/Resources/Private/Templates/Vifamath.html
        extbase.controllerExtensionName = tmpl_fidmath
        partialRootPath = EXT:tmpl_fidmath/Resources/Private/Templates/Partials/
        layoutRootPath = EXT:tmpl_fidmath/Resources/Private/Templates/Layouts/
        variables {
            pageTitle = TEXT
            pageTitle.data = page:subtitle

            pageUid = TEXT
            pageUid.data = page:uid
        }
    }
}

config {
    linkVars = L
    uniqueLinkVars = 1
    doctype = html5
    metaCharset = utf-8
    renderCharset = utf-8

    disablePrefixComment = 1
    disableImgBorderAttr = 1

    removeDefaultJS = 1

    simulateStaticDocuments = 0
    tx_realurl_enable = 1
    baseURL = {$baseUrl}
}

# English language, sys_language.uid = 1
[globalVar = GP:L = 1]
    page.config {
        sys_language_uid = 1
        language = en
        locale_all = en_GB.UTF-8
        defaultLanguageISOCode = EN
        htmlTag_langKey = en
    }
[global]

[globalVar = TSFE:id=111]
    page.includeJS.file >
[global]

################################################
##Gobale Marker: Personen + Ausdrücke + Phrasen
################################################
constants {
    KH = Katharina Habermann
    TF = Thomas Fischer

    MM = Marianna Mühlhölzer

    VM = Fachinformationsdienst Mathematik
    VM_en = Virtual Library of Mathematics
    vifamath = <span class="prefix">fid</span><span class="postfix">math</span>

    SUB = SUB Göttingen
    TIB = TIB Hannover
    FIZ = FIZ Karlsruhe

    SUB_de = <abbr title="Niedersächsische Staats- und Universitätsbibliothek Göttingen">SUB Göttingen</abbr>
    TIB_de = <abbr title="Technische Informationsbibliothek Hannover">TIB Hannover</abbr>
    FIZ_de = <abbr title="Fachinformationszentrum Karlsruhe">FIZ Karlsruhe</abbr>
    SUB_en = <abbr title="Göttingen State and University Library">SUB Göttingen</abbr>
    TIB_en = <abbr title="German National Library of Science Technology Hanover">TIB Hannover</abbr>
    FIZ_en = <abbr title="Fachinformationszentrum Karlsruhe">FIZ Karlsruhe</abbr>

    SUB_long_link_de = <a href="http://www.sub.uni-goettingen.de/" class="external-link-new-window" target="_blank" title="externer Link: Niedersächsische Staats- und Universitätsbibliothek Göttingen">Niedersächsische Staats- und Universitätsbibliothek Göttingen</a>
    TIB_long_link_de = <a href="http://www.tib-hannover.de/" class="external-link-new-window" target="_blank" title="externer Link: Technische Informationsbibliothek Hannover">Technische Informationsbibliothek Hannover</a>
    FIZ_long_link_de = <a href="http://www.fiz-karlsruhe.de/" class="external-link-new-window" target="_blank" title="externer Link: Fachinformationszentrum Karlsruhe">Fachinformationszentrum Karlsruhe</a>
    SUB_long_link_en = <a href="http://www.sub.uni-goettingen.de/en/" class="external-link-new-window" target="_blank" title="external link: Göttingen State and University Library">Göttingen State and University Library</a>
    TIB_long_link_en = <a href="http://www.tib-hannover.de/en/" class="external-link-new-window" target="_blank" title="external link: German National Library of Science Technology Hanover">German National Library of Science Technology Hanover</a>
    FIZ_long_link_en = <a href="http://www.fiz-karlsruhe.de/" class="external-link-new-window" target="_blank" title="external link: Fachinformationszentrum Karlsruhe">Fachinformationszentrum Karlsruhe</a>
    # 2 = Namen im Genitiv:
    SUB_long_2_link_de = <a href="http://www.sub.uni-goettingen.de/" class="external-link-new-window" target="_blank" title="externer Link: Niedersächsische Staats- und Universitätsbibliothek Göttingen">Niedersächsischen Staats- und Universitätsbibliothek Göttingen</a>
    TIB_long_2_link_de = <a href="http://www.tib-hannover.de/" class="external-link-new-window" target="_blank" title="externer Link: Technische Informationsbibliothek Hannover">Technischen Informationsbibliothek Hannover</a>
    FIZ_long_2_link_de = <a href="http://www.fiz-karlsruhe.de/" class="external-link-new-window" target="_blank" title="externer Link: Fachinformationszentrums Karlsruhe">Fachinformationszentrum Karlsruhe</a>

    db_info_de = <b>i</b> - Infos zu den Datenquellen
    db_info_en = <b>i</b> - Information on databases
}

plugin.tx_pazpar2.settings {
    fulltextSearch = 2
    journalTitleOnlySearch = 1
    exportFormats {
        ris = 1
        bibtex = 1
    }

    showKVKLink = 1
    sortOrder {
        1.fieldName = date
        1.direction = descending
        2.fieldName = author
        2.direction = ascending
        3.fieldName = title
        3.direction = ascending
        4.fieldName = title-number-section
        4.direction = ascending
    }
}

[PIDinRootline = {$subject-search}]
    # configure pazpar2:
    plugin.tx_pazpar2.settings {
        # listen to nkwgok changes
        triggeredByNKWGOK = 1
        # hide the extended search link
        allowExtendedSearch = 0
        # use placeholder text 2 'additional search term'
        mainSearchFieldPlaceholder = 2
    }

    # configure pazpar2 placeholder strings
    plugin.tx_pazpar2._LOCAL_LANG {
        # Hack! TYPO3 seems unable to recognise the 'en' language code
        default {
            form-main-placeholder = add a search term
        }

        de {
            form-main-placeholder = zusätzlicher Suchbegriff
        }
    }

    # add CSS rules to reposition the search form
    page.CSS_inlineStyle (
  #pazpar2 .pz2-mainForm {
    position: absolute;
    top: 70px;
    right: 0px;
  }
  #pazpar2 .pz2-mainForm input.pz2-searchField {
    width: 250px;
  }
    )
[global]

plugin.tx_pazpar2.settings.flotJSPath = EXT:tmpl_fidmath/Resources/Public/JavaScript/jquery.flot.js
plugin.tx_pazpar2.settings.flotSelectionJSPath = EXT:tmpl_fidmath/Resources/Public/JavaScript/jquery.flot.selection.js
module.tx_form.settings.yamlConfigurations.667 = EXT:tmpl_fidmath/Configuration/Yaml/Form.yaml
