var express = require( "express" );
var router = express.Router();

//Added variable - josephs notes
var memes = require( "../public/memes.json" );

/* GET home page. */
router.get( "/", function( req, res, next ) {
  res.render( "index", { title: "Express" } );
} );

module.exports = router;
