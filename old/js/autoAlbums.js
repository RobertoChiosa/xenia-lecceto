/* ======================================================= 
 * Auto Albums - Multi Level Responsive Grid
 * By David Blanco
 *
 * Contact: http://codecanyon.net/user/davidbo90
 *
 * Created: July 23, 2013
 *
 * Copyright (c) 2013, David Blanco. All rights reserved.
 * Released under CodeCanyon License http://codecanyon.net/
 *
 * Note: Script based in jQuery Masonry v2.1.07 made by David DeSandro http://masonry.desandro.com/ (under MIT)
 *
 * ======================================================= */


/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});



 /* =========================SWIPE============================== */

;(function($) {
    
    var touchStopEvent, touchMoveEvent, touchStartEvent,
    horizontalDistanceThreshold = 30,
    verticalDistanceThreshold = 75, 
    scrollSupressionThreshold = 10, 
    durationThreshold = 1000;
    
    if("ontouchend" in document) {
    
        touchStopEvent = "touchend.cj_swp";
        touchMoveEvent = "touchmove.cj_swp";
        touchStartEvent = "touchstart.cj_swp";
        
    }
    else {
    
        touchStopEvent = "mouseup.cj_swp";
        touchMoveEvent = "mousemove.cj_swp";
        touchStartEvent = "mousedown.cj_swp";
        
    }
    
    $.fn.touchSwipe = function(cb, prevent) {
        
        if(prevent) this.data("stopPropagation", true);
        if(cb) return this.each(swipeBoth, [cb]);
        
    }
    
    $.fn.touchSwipeLeft = function(cb, prevent) {
        
        if(prevent) this.data("stopPropagation", true);
        if(cb) return this.each(swipeLeft , [cb]);
        
    }
    
    $.fn.touchSwipeRight = function(cb, prevent) {
        
        if(prevent) this.data("stopPropagation", true);
        if(cb) return this.each(swipeRight, [cb]);

    }
    
    function swipeBoth(cb) {
        
        $(this).touchSwipeLeft(cb).touchSwipeRight(cb);
        
    }
    
    function swipeLeft(cb) {
        
        var $this = $(this);
        
        if(!$this.data("swipeLeft")) $this.data("swipeLeft", cb);
        
        if(!$this.data("swipeRight")) addSwipe($this);
        
    }
    
    function swipeRight(cb) {
    
        var $this = $(this);
        
        if(!$this.data("swipeRight")) $this.data("swipeRight", cb);
        
        if(!$this.data("swipeLeft")) addSwipe($this);
        
    }
    
    $.fn.unbindSwipeLeft = function() {
        
        this.removeData("swipeLeft");
        
        if(!this.data("swipeRight")) this.unbindSwipe(true);
        
    }
    
    $.fn.unbindSwipeRight = function() {
        
        this.removeData("swipeRight");
        
        if(!this.data("swipeLeft")) this.unbindSwipe(true);
        
    }
    
    $.fn.unbindSwipe = function(changeData) {
        
        if(!changeData) this.removeData("swipeLeft swipeRight stopPropagation");
        
        return this.unbind(touchStartEvent + " " + touchMoveEvent + " " + touchStopEvent);
        
    }
    
    function addSwipe($this) {
        
        $this.unbindSwipe(true).bind(touchStartEvent, touchStart);
        
    }
    
    function touchStart(event) {
        
        var time = new Date().getTime(),
        data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
        $this = $(this).bind(touchMoveEvent, moveHandler).one(touchStopEvent, touchEnded),
        pageX = data.pageX,
        pageY = data.pageY,
        newPageX, 
        newPageY,
        newTime;
        
        if($this.data("stopPropagation")) event.stopImmediatePropagation();
            
        function touchEnded(event) {
            
            $this.unbind(touchMoveEvent);

            if(time && newTime) {
                
                if(newTime - time < durationThreshold && Math.abs(pageX - newPageX) > horizontalDistanceThreshold && Math.abs(pageY - newPageY) < verticalDistanceThreshold) {
                    
                    if(pageX > newPageX) {
                        
                        if($this.data("swipeLeft")) $this.data("swipeLeft")("left");
                        
                    }
                    else {
                        
                        if($this.data("swipeRight")) $this.data("swipeRight")("right");
                        
                    }
                
                }
                
            }
            
            time = newTime = null;
            
        }
        
        function moveHandler(event) {

            if(time) {

                data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
                newTime = new Date().getTime();
                newPageX = data.pageX;
                newPageY = data.pageY;
    
                if(Math.abs(pageX - newPageX) > scrollSupressionThreshold) event.preventDefault();
                
            }
            
        }
        
    }
    
        
})(jQuery);


/* =========================END SWIPE============================== */







(function( window, $, undefined ){

  'use strict';

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
          args = arguments;

      // set correct event type
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event[ dispatchMethod ].apply( context, args );

      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



// ========================= Grid ===============================


  // our "Widget" object constructor
  $.Mason = function( options, element ){
    this.element = $( element );
    this._create( options );
    this._init();
  };

  $.Mason.settings = {
    isResizable: true,
    isAnimated: false,
    animationOptions: {
      queue: false,
      duration: 500,
      complete: function(){
          var $this = $(this);
         
          if( !$this.hasClass('grid-brick') ){//If is the container (not the boxes)
              if($.fn.grid.defaults.lazyLoad){//Refresh the waypoint
                  $.waypoints('refresh');
              }

              if( $this.hasClass('grid-with-loading-boxes') ){
                  $this.removeClass('grid-with-loading-boxes');
                  $this.addClass('completeAddingImages');
              }
          }
      }
    },
    gutterWidth: 0,
    isRTL: false,
    isFitWidth: false,
    containerStyle: {
      position: 'relative'
    }
  };

  $.Mason.prototype = {
    //=db
    _resized: false,
    //=End db

    _filterFindBricks: function( $elems ) {
      var selector = this.options.itemSelector;
      // if there is a selector
      // filter/find appropriate item elements
      return !selector ? $elems : $elems.filter( selector ).add( $elems.find( selector ) );
    },

    _getBricks: function( $elems ) {
      var $bricks = this._filterFindBricks( $elems )
        .css({ position: 'absolute' })
        .addClass('grid-brick');
      return $bricks;
    },
    
    // sets up widget
    _create : function( options ) {
      
      this.options = $.extend( true, {}, $.Mason.settings, options );
      this.styleQueue = [];

      // get original styles in case we re-apply them in .destroy()
      var elemStyle = this.element[0].style;
      this.originalStyle = {
        // get height
        height: elemStyle.height || ''
      };
      // get other styles that will be overwritten
      var containerStyle = this.options.containerStyle;
      for ( var prop in containerStyle ) {
        this.originalStyle[ prop ] = elemStyle[ prop ] || '';
      }

      this.element.css( containerStyle );

      this.horizontalDirection = this.options.isRTL ? 'right' : 'left';

      var x = this.element.css( 'padding-' + this.horizontalDirection );
      var y = this.element.css( 'padding-top' );
      this.offset = {
        x: x ? parseInt( x, 10 ) : 0,
        y: y ? parseInt( y, 10 ) : 0
      };
      
      this.isFluid = this.options.columnWidth && typeof this.options.columnWidth === 'function';

      // add grid class first time around
      var instance = this;
      setTimeout( function() {
        instance.element.addClass('grid');
      }, 0 );
      
      // bind resize method
      if ( this.options.isResizable ) {
        $(window).bind( 'smartresize.grid', function() { 
          instance.resize();
        });
      }


      // need to get bricks
      this.reloadItems();

    },
  
    // _init fires when instance is first created
    // and when instance is triggered again -> $el.grid();
    _init : function( callback ) {
      this._getColumns();
      this._reLayout( callback );
    },

    option: function( key, value ){
      // set options AFTER initialization:
      // signature: $('#foo').bar({ cool:false });
      if ( $.isPlainObject( key ) ){
        this.options = $.extend(true, this.options, key);
      } 
    },
    
    // ====================== General Layout ======================

    // used on collection of atoms (should be filtered, and sorted before )
    // accepts atoms-to-be-laid-out to start with
    layout : function( $bricks, callback ) {

      // place each brick
      for (var i=0, len = $bricks.length; i < len; i++) {
        this._placeBrick( $bricks[i] );
      }
      
      // set the size of the container
      var containerSize = {};
      containerSize.height = Math.max.apply( Math, this.colYs );
      if ( this.options.isFitWidth ) {
        var unusedCols = 0;
        i = this.cols;
        // count unused columns
        while ( --i ) {
          if ( this.colYs[i] !== 0 ) {
            break;
          }
          unusedCols++;
        }
        // fit container to columns that have been used;
        containerSize.width = (this.cols - unusedCols) * this.columnWidth - this.options.gutterWidth;
      }
      this.styleQueue.push({ $el: this.element, style: containerSize });

      // are we animating the layout arrangement?
      // use plugin-ish syntax for css or animate
      var styleFn = !this.isLaidOut ? 'css' : (
            this.options.isAnimated ? 'animate' : 'css'
          ),
          animOpts = this.options.animationOptions;

      // process styleQueue
      var obj;
      //=David Blanco
      var loading = false;
      //=End David Blanco
      for (i=0, len = this.styleQueue.length; i < len; i++) {
        obj = this.styleQueue[i];

        //=David Blanco
        styleFn = !this.isLaidOut ? 'css' : ( this.options.isAnimated ? 'animate' : 'css' );

        var loadingBox = obj.$el.hasClass('loading-box');
        if( loadingBox && !this.element.hasClass('noSupportTransform') ){
            styleFn = 'css';
            loading = true;
        }else if(loading){//for the container
            obj.$el[ 'css' ]( obj.style, animOpts );
        }
        obj.$el.removeClass('loading-box');

        var left = obj.$el.css('left');
        var top  = obj.$el.css('top');

        var newLeft = obj.style.left+'px';
        var newTop  = obj.style.top+'px';

        if( ( left==newLeft && top==newTop ) || loadingBox==true){
          //console.log('is not going to move...');
          obj.$el.data('moving', false);
        }else{
          //console.log('is going to move...');
          obj.$el.data('moving', true);
        }
        //=End David Blanco

        obj.$el[ styleFn ]( obj.style, animOpts );
      }

      // clear out queue for next time
      this.styleQueue = [];

      // provide $elems as context for the callback
      if ( callback ) {
        callback.call( $bricks );
      }
      
      this.isLaidOut = true;
    },
    
    // calculates number of columns
    // i.e. this.columnWidth = 200
    _getColumns : function() {
      var container = this.options.isFitWidth ? this.element.parent() : this.element,
          containerWidth = container.width();
                         // use fluid columnWidth function if there
      this.columnWidth = this.isFluid ? this.options.columnWidth( containerWidth ) :
                    // if not, how about the explicitly set option?
                    this.options.columnWidth ||
                    // or use the size of the first item
                    this.$bricks.outerWidth(true) ||
                    // if there's no items, use size of container
                    containerWidth;

      this.columnWidth += this.options.gutterWidth;

      this.cols = Math.floor( ( containerWidth + this.options.gutterWidth ) / this.columnWidth );
      this.cols = Math.max( this.cols, 1 );

    },

    // layout logic
    _placeBrick: function( brick ) {
      var $brick = $(brick),
          colSpan, groupCount, groupY, groupColY, j;

      //how many columns does this brick span
      colSpan = Math.ceil( $brick.outerWidth(true) / this.columnWidth );
      colSpan = Math.min( colSpan, this.cols );

      if ( colSpan === 1 ) {
        // if brick spans only one column, just like singleMode
        groupY = this.colYs;
      } else {
        // brick spans more than one column
        // how many different places could this brick fit horizontally
        groupCount = this.cols + 1 - colSpan;
        groupY = [];

        // for each group potential horizontal position
        for ( j=0; j < groupCount; j++ ) {
          // make an array of colY values for that one group
          groupColY = this.colYs.slice( j, j+colSpan );
          // and get the max value of the array
          groupY[j] = Math.max.apply( Math, groupColY );
        }

      }

      // get the minimum Y value from the columns
      var minimumY = Math.min.apply( Math, groupY ),
          shortCol = 0;
      
      // Find index of short column, the first from the left
      for (var i=0, len = groupY.length; i < len; i++) {
        if ( groupY[i] === minimumY ) {
          shortCol = i;
          break;
        }
      }

      // position the brick
      var position = {
        top: minimumY + this.offset.y
      };
      // position.left or position.right
      position[ this.horizontalDirection ] = this.columnWidth * shortCol + this.offset.x;
      this.styleQueue.push({ $el: $brick, style: position });

      // apply setHeight to necessary columns
      var setHeight = minimumY + $brick.outerHeight(true),
          setSpan = this.cols + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.colYs[ shortCol + i ] = setHeight;
      }

    },
    
    
    resize: function() {
      var prevColCount = this.cols;
      // get updated colCount
      this._getColumns();
      if ( this.isFluid || this.cols !== prevColCount ) {
        // if column count has changed, trigger new layout
        this._reLayout();
      }
    },
    
    
    _reLayout : function( callback ) {
      // reset columns
      var i = this.cols;
      this.colYs = [];
      while (i--) {
        this.colYs.push( 0 );
      }
      // apply layout logic to all bricks
      this.layout( this.$bricks, callback );
    },
    
    // ====================== Convenience methods ======================
    
    // goes through all children again and gets bricks in proper order
    reloadItems : function() {
      this.$bricks = this._getBricks( this.element.children() );
    },
    
    
    reload : function( callback ) {
      this.reloadItems();
      this._init( callback );
    },
    

    // convienence method for working with Infinite Scroll
    appended : function( $content, isAnimatedFromBottom, callback ) {

      if ( isAnimatedFromBottom ) {
        // set new stuff to the bottom
        this._filterFindBricks( $content ).css({ top: this.element.height() });
        var instance = this;
        setTimeout( function(){
          instance._appended( $content, callback );
        }, 1 );
      } else {
        this._appended( $content, callback );
      }
    },
    
    _appended : function( $content, callback ) {
      var $newBricks = this._getBricks( $content );
      // add new bricks to brick pool
      this.$bricks = this.$bricks.add( $newBricks );
      this.layout( $newBricks, callback );
    },
    
    // removes elements from Grid widget
    remove : function( $content ) {
      this.$bricks = this.$bricks.not( $content );
      $content.remove();
    },
    
    // destroys widget, returns elements and container back (close) to original style
    destroy : function() {

      this.$bricks
        .removeClass('grid-brick')
        .each(function(){
          this.style.position = '';
          this.style.top = '';
          this.style.left = '';
        });
      
      // re-apply saved container styles
      var elemStyle = this.element[0].style;
      for ( var prop in this.originalStyle ) {
        elemStyle[ prop ] = this.originalStyle[ prop ];
      }

      this.element
        .unbind('.grid')
        .removeClass('grid')
        .removeData('grid');
      
      $(window).unbind('.grid');

    }
    
  };
  
  // helper function for logging errors
  // $.error breaks jQuery chaining
  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };
  
  // =======================  Plugin bridge  ===============================
  // leverages data method to either create or return $.Mason constructor
  // A bit from jQuery UI
  //   https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js
  // A bit from jcarousel 
  //   https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js



  $.fn.grid = function( options ) {
    //=db

    var db = function($this){
        var ops = $.extend({}, $.fn.grid.defaults, options);

        if(options.lazyLoad != undefined){
            $.fn.grid.defaults.lazyLoad = options.lazyLoad;
        }

          
        if(options == undefined){
          options = {};
        }

        options.isFitWidth = ops.isFitWidth;
        options.isAnimated = ops.isAnimated; 
        options.itemSelector = '.gbox';
        options.gutterWidth = ops.horizontalSpaceBetweenThumbnails;
        /* *************************************** ADJUST THE WIDTH OF THE COLUMNS *************************************** */
        var $container = $($this).addClass("centered").addClass("grid-clearfix");
        var $op        = ops.columnWidth;

        if($op == 'auto'){
            options.columnWidth = function(containerWidth){
                                      var box_width =  -999; //Just making sure that at least enters once to the condition below
                                      for(var i=ops.columns; i>=1; i--){
                                          if(box_width < ops.columnMinWidth){
                                              box_width = (((containerWidth - (i-1)*options.gutterWidth)/i) | 0);
                                          }
                                      }

                                      //box_width = 280;
                                      $container.find('div.gbox').width(box_width);
                                      return box_width;
                                  };

        }else if( (typeof $op)!= 'function' ){
            options.columnWidth = function(containerWidth){
                                      var box_width =  $op;

                                      $container.find('div.gbox').width(box_width);
                                      return box_width;
                                  };
        }


        $container.find('div.gbox').css('margin-bottom', ops.verticalSpaceBetweenThumbnails);

        var supports = (function() {  
            var   div = document.createElement('div'),  
              vendors = 'Khtml ms O Moz Webkit'.split(' '),  
                  len = vendors.length;  

            return function(prop) {  
              if ( prop in div.style ) return true;  

              prop = prop.replace(/^[a-z]/, function(val) {  
                 return val.toUpperCase();  
              });  

              while(len--) {  
                 if ( vendors[len] + prop in div.style ) {  
                    // browser supports box-shadow. Do what you need.  
                    // Or use a bang (!) to test if the browser doesn't.  
                    return true;  
                 }   
              }  
              return false;  
            };  
        })(); 

        if ( !supports('transform') ) { //IF IT DOES NOT SUPPORT SCALE PROPERTY FOR IE8 for example
             $container.addClass('noSupportTransform');
        }else{
              $container.addClass('visible');
        }

        var rsJSON = null;
        var $directory = $container.data('directory');
        /* *************************************** BRING IMAGES TO THE PARTY *************************************** */

        var loadMore = $('<div />').insertAfter($container);

        var addLoading = function(){
            loadMore.addClass('grid-loader').removeClass('grid-loadMore').html('');
        };

        var clearLoading = function(){
            loadMore.removeClass('grid-loader');
        };

        var loadingScroll = false;
        var anyMoreImages = function(){

            var cont = 0;

            for (var key in rsJSON) {
                var cat = rsJSON[key];
                //for (var img in cat) {
                    cont++;
                //}
            }

            if(cont>0){
                loadingScroll = false;
                return true;
            }else{
                return false;
            }

        };

        var fixLoadMoreButton = function(result){

              if(result){
                  loadMore.addClass('grid-loadMore').html('LOAD MORE');
              }else{
                  loadMore.removeClass('grid-loadMore').html('');
              }

        };

        var directoryNav = $directory;
        var mainDirectory = directoryNav;

        var hashTag   = location.hash.substr(1);
        if(hashTag != '' && ops.hashTag && hashTag != '*'){
            directoryNav  += "/"+hashTag;
            $directory    += "/"+hashTag;
        }

        var checkForHandyStuff = function(name){
            if( name.substr(1,1) == '-' ){
                return name.substr(2);
            }else{
                return name;
            }
        }

        var makeBox = function(imgName, thumb){
            
            var thumbFolder = '';
            if(thumb == 'yes'){
                thumbFolder = 'thumbnails/';
            }


            var imgTitle = imgName.split(/\.(?=[^.]*$)/)[0];

            var url = '';
            if(imgTitle.indexOf("$$") != -1){
                var arr = imgTitle.split("$$");
                imgTitle = arr[0];

                var link = arr[1].split(':').join('/');
                link = link.split('|').join('/');

                url = 'data-url="'+link+'"';
            }

            imgTitle = checkForHandyStuff(imgTitle);

            var box ='<div class="gbox" '+url+'>'+
                          '<img src="'+directoryNav+'/'+thumbFolder+imgName+'" data-lightbox="'+directoryNav+'/'+imgName+'" />'+
                                '<div class="image-caption">'+
                                      '<h4>'+imgTitle+'</h4>'+
                                '</div>'+
                          '<div class="lightbox-text">'+
                                imgTitle+
                          '</div>'+
                      '</div>';

            

            return box;
        };


        var makeBoxFolder = function(folder, imgName, obj){
            
            var thumbFolder = '';
            if(obj.thumb == 'yes'){
                thumbFolder = 'thumbnails/';
            }

            var folderName = checkForHandyStuff(folder);

            var numFolders = '<i class="icon-folder-open icon-white" style="margin-right:5px;"></i>'+obj.numFolders;
            var numImages = '<i class="icon-picture icon-white" style="margin:0 5px 0 5px;"></i>'+obj.numImages;

            if(!ops.showNumFolder){
                numFolders = '';
            }
            if(!ops.showNumImages){
                numImages = '';
            }

            if(ops.autoHideNumFolder && obj.numFolders == 0){
                numFolders = '';
            }
            if(ops.autoHideNumImages && obj.numImages == 0){
                numImages = '';
            }

            var style = '';
            if(obj.numImages == 0 && imgName == ""){
                style = 'style="height:200px"';
            }

            var box ='<div class="gbox gridFolder" data-folder="'+folder+'" '+style+'>'+
                          '<img src="'+directoryNav+'/'+folder+'/'+thumbFolder+imgName+'" />'+
                          '<div class="gradient-container">'+
                              '<div class="folder-info">'+
                                  '<div class="folder-name">'+
                                        folderName+
                                  '</div>'+
                                  '<div class="folder-count">'+
                                          numFolders+
                                          numImages+
                                  '</div>'+ 
                              '</div>'+
                          '</div>'+
                      '</div>';

            

            return box;
        };

        var specialAnimation = function(boxesShow){
            //BOXES TO SHOW HERE ---->
            
            boxesShow.each(function(){
                var el = $(this).removeClass('noTransform');

                if(el.hasClass('grid-brick')){//MAKE SURE THE BOX IS GOING TO BE SHOWN
                      if( el.is(':hidden') ){
                          if ( $container.hasClass('noSupportTransform') ) { //IF IT DOES NOT SUPPORT SCALE PROPERTY FOR IE8 for example
                              el.show();
                          }else{
                              el.show();
                              
                              if(el.data('moving') == false){
                                  el.animate(ops.hiddenStyle,0);  
                                  el.animate(ops.visibleStyle, options.animOpts, function(){ el.addClass('noTransform'); });
                              }else{
                                  el.animate(ops.visibleStyle, 0); //If is hidden and it is going to move make sure it is visible
                                  el.addClass('noTransform');
                              }
                          }
                      }else{
                        el.animate(ops.visibleStyle,options.animOpts, function(){ el.addClass('noTransform'); });
                      }
                } 

            });
        }

        var waitUntilLoad = function(boxes){
            boxes = $(boxes).addClass('loading-box');
            //APPLY THE MARGIN BOTTOM THAT WAS SET
            boxes.css('margin-bottom', ops.verticalSpaceBetweenThumbnails);

            //ADD IT TO THE PARTY AND HIDE IT UNTIL IT LOAD
            $container.append( boxes.hide() );
            
            $container.imagesLoaded(function(){
                boxes.hide().css({'top': 200, 'left':200});

                $container.addClass('grid-with-loading-boxes');
                $container.grid('reload');

                specialAnimation(boxes);

                clearLoading();
                fixLoadMoreButton( anyMoreImages() );
                loadingScroll = false;
            });
        };

        var loadImages = function(numberImagesToLoad){
            addLoading();

            //GET THE IMAGES FROM ALL FOLDERS
            var collection = new Array();
            if(ops.foldersAtTop){
                //FOLDERS FIRST -->
                for (var key in rsJSON) {
                    if( typeof rsJSON[key] == 'string' ){
                        //do nothing
                    }else{
                        collection.push({ 'image':key, 'thumb': rsJSON[key], 'folder': 'yes' });
                    }
                }
                for (var key in rsJSON) {
                    if( typeof rsJSON[key] == 'string' ){
                        collection.push({ 'image':key, 'thumb': rsJSON[key], 'folder': 'no' });
                    }else{
                        //do nothing
                    }
                }
            }else{
                for (var key in rsJSON) {
                    var folder = 'yes';
                    if( typeof rsJSON[key] == 'string' ){
                        folder = 'no';
                    }
                    collection.push({ 'image':key, 'thumb': rsJSON[key], 'folder': folder });
                }
            }

            var boxes = "";
            var num = 0;
            while(num<numberImagesToLoad){
                if(num>=collection.length)break;

                var obj = collection[num];
                var imgTitle = obj['image'].split(/\.(?=[^.]*$)/)[0];
                if(imgTitle != 'folderCover'){

                    if(obj['folder'] == 'yes'){
                        
                        var img = obj['thumb'].image;
                        boxes += makeBoxFolder(obj['image'], img, obj['thumb']);

                    }else{
                        boxes += makeBox(obj['image'], obj['thumb']);
                    }

                }

                //DELTE THE IMAGES THAT ARE ALREADY IN THE GRID BECAUSE WE DON'T NEED THEM ANYMORE
                delete rsJSON[obj['image']];

                num++;
            }

            waitUntilLoad(boxes);
        }
        
        var loadTrigger = function(){
            if(loadMore.hasClass('grid-loadMore')){
                loadImages(ops.imagesToLoad);
            }
        }

        loadMore.on('click', function(){
            loadTrigger();
        });

        /*if(ops.lazyLoad){
          $(window).scroll(function(){
            if(loadMore.closest('html').length){
              if( ($(window).scrollTop() == ($(document).height() - $(window)[0].innerHeight)) && loadingScroll==false ){        
                loadingScroll = true; 
                loadTrigger();
              }
            }
          });
        }*/

        if(ops.lazyLoad){
            
            $container.waypoint(function(direction) {
              var $this = $(this);

              if( $this.hasClass('completeAddingImages') ){                  
                  $this.removeClass('completeAddingImages');

                  if(loadMore.hasClass('grid-loadMore')){
                      loadTrigger();
                  }
              }
            }, {
              context: window,
              continuous: true,
              enabled: true,
              horizontal: false,
              offset: 'bottom-in-view',
              triggerOnce: false,   
            });

        }

        /* ************ ADD BREADCRUMBS FOR NAVIGATION ********* */

        var breadcrumb = $('<ul class="grid-breadcrumb grid-clearfix">'+
                              //'<li class="active" data-directory="'+directoryNav+'">'+directoryNav+'</li>'+
                          '</ul>');
        if(ops.showNavBar){
          breadcrumb.insertBefore($container);
        }

        /* ************ FIX BREADCRUMBS ********* */

        var fixBreadcrumb = function(){
              var arr   = directoryNav.split("/");
              var li    = '';
              var tmp   = '';
              var main  = '';
              var hTag  = '';
              for(var i=0; i<arr.length; i++){
                  if(tmp==''){
                      tmp += arr[i];
                  }else{
                      tmp += '/'+arr[i]
                  }

                  var folderName = checkForHandyStuff(arr[i]);
                  if(main == ''){
                      if(tmp != mainDirectory){
                        continue;
                      }else{
                        main = 'found it';
                      }
                  }
                  if(tmp != mainDirectory){
                      hTag += '/' + arr[i] ;
                  }

                  if(i == arr.length-1){
                      li += '<li data-directory="'+tmp+'" class="active">'+folderName+'</li>';
                  }else{
                      li += '<li data-directory="'+tmp+'"><a>'+folderName+'</a><span class="divider">/</span></li>';
                  }

              }

              if(ops.hashTag && hTag.substr(1)!= ''){
                location.hash = hTag.substr(1);
              }else if(ops.hashTag && hTag.substr(1) == ''){
                location.hash = "*";
              }

              breadcrumb.html(li);

        }
        fixBreadcrumb();

        /* ************ LOAD CONTENT FROM A FOLDER ********* */
        var loadFromFolder = function(){
            //REMOVE ALL OF THE GRID
            $container.find('.gbox').remove().end().css('height',0);
            loadMore.removeClass('grid-loadMore').html('');
            //$container.grid('reload');
            
            fixBreadcrumb();
            addLoading();
            $.getJSON("reader.php?directory="+encodeURIComponent(directoryNav)+'&albumsOrder='+ops.albumsOrder+'&imagesOrder='+ops.imagesOrder+'&folderCoverRandom='+ops.folderCoverRandom, function(data){ 
                rsJSON = data;
                
                loadImages(ops.imagesToLoadStart);
            }); 
        }

        /* ************ CLICK ON BREADCRUMB NAVIGATION BAR ********* */
        breadcrumb.on('click', 'a', function(){
            directoryNav = $(this).parent('li').data('directory');
            loadFromFolder();
        })

        /* ************ CLICK ON A FOLDER ********* */

        $container.on('click', 'div.gridFolder', function(){
            
            var folder = $(this).data('folder');
            directoryNav+='/'+folder;
            loadFromFolder();
  
        })

        /* ************ BRING INFORMATION THROUGH JSON ********* */
        addLoading();
        $.getJSON("reader.php?directory="+encodeURIComponent($directory)+'&albumsOrder='+ops.albumsOrder+'&imagesOrder='+ops.imagesOrder+'&folderCoverRandom='+ops.folderCoverRandom, function(data){ 
            rsJSON = data;
            
            loadImages(ops.imagesToLoadStart);
        });


        /* *************************************** CAPTIONS *************************************** */

        $container.on( 'mouseenter.hoverdir, mouseleave.hoverdir', 'div.gbox', function( event ) {
            if(!ops.caption)return;
                
            var $el         = $(this),
                evType      = event.type,
                $hoverElem  = $el.find( 'div.image-caption' ),
                direction   = _getDir( $el, { x : event.pageX, y : event.pageY } ),
                cssPos    =   _getPosition( direction, $el );
            
            
            //ALIGNMENT
            var child = $hoverElem.children('div.aligment');
            if(child[0] == undefined){
                var tmpHTML = $hoverElem.html();
                $hoverElem.html("<div class='aligment'><div class='aligment'>"+tmpHTML+"</div></div>");
            }

            if( evType === 'mouseenter' ) {
                if(ops.captionType == 'classic'){
                    $hoverElem.css( { "left" : 0, "top" : 0 } );
                    $hoverElem.fadeIn(300);
                    return;
                }

                $hoverElem.css( { "left" : cssPos.from, "top" : cssPos.to } );
              
                $hoverElem.stop().show().fadeTo(0, 1, function() {
                                                    $(this).stop().animate( { "top" : 0, "left" : 0 } , 200, "linear" );
                                                } );
                
            }
            else {

                if(ops.captionType == 'classic'){
                    $hoverElem.css( { "left" : 0, "top" : 0 } );
                    $hoverElem.fadeOut(300);
                    return;
                }
              
                if(ops.captionType == 'grid-fade'){
                      $hoverElem.fadeOut(700);
                }else{
                      $hoverElem.stop().animate( { "left" : cssPos.from, "top" : cssPos.to }, 200, "linear", function(){$hoverElem.hide();} );
                }

            }
                
        } );

        var _getDir = function( $el, coordinates ) {
            /** the width and height of the current div **/
            var w = $el.width(),
                h = $el.height(),

                /** calculate the x and y to get an angle to the center of the div from that x and y. **/
                /** gets the x value relative to the center of the DIV and "normalize" it **/
                x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
                y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
            
                /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
                /** first calculate the angle of the point, 
                add 180 deg to get rid of the negative values
                divide by 90 to get the quadrant
                add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
            
            return direction;
            
        };

        var _getPosition = function( direction, $el ) {
            var fromLeft, fromTop;
            switch( direction ) {
                case 0:
                    // from top
                    if ( !ops.reverse ) { 
                            fromLeft = 0, fromTop = - $el.height() 
                    }else {  
                            fromLeft = 0, fromTop = - $el.height()  
                    }
                    break;
                case 1:
                    // from right
                    if ( !ops.reverse ) { 
                            fromLeft = $el.width()  , fromTop = 0
                    }else {  
                            fromLeft = - $el.width() , fromTop = 0 
                    }
                    break;
                case 2:
                    // from bottom
                    if ( !ops.reverse ) { 
                            fromLeft = 0 , fromTop = $el.height() 
                    }
                    else {  
                            fromLeft = 0, fromTop = - $el.height()  
                    }
                    break;
                case 3:
                    // from left
                    if ( !ops.reverse ) {
                            fromLeft = -$el.width()  , fromTop = 0
                    }
                    else {  
                            fromLeft =  $el.width(), fromTop = 0 
                    }
                    break;
            };
            return { from : fromLeft, to: fromTop };
        }; 

        /* *************************************** LIGHTBOX *************************************** */
        var $body           = $('body');

        var vars = {
            interval: 'none'
        };

        var currentIndex    = 0;
        //Container with the black Background
        var $lightbox       = $('<div class="autoGrid-lightbox" />').appendTo($body); 
        //Navigation Bar
        var $lbnav          = $('<div class="autoGrid-nav" />').appendTo($lightbox);

        var $navClose       = $('<div class="autoGrid-close" />').appendTo($lbnav);
        var $iconClose      = $('<i class="iconClose" />').appendTo($navClose);


        var $navPlay       = $('<div class="autoGrid-play" />');
        if(ops.lightboxPlayBtn){
            $navPlay.appendTo($lbnav);
        }
        var $iconPlay      = $('<i class="iconPlay" />').appendTo($navPlay);


        var $navCaption     = $('<div class="autoGrid-lbcaption" />').appendTo($lbnav).html("Here will go the text for the lightbox");

        var $navNext        = $('<div class="autoGrid-next" />').appendTo($lbnav);
        var $iconNext       = $('<i class="iconNext" />').appendTo($navNext);

        var $navPrev        = $('<div class="autoGrid-prev" />').appendTo($lbnav);
        var $iconPrev       = $('<i class="iconPrev" />').appendTo($navPrev);

        var $lightboxTimer  = $('<div class="lightbox-timer" />').appendTo($lightbox);

        var $closeWidth       = $navClose.width();

        var numOptions = 3;
        if(ops.lightboxPlayBtn)numOptions = 4;

        var fixImage = function(){
                var navWidth    = $lightbox.outerWidth(false);
                if(navWidth<650){//For responsive purpose
                    $navCaption.hide();
                    $navNext.css('width', (navWidth/numOptions));
                    $navPrev.css('width', (navWidth/numOptions));
                    $navPlay.css('width', (navWidth/numOptions));
                    $navClose.css('width', navWidth-((navWidth/numOptions)*(numOptions-1)) );
                }else{
                    $navCaption.show();
                    $navNext.css('width', $closeWidth );
                    $navPrev.css('width', $closeWidth );
                    $navPlay.css('width', $closeWidth );
                    $navClose.css('width', $closeWidth );
                }

                var img         = $lightbox.find('img');
                var maxHeight   = $lightbox.outerHeight(false)-$lbnav.outerHeight(false);
                img.css('max-height', maxHeight);
        };

        jQuery(window).resize(function(){
            fixImage();
        });

        var currentImage = new Image();

        var clearCurrengImage = function(){
            currentImage.onload = null;
            currentImage        = null;
            //currentImage.src    = null;

            $lightbox.find('.lightbox-alignment').remove();
            $lightbox.find('.lightbox-alignment2').remove();
            $lightbox.find('img').remove();
        }

        var clearLoader = function(){
            $lightbox.find('.lb-loader').remove();
        }

        var addLoader = function(){
            $lightbox.append('<div class="lb-loader"/>');
        }

        //DISABLE TEXT SELECTION
        $lightbox.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);

        //stop timer
        var stopTimer = function(){
            $lightboxTimer.stop( true, true ).width( 0 );
        };

        var stopInterval = function(){
            clearInterval(vars.interval);
        };

        //update timer
        var updateTimer = function(){
            if(ops.lightBoxShowTimer == false)return;
            $lightboxTimer.css({'position': 'absolute', 'bottom':0}).animate( { width: '100%' }, ops.lightBoxPlayInterval, 'linear', function(){ stopTimer(); } );
        };

        

        var playing = false;
        var closing = false;

        //Play slideshow
        var play = function(){
            vars.interval = setTimeout(function(){
                next();   
            }, ops.lightBoxPlayInterval);

            updateTimer();
        }
        
        //WHEN THE LIGHTBOX FINISH TO LOAD AN IMAGE
        var finish = function(){
            if(playing && closing==false){
                stopTimer();
                stopInterval();
                play();
            }
        }

        var $currentImage = $('<span />');
        var loadImage = function(image, firstTime){
                //Clear image and loader
                clearCurrengImage();
                clearLoader();

                //Add a loader
                addLoader();

                var scale = 0;
                var fade  = 0;
                if(firstTime != true){
                  scale = .9;
                  fade  = ops.lightBoxSpeedFx;
                }
                if(ops.lightBoxZoomAnim == false){
                  scale = 1;
                }
                
                //GET THE SRC OF THE IMAGE THAT WILL BE SHOWN IN THE LIGHTBOX
                var thumbnail = image;
                var src = thumbnail.data('lightbox');

                if(src == undefined){
                    src = thumbnail.attr('src');
                }

                /*if(src.indexOf('thumbnails') != -1){
                    var arr = src.split('thumbnails/');

                    src = arr[0]+arr[1];
                }*/

                //ADD TEXT TO THE LIGHTBOX
                var text    = thumbnail.siblings('div.lightbox-text').html();
                if(ops.lightBoxText == false){
                    text = "";
                }
                var txt = "<div><div>"+text+"</div></div>";
                $navCaption.html(txt);

                //LOAD THE NEW IMAGE
                currentImage = new Image();
                var $img = $(currentImage);
                var tmp = currentImage;

                currentImage.onload = function() {
                    if(tmp!=currentImage)return;
                    
                    clearLoader();
                    
                    var div1 = $('<div class="lightbox-alignment"></div>').appendTo($lightbox);
                    var div2 = $('<div class="lightbox-alignment2"></div>').appendTo(div1);
                    div2.append($img.css('margin-top', -$lbnav.outerHeight(false)).hide().scale(scale));

                    $img.fadeIn(fade).animate({
                        scale: '1'
                    },  {duration : ops.lightBoxSpeedFx , complete: function(){ finish(); } });

                    fixImage();
                    
                };

                /*currentImage.onerror=function(){
                    clearLoader();
                    alert("Error Loading the Image in this url: "+currentImage.src);
                }*/

                currentImage.src = src;
                $currentImage.stop(true);
                $currentImage = $(currentImage);

        };

        var lightboxOpen = false;

        //Open Light Box
        $container.on('click', 'div.gbox', function(){
            lightboxOpen = true;
            var $this = $(this);

            if($this.hasClass('gridFolder')){
              return;
            }

            var url = $this.data('url');
            if(url != undefined){
              window.location.href="http://"+url;
              return;
            }

            if(ops.lightBox == false){
              return;
            }

            closing = false;

            //set current index
            currentIndex = $container.find('.gbox').index(this);

            var img = $this.children('img');

            //ANIMATE THE NAVIGATION BAR OF THE LIGHTBOX
            $lbnav.animate({
                                'margin-top': 0
                            }, ops.lightBoxSpeedFx);
            
            //SHOW THE LIGHTBOX
            $lightbox.fadeIn(ops.lightBoxSpeedFx);

            loadImage(img, true);

        });

        //Stop propagation
        $lightbox.on('click', 'div', function(e){
            e.stopPropagation();
        });
        $lightbox.on('click', 'img', function(e){
            e.stopPropagation();
        });

        //Close Light Box
        $lightbox.on('click', '.lightbox-alignment', function(){
            close();
        });

        //Close Light Box
        $lightbox.on('click', '.lightbox-alignment2', function(){
            close();
        });
        
        //Close Light Box
        $lightbox.on('click', function(){
            close();
        });

        $navClose.on('click', function(){
            close();
        });

        var close = function(){
            if(ops.lightBoxStopPlayOnClose){
                $navPlay.removeClass('selected');
                playing = false;
            }

            lightboxOpen = false;
            closing = true;
            stopTimer();
            stopInterval();

            $lightbox.find('.lb-loader').remove();
            var scale = 0;
            if(ops.lightBoxZoomAnim == false){
              scale = 1;
            }

            var currentImg = $lightbox.find('img').stop().show();
            $lbnav.animate({
                                'margin-top': -$lbnav.outerHeight(false)
                            }, ops.lightBoxSpeedFx);

            if(currentImg[0] != undefined){
                currentImg.animate({
                          scale: scale
                      }, ops.lightBoxSpeedFx, function(){
                          $lightbox.fadeOut(100);
                          //$body.css('overflow', 'auto');
                      } );
              }else{
                  $lightbox.fadeOut(100);
                  //$body.css('overflow', 'auto');
              }

            
        };

        //Next Post
        var next = function(){
            closing = false;
            var boxes = $container.find('.gbox');

            currentIndex+=1;

            if(currentIndex >= boxes.length){
              currentIndex = 0;
            }

            if(!boxes.eq(currentIndex).is(":visible") || boxes.eq(currentIndex).hasClass('gridFolder') ){//If next is not visible then find the some one that is.
                var cont = currentIndex;
                for(var i=0; i<boxes.length; i++){
                    cont++;
                    if(cont>=boxes.length){
                      cont = 0;
                    }

                    var bx = boxes.eq(cont);
                    if(bx.is(":visible") && bx.hasClass('gridFolder') == false){
                     currentIndex = cont;  
                      break;
                    }
                }
            }

            var img = boxes.eq(currentIndex).children('img');

            loadImage(img);
        };

        //Prev Post
        var prev = function(){
            closing = false;
            var boxes = $container.find('.gbox');

            currentIndex-=1;


            if(currentIndex < 0){
              currentIndex = boxes.length-1;
            }

            if(!boxes.eq(currentIndex).is(":visible") || boxes.eq(currentIndex).hasClass('gridFolder')){//If prev is not visible then find the some one that is.
                var cont = currentIndex;
                for(var i=0; i<boxes.length; i++){
                    cont--;
                    if(cont<0){
                      cont = boxes.length-1;
                    }

                    var bx = boxes.eq(cont);
                    if(bx.is(":visible") && bx.hasClass('gridFolder') == false){
                     currentIndex = cont;  
                      break;
                    }
                }
            }

            var img = boxes.eq(currentIndex).children('img');

            loadImage(img);
        };


        //TRIGGER EVENTS
        $navNext.on('click', function(){  
            stopTimer();
            stopInterval();    
            next();
        });

        $lightbox.on('click', 'img', function(){
            stopTimer();
            stopInterval();
            next();
        });

        $navPrev.on('click', function(){
            stopTimer();
            stopInterval();
            prev();
        });

        //Keyboard Navigation
        $(document).keyup(function(event){
            if(!ops.lightboxKeyboardNav)return;
            //prev keyCode
            if(event.keyCode == '37'){
                if(lightboxOpen == false)return;

                stopTimer();
                stopInterval();
                prev();
            }
            //next keyCode
            if(event.keyCode == '39'){
                if(lightboxOpen == false)return;

                stopTimer();
                stopInterval();
                next();
            }
            //esc keyCode
            if (event.keyCode == 27) { 
                close();
            }
        });

        //********swipe support***********

        if(ops.swipeSupport){
          //dont allow to drag the images with the mouse
          $lightbox.on('dragstart', function(event) { 
              event.preventDefault(); 
          });

          $lightbox.touchSwipeLeft(function() {
              stopTimer();
              stopInterval();
              next();
          })
          .touchSwipeRight(function() {
              stopTimer();
              stopInterval();
              prev();
          });
        }
        //********END swipe support***********

        if(ops.lightBoxAutoPlay){
            $navPlay.addClass('selected');
            playing = true;
        }

        //AUTO PLAY
        $navPlay.on('click', function(){

            $this = $(this);

            if($this.hasClass('selected')){
                $this.removeClass('selected');
                playing = false;
                stopTimer();
                stopInterval();
            }else{
                $this.addClass('selected');
                playing = true;
                play();
            }

            

        });

        //END LIGHTBOX //*********************************************************************//
    };
    //=End db





    if ( typeof options === 'string' ) {
      // call method
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function(){
        var instance = $.data( this, 'grid' );
        if ( !instance ) {
          logError( "cannot call methods on grid prior to initialization; " +
            "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for grid instance" );
          return;
        }
        // apply method
        instance[ options ].apply( instance, args );
      });
    } else {

      this.each(function() {
        var instance = $.data( this, 'grid' );

        if ( instance ) {
          // apply options & init
          instance.option( options || {} );
          instance._init();
        } else {
          
          //=db
          db(this);
          //=End db

          // initialize new instance
          $.data( this, 'grid', new $.Mason( options, this ) );
        }
      });
    }
    return this;
  };


  //Default settings
  $.fn.grid.defaults = {
      imagesOrder: 'byName', //byDate, byDateReverse, byName, byNameReverse, random
      albumsOrder: 'none', //byDate, byDateReverse, byName, byNameReverse, random, none
      folderCoverRandom: true, //If there is no folderCover image then get a random image from that folder to use it as cover folder
      foldersAtTop: true, //If you want the folders to be always first and then the images, if not they will be as you ordered above
      showNumFolder: true, //If you want to show the number of folders inside a folder
      showNumImages: true, //If you want to show the number of images inside a folder
      autoHideNumFolder: true, //If there is no folders inside a folder then don't show the number of folders
      autoHideNumImages: false, //If there is no images inside a folder then don't show the number of images
      isFitWidth: true, //Nedded to be true if you wish to center the gallery to its container
      lazyLoad: true, //If you wish to load more images when it reach the bottom of the page
      showNavBar: true, //Show the navigation bar?
      imagesToLoadStart: 15, //The number of images to load when it first loads the grid
      imagesToLoad: 5, //The number of images to load when you click the load more button
      horizontalSpaceBetweenThumbnails: 5, //The space between images horizontally
      verticalSpaceBetweenThumbnails: 5, //The space between images vertically
      columnWidth: 'auto', //The width of each columns, if you set it to 'auto' it will use the columns instead
      columns: 5, //The number of columns when you set columnWidth to 'auto'
      columnMinWidth: 195, //The minimum width of each columns when you set columnWidth to 'auto'
      isAnimated: true, //Animation when resizing or filtering with the nav bar
      caption: true, //Show the caption in mouse over
      captionType: 'grid', // 'grid', 'grid-fade', 'classic' the type of caption effect
      lightBox: true, //Do you want the lightbox?
      lightboxKeyboardNav: true, //Keyboard navigation of the next and prev image
      lightBoxSpeedFx: 500, //The speed of the lightbox effects
      lightBoxZoomAnim: true, //Do you want the zoom effect of the images in the lightbox?
      lightBoxText: true, //If you wish to show the text in the lightbox
      lightboxPlayBtn: true, //Show the play button?
      lightBoxAutoPlay: false, //The first time you open the lightbox it start playing the images
      lightBoxPlayInterval: 4000, //The interval in the auto play mode 
      lightBoxShowTimer: true, //If you wish to show the timer in auto play mode
      lightBoxStopPlayOnClose: false, //Stop the auto play mode when you close the lightbox?
      hashTag: false,
      swipeSupport: false,

      hiddenStyle: { opacity: 0, scale: 0.001 },
      visibleStyle: { opacity: 1, scale: 1 },
  };

})( window, jQuery );

