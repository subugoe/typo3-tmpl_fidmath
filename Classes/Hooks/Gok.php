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
        $arguments = $element->arguments;
        $extkey = Utility::extKey;

//        return $js.';console.log('.$element->objectID.')';

//        $js .=  "
//            $( document ).ready(function() {
//
//                var newButton = document.createElement('p');
//                newButton.classList.add(\"checkButton\");
//                var textnode = document.createTextNode(\"Auswahl...\");
//                newButton.appendChild(textnode);
//
//                var list = document.getElementById(\"tx_nkwgok-734\");
//                list.insertBefore(newButton, list.childNodes[0]);
//
//
//                $(\"ul#ul-734-MSC\").hide();
//
//                $(\".checkButton\").click(function(){
//                    $(\"#ul-734-MSC\").toggle();
//                });
//
//                $(\".level-0\").click(function() {
//                    var text = $(this).html();
//                    $(\".checkButton\").html(text);
//                    $(\"ul#ul-734-MSC\").hide();
//                });
//
//                function getSelectedValue(id) {
//                    return $(\"#\" + id).find(\"dt a span.value\").html();
//                }
//
//                $(document).bind(\"click\", function(e) {
//                    var \$clicked = $(e.target);
//                    if (! \$clicked.parents().hasClass(\"gokContainer\"))
//                        $(\"ul#ul-734-MSC\").hide();
//                        console.log(\"hasClass gokContainer\");
//                });
//            });
//  ############################################################################
//        function makeIntoSelect (id) {
//            console.log(id);
//            var ulElement = document.getElementById(id);
//            $(ulElement).each(function(){
//                var list=$(this),
//                        select=$(document.createElement("select"))
//                            .insertBefore($(this))
//                            .change(function(){window.open($(this).val())
//            });
//
//            $(">li a span.GOKName", this).each(function(){
//                var onclickfunction = this.parentNode.getAttribute("onclick");
//                var GOKIDclass = $(this).prev().html();
//                var option=$(document.createElement("option"))
//                    .appendTo(select)
//                    .val(this.parentNode.href)
//                    .attr('id',GOKIDclass)
//                    .html('<a href="' + this.parentNode.href + '"onclick="'+ onclickfunction + '"/>' + $(this).html() + '<a/>');
//
//                if($(this).attr("class") === "open"){
//                    option.attr("selected","selected");
//                }
//            });
//
//            list.remove();
//
//            });
//        }
//        ";

        $js .= "
        function makeIntoSelect (id) {
            console.log(id);
            var ulElement = document.getElementById(id);
            $(ulElement).each(function(){
                var list=$(this), 
                        select=$(document.createElement(\"select\"))
                        .insertBefore($(this))
                        .attr('id', id)
                        .change(function(){
                            console.log($(\"option a\").attr(\"onclick\"));
                            $(\"option a\").attr(\"onclick\");
                        });
            
            $(\">li a span.GOKName\", this).each(function(){
                var onclickfunction = this.parentNode.getAttribute(\"onclick\");
                    var GOKIDclass = $(this).prev().html();
                    var option=$(document.createElement(\"option\"))
                    .appendTo(select)
                    .val(this.parentNode.href)
                    .attr('id',GOKIDclass)
                    .html('<a href=\"' + this.parentNode.href + '\"onclick=\''+onclickfunction+'\'/>' + $(this).html() + '<a/>');
            });
            
            list.remove();
            
            });
        }
        ";

        return $js;
    }
}
