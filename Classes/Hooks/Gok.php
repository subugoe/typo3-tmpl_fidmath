<?php

namespace Subugoe\TmplFidmath\Hooks;

use Subugoe\Nkwgok\Elements\Element;
use Subugoe\Nkwgok\Utility\Utility;

/**
 * Hook for nkwgok tree JavaScript.
 */
class Gok
{
    /**
     * Take the original JavaScript and returns whatever string is generated.
     */
    public function javascript(string $js, Element $element): string
    {
        $objectID = $element->objectID;

        $js .= "
        var mutexSelect = false;
        var newSelectedItem;

        function makeIntoSelect(id) {
            var ulElement = document.getElementById(id);

            $(ulElement).each(function() {
                var list=$(this),
                    select=$(document.createElement(\"select\"))
                    .insertBefore($(this))
                    .attr('id', id)
                    .attr('class', this.getAttribute(\"class\"))
                    .change(function() {
                        var selectedElement = $(this).children(\":selected\").attr(\"id\");
                        newSelectedItem = 'ul-${$objectID}-'+selectedElement;
                        expandGOK${$objectID}(selectedElement);
                        var jContainerLI = jQuery('#c${$objectID}-' + selectedElement);
                        jContainerLI.parent().nextAll('select').remove();
                        mutexSelect = true;
                    });

                var option=$(document.createElement(\"option\")).appendTo(select).html('...');

                $(\">li a span.GOKName\", this).each(function() {
                    var onclickfunction = this.parentNode.getAttribute(\"onclick\");
                    var GOKIDclass = $(this).prev().html();
                    var option=$(document.createElement(\"option\"))
                        .appendTo(select)
                        .val($(this).html())
                        .attr('id',GOKIDclass)
                        .html('<a href=\"' + this.parentNode.href + '\"onclick=\''+onclickfunction+'\'/>'+ '<span class=\"plusMinus\">' + $(this).prev().prev().html() + ' </span>' + '<span class=\"GOKID\">' + GOKIDclass + ' </span>' + '<span class=\"GOKNAME\">' + $(this).html() +' </span>' + '<a/>');
                });

                $('#'+newSelectedItem).val();
                list.hide();
            });
        }

        $(document).ready(function() {
            makeIntoSelect ('ul-${$objectID}-MSC');
        });

        window.setInterval(function() {
          if ($('#'+ newSelectedItem).length !== 0) {
            if (mutexSelect === true) {
              mutexSelect = false;
              makeIntoSelect(newSelectedItem);
            };
          };
        }, 100);
        ";

        return $js;
    }
}
