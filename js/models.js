//******************************************************************************
//                                 Models
//******************************************************************************

/*Backbone Model for a card of our deck and functions initialize for this card*/

app.CardM = Backbone.Model.extend({

// getting card image from the main domain 
initialize: function () {
},
        //set some defaults attributes for the card (each card created has `name` and `text` keys).
        defaults: {
                name:'Shroomish',
                nationalPokedexNumber:285,
                imageUrl:"https://images.pokemontcg.io/xy5/15.png",
                imageUrlHiRes:"https://images.pokemontcg.io/xy5/15_hires.png",
                types:["Grass"],
                supertype:"Pokémon",
                subtype:"Basic",
                hp:"60",
                retreatCost:["Colorless"],
                number:"15",
                artist:"Mizue",
                rarity:"Common",
                series:"XY",
                set:"Primal Clash",
                setCode:"xy5"
        }
});


