// addToWishlist Functions
//
// All the code so far for the addToWishlist project brought into a
// single file for Google Web Designer, plus to keep all the code in
// one place instead of several different files.
//

        ////////////////////////////////////////////////////////////////////////////////

        // Product List
        //
        // This is the product list for the addProduct and wishlist functions to
        // get product info from. Everything is already here but if you ever need
        // to add new products or completely redo the list I've included some notes
        // showing you how to do so.
        //

        var currency = ["CAD"];

        // Product Type Guide
        // If you want to change the product type, just change the number
        // in the [] brackets to what product type you want.
        //
        // Product Type Legend
        // 0 = Ring, 1 = Necklace, 2 = Bracelet, 3 = Charm
        //
        // Note : Make sure the image used matches the product type

        var productType = [ 'Ring', 'Necklace', 'Bracelet', 'Charm' ];
        // Add a default for products that don't have any type or a fallback
        // for errors.

        // Product Item Layout
        // 
        // var prd01 = { prdName:"Tropical Palm " + productType[0], <-- Name of Product plus product type
        //              prdImage: "IMAGE GOES HERE",                <-- Product image link
        //              prdPrice: "90 " + currency,                 <-- Product Price, don't change the currency
        //              prdCode: "190952CZ"                         <-- Product Code
        //             };
        //

        var prd01 = { prdName:"Tropical Palm " + productType[0], 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "90 " + currency, 
                     prdCode: "190952CZ" 
                    };

        var prd02 = { prdName:"Swirling Snake", 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "90 " + currency, 
                     prdCode: "190954CZ" 
                    };

        var prd03 = { prdName:"Intricate Lattice", 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "75 " + currency, 
                     prdCode: "190955CZ" 
                    };

        var prd04 = { prdName:"Tropical Palm " + productType[1], 
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "140 " + currency, 
                     prdCode: "390370CZ" 
                    };

        var prd05 = { prdName:"Green Leather " + productType[2], 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "55 " + currency, 
                     prdCode: "590705CLG-D" 
                    };

        var prd06 = { prdName:"Blue Leather " + productType[2], 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "55 " + currency, 
                     prdCode: "590705CSB-D" 
                    };

        var prd07 = { prdName:"Tropicana Gold "  + productType[3], 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "275 " + currency,
                     prdCode: "750834" 
                    };

        var prd08 = { prdName:"Tropicana Silver " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "40 " + currency, 
                     prdCode: "791543" 
                    };

        var prd09 = { prdName:"Oceanic Mosaic " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "75 " + currency,
                     prdCode: "791261MCZMX"
                    };

        var prd10 = { prdName:"Sky Mosaic " + productType[3],
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "75 " + currency, 
                     prdCode: "791261NSBMX"
                    };

        var prd11 = { prdName:"Symbol Of Stability " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "40 " + currency,
                     prdCode: "791533CZ" 
                    };

        var prd12 = { prdName:"Sea Turtle " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "65 " + currency,
                     prdCode: "791538CZ"
                    };

        var prd13 = { prdName:"Sparkling Snake " + productType[3], 
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "75 " + currency,
                     prdCode: "791539CZ" 
                    };

        var prd14 = { prdName:"Sparkling Palm Tree " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "50 " + currency, 
                     prdCode: "791540CZ" 
                    };

        var prd15 = { prdName:"Playful Dolphin " + productType[3],
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "50 " + currency, 
                     prdCode: "791541CZ" 
                    };

        var prd16 = { prdName:"Orchid " + productType[3], 
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "50 " + currency,
                     prdCode: "791554EN69" 
                    };

        var prd17 = { prdName:"Petit Facets Blue " + productType[3],
                     prdImage: "IMAGE GOES HERE", 
                     prdPrice: "45 " + currency,
                     prdCode: "791499SBQ"
                    };

        var prd18 = { prdName:"Petit Facets Green " + productType[3], 
                     prdImage: "IMAGE GOES HERE",
                     prdPrice: "45 " + currency,
                     prdCode: "791499SGQ"
                    };

        // Product List Array
        //
        // This is where all the products get placed for the
        // product list function to gather and output onto
        // the page.
        //
        // Note : When adding a new product make sure to update
        //        the array accordingly, no dynamic ways yet.
        //
        //               Product    Array #
        var prdArray = [ prd01,     // 0
                         prd02,     // 1
                         prd03,     // 2
                         prd04,     // 3
                         prd05,     // 4
                         prd06,     // 5
                         prd07,     // 6
                         prd08,     // 7
                         prd09,     // 8
                         prd10,     // 9
                         prd11,     // 10
                         prd12,     // 11
                         prd13,     // 12
                         prd14,     // 13
                         prd15,     // 14
                         prd16,     // 15
                         prd17,     // 16
                         prd18,     // 17
                       ]
        
        ////////////////////////////////////////////////////////////////////////////////
        
        
        
        
        ////////////////////////////////////////////////////////////////////////////////
        
        // Product Loader
        //
        // This bit of code is what will load the products into the page. It gathers
        // the info from the product list and through a loop it generates the product
        // item <div>'s.
        //
        
        var productContainer = document.getElementById('demo');

        for (i = 0; i <= 17; i++) {
            if($( "#demo" ).hasClass( "demoClass" ))  {

                document.write(
                    "<div class=\"product_item addToWishlist\" id=\"" +
                    "prod" +
                    [i] +
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
                //document.write("<br /><br />");
            }
            else {
                document.write(
                    "<div class=\"product_item\">"
                    + prdArray[i].prdName + 
                    "<br />"
                );
                document.write(
                    prdArray[i].prdPrice + 
                    "<br />"
                );
                document.write(
                    prdArray[i].prdCode + 
                    "<br /></div>"
                );
                //document.write("<br /><br />");
                //console.log("ERROR, ERROR, ERROR!");   
            }
        }

        ////////////////////////////////////////////////////////////////////////////////




        ////////////////////////////////////////////////////////////////////////////////

        // Add to Wishlist Function
        //
        // This bit of code checks if the product item clicked has a product ID and if it does
        // then the function activates to display the div below in the wishlist. The counter is
        // for dynamically placing items into the wishlist which at the moment is not complete.
        //

        var counter = 0;
                    
        function wishlist() {

            /*
            document.getElementById('demo2').innerHTML = (
                "<div class=\"product_item\">" +
                "<span class=\"product_name\">" + 
                prdArray[prodNum].prdName + 
                "</span>" +
                "<br />" +
                "<span class=\"product_price\">" +
                prdArray[prodNum].prdPrice + 
                "</span>" + 
                "<br /></div>"
                );
            */
            console.log('innerHTML');
            console.log(counter);
            counter = counter + 1;
            document.getElementById('wish' + prodItem).innerHTML = (
                "<span class=\"product_name\">" + 
                prdArray[prodNum].prdName + 
                "</span>" +
                "<br />" +
                "<span class=\"product_price\">" +
                prdArray[prodNum].prdCode +
                "</span>" + 
                "<br />"
                );
            $('#wish' + prodItem).addClass('itemCount' + counter);
            $('#wish' + prodItem).css('display', 'block');
                console.log('Test');
                console.log(prodItem);
                console.log(counter);
        };

        var prodItem;

        var prodNum;

        $('.addToWishlist').click(function() {
            if($(this).hasClass('addToWishlist')) {
                $(this).removeClass('addToWishlist')
                if($(this).attr('id') == 'prod0') {
                    prodItem = 0;
                    prodNum = 0;
                    wishlist();
                }
                else if($(this).attr('id') == 'prod1') {
                    prodItem = 1;
                    prodNum = 1;
                    wishlist();
                }
                else if($(this).attr('id') == 'prod2') {
                    prodItem = 2;
                    prodNum = 2;
                    wishlist();
                }
                else if($(this).attr('id') == 'prod3') {
                    prodItem = 3;
                    prodNum = 3;
                    wishlist();
                }
                else if($(this).attr('id') == 'prod4') {
                    prodItem = 4;
                    prodNum = 4;
                    wishlist();
                }
                else {
                    console.log('The code refused to change, what?');                     
                }
            }
            else {
                console.log('error');                      
            }

        });

        ////////////////////////////////////////////////////////////////////////////////
        



        ////////////////////////////////////////////////////////////////////////////////

        // Misc Functions
        //
        //

        $('.nav_item').click(function() {


            // Post Lunch Note
            // Figure out how to detect if an element has a data-id/attribute, or maybe just look up
            // a tutorial on jQuery tabs. 

            if(!$(this).hasClass('currentTab')) {
                if($(this).attr('1')) {
                    $('.section').removeClass('selectedTab');
                    $('#demo').addClass('selectedTab');   
                }
                else if($(this).attr('2')) {
                    $('.section').removeClass('selectedTab');
                    $('#product_wishlist').addClass('selectedTab');   
                }

                $('.nav_item').removeClass('currentTab');
                $(this).addClass('currentTab');
                console.log('It worked');   
            }
            else {
                console.log('Nope');   
            }
        });

        console.log("TEST");


        /* Basic Update Animation - Use default animation for now */

        $('.product_item').click(function() {
            $('.alert').animate({
                top: "0px",
                opacity: "1"
            }, 1000, function() {
                $('.alert').animate({
                    top: "-50px",
                    opacity: "0"
                }, 900);
            });
        });
        