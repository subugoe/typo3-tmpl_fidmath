plugin.tx_find.view.templateRootPaths.15 = EXT:tmpl_fidmath/Resources/Private/Templates/Extensions/Find/Templates/
plugin.tx_find.view.partialRootPaths.15 = EXT:tmpl_fidmath/Resources/Private/Templates/Extensions/Find/Partials/
plugin.tx_find.view.layoutRootPaths.15 = EXT:tmpl_fidmath/Resources/Private/Templates/Extensions/Find/Layouts/

plugin.tx_find.settings {
    connection {
        host = solr
        port = 8983
        path = /solr/hansolr
    }

    standardFields {
        title = title
        snippet = content
    }

    CSSPaths {
        10 >
        20 >
    }

    jumpToID >
}

plugin.tx_find.settings {
    defaultQuery = Berufe:Mathematiker

    queryFields {
        0 {
            type = Text
            query = %s Berufe:Mathematiker
        }
    }

    sort {
        1 {
            id = default
            sortCriteria = Titel_sort asc
        }
    }
}
