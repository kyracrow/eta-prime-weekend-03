var express = require( "express" );
var router = express.Router();
var memes = require( "../public/memes.json" );

/* GET home page. */
router.get( "/", function( req, res, next ) {
  res.render( "memes", { memes: memes } );
} );

module.exports = router;
