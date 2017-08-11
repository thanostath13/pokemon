//******************************************************************************
//                                  App
//******************************************************************************

/*global vars */
var myapp;
var ENTER_KEY = 13;
var ESC_KEY = 27;

 // the max amount of cards in our deck ( less than our limit = 30 ) 
var decklimit = 30;

// Cors Productive Api Url
var apiurl = 'https://api.pokemontcg.io/v1/cards';


var tempdetail;

$(function () {
    'use strict';
    // kick things off by creating the `App` View
    var myapp = new app.AppView();

}); 
