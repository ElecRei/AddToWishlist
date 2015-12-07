// Add and Remove Function
    
/*
    var product01 = document.getElementById('product_01').onclick = productClick;
    var product02 = document.getElementById('product_02').onclick = productClick;   
    var product03 = document.getElementById('product_03').onclick = productClick;
*/

    function productClick(productElement) {
        console.log('Event Started');
        
        var productClicked = productElement.id;
        
        if(productClicked === 'product_01'){
            document.getElementById('product_01').style.background = "orange";
        }
        else if(productClicked === 'product_02'){
            document.getElementById('product_02').style.background = "#00CC00";
        }
        else if(productClicked === 'product_03'){
            document.getElementById('product_03').style.background = "#FFFACD";
        }
        
    };
    
//