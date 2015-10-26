// Product Items List


/*
    
    Product Descriptors/Labels
    
    - Name
    - Image
    - Price (CAD)
    - Product Code
    
    Purpose Outline
    
    This JS file will take variables containing unique product info and output it into one of two divs in the
    HTML page. An IF statement will sort what info gets posted to what div depending on what info the div needs,
    for example:
    
    The <div id="product_catalogue"></div> is looking for the product info for name, image and cost. The function is
    run and an IF statement checks to see which div called it and then calls forth and omits the appropriate data.
*/

/*
var currency = "CAD";

var products = [productPalmRing, productIntriRing, productSnakeRing, productPalmNeck];



var productPalmRing = { productName: "Palm Ring", productImage: "IMAGE GOES HERE", productPrice: "75" + currency, productCode: "190952CZ" };

*/

var productCatalogue = document.getElementById('product_catalogue');

var numberOfProducts = productCatalogue.getElementsByClassName('product_item').length;


