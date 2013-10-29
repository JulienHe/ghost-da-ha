/*
* If you create a derivative, please leave this text intact:
*
* FlowType.JS 1.0
* Copyright (c) 2013, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/(function(e){e.fn.flowtype=function(t){var n=e.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35,lineRatio:1.45},t),r=function(t){var r=e(t),i=r.width(),s=i>n.maximum?n.maximum:i<n.minimum?n.minimum:i,o=s/n.fontRatio,u=o>n.maxFont?n.maxFont:o<n.minFont?n.minFont:o;r.css({"font-size":u+"px","line-height":u*n.lineRatio+"px"})};return this.each(function(){var t=this;r(this);e(window).resize(function(){r(t)})})}})(jQuery);