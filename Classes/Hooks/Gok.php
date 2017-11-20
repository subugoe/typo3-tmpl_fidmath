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

        $js .=  "
            $( document ).ready(function() {
               
                var newButton = document.createElement('p');
                newButton.classList.add(\"checkButton\");
                var textnode = document.createTextNode(\"Select\");
                newButton.appendChild(textnode);

                var list = document.getElementById(\"tx_nkwgok-734\");
                list.insertBefore(newButton, list.childNodes[0]);

                $(\".checkButton\").click(function(){
                    $(\"#ul-734-MSC\").toggle();
                });
                
                $(\".level-0\").click(function() {
                    var text = $(this).html();
                    $(\".checkButton\").html(text);
                    $(\"ul#ul-734-MSC\").hide();
                });
                
                $(document).bind(\"click\", function(e) {
                    var \$clicked = $(e.target);
                    if (! \$clicked.parents().hasClass(\"gokContainer\"))
                        $(\"ul#ul-734-MSC\").hide();
                });
            });
        ";

        return $js;
    }
}
