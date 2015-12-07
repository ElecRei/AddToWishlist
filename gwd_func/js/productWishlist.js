$('.product_item').click(function() {
                   
    if($(this).has('Tropical Palm Ring')) {
        document.write(
            "<div class=\"product_item\" id=\"" +
            prdArray[i].prdName +
            "\">" +
            "<span class=\"product_name\">" + 
            prdArray[i].prdName + 
            "</span>" +
            "<br />"
        );
        document.write(
            "<span class=\"product_price\">" +
            prdArray[i].prdPrice + 
            "</span>" + 
            "<br /></div>"
        );
    }
    else {
        console.log('The code refused to change, what?');                     
    }

});