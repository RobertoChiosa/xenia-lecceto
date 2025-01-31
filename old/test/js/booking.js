
    (function() {
        var randomId = Math.floor(Math.random() * 100000);
        var targetElemId = 'bcom_rwidget_' + randomId;
        document.write('<div id="' + targetElemId + '"></div>');
        var script   = document.createElement('script');
        script.type  = 'text/javascript';
        script.async = true;
        script.src   = 'http://www.booking.com/review_widget/it/casa-lecceto.it.html?tmpl=review_widget/review_widget&wid=' + targetElemId + '&wtype=box_small&hotel_id=579983&widget_language=it';
        var node     = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(script, node);
    }());
