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
//        ";

        $js .= "
        
            $( document ).ready(function() {
                $(\"#ul-734-MSC\").each(function(){
                    var list=\$(this), select=$(document.createElement(\"select\")).insertBefore($(this).hide()).change(function(){ window.open(\$(this).val(),\"_newtab\")});
                
                    $(\">li a span.GOKName\", this).each(function(){
                        var option=$(document.createElement(\"option\"))
                        .appendTo(select)
                        .val(this.parentNode.href)
                        .html($(this).html());
                        
                        if($(this).attr(\"class\") === \"selected\"){
                            option.attr(\"selected\",\"selected\");
                        }
                    });
                
                list.remove();
                
                });
            });
        ";

        return $js;
    }
}
