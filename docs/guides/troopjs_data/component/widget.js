/*
 * TroopJS data/component/widget
 * @license MIT http://troopjs.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
define([ "troopjs-browser/component/widget" ], function WidgetModule(Widget) {
	"use strict";

	var ARRAY_PUSH = Array.prototype.push;

	/**
	 * Widget that provides the data query api.
	 * @class data.component.widget
	 * @extends browser.component.widget
	 */
	return Widget.extend({
		"displayName" : "data/component/widget",

		/**
		 * Issues publish on query topic
		 * @returns {Promise} of query result(s)
		 */
		"query" : function query() {
			var me = this;
			var args = [ "query" ];

			ARRAY_PUSH.apply(args, arguments);

			return me.publish.apply(me, args);
		}
	});
});
