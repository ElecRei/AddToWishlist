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