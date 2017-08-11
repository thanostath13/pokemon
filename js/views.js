//******************************************************************************
//                                 Views
//******************************************************************************

/* global Backbone, jQuery, _, ENTER_KEY, ESC_KEY, myapp, tempdetail */
var app = app || {};

//******************************************************************************
//                The Application  (The top-level piece of UI)
//******************************************************************************

app.AppView = Backbone.View.extend({
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: 'body',

    events: {
        // This event happens when the user press Enter after typing card name.
        // Note: Our search has the class name cardname.
        'keypress.cardname': 'searchWithName'
    },
    
    initialize: function () {
        
        
        
        this.instances = {};
        // this is aur collection
        //this.instances.mycollection = new app.CardC();
        // we get the cardname as input
        //this.$input = this.$('.cardname');
        //console.log( this.$input );

        console.log( this.$('.cardname') );  
    },
    
    // Re-rendering the App just means refreshing data but the rest of the app doesn't change.
    render: function () {
    }   
});

