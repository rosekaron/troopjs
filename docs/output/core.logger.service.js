Ext.data.JsonP.core_logger_service({"uses":[],"mixedInto":[],"extends":"core.component.service","alternateClassNames":[],"parentMixins":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='docClass'>core.event.emitter</a><div class='subclass '><a href='#!/api/core.component.base' rel='core.component.base' class='docClass'>core.component.base</a><div class='subclass '><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='docClass'>core.component.gadget</a><div class='subclass '><a href='#!/api/core.component.service' rel='core.component.service' class='docClass'>core.component.service</a><div class='subclass '><strong>core.logger.service</strong></div></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/service2.html#core-logger-service' target='_blank'>service.js</a></div></pre><div class='doc-contents'><p>Provides logging as a service, with appender support.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appenders</span> : Function...<div class='sub-desc'><p>One or more message appender(s).</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-configure' class='name expandable'>configure</a>( <span class='pre'>[config]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Add to the component configurations, possibly merge with the existing ones. ...</div><div class='long'><p>Add to the component configurations, possibly <a href=\"#!/api/utils.merge\" rel=\"utils.merge\" class=\"docClass\">merge</a> with the existing ones.</p>\n\n<pre><code>    var List = Component.extend({\n        \"sig/start\": function start() {\n            // configure the List.\n            this.configure({\n                \"type\": \"list\",\n                \"cls\": [\"list\"]\n            });\n        }\n    });\n    var Dropdown = List.extend({\n        \"sig/start\": function start() {\n            // configure the Dropdown.\n            this.configure({\n                \"type\": \"dropdown\",\n                \"cls\": [\"dropdown\"],\n                \"shadow\": true\n            });\n        }\n    });\n\n    var dropdown = new Dropdown();\n\n    // Overwritten: \"dropdown\"\n    print(dropdown.configuration.id);\n    // Augmented: [\"list\",\"dropdown\"]\n    print(dropdown.configuration.cls);\n    // Added: true\n    print(dropdown.configuration.shadow);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : ...Object (optional)<div class='sub-desc'><p>Config(s) to add.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new configuration.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String|Object<div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : Function (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-off' class='name expandable'>off</a>( <span class='pre'>type, [context], [callback]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope the callback to remove</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-off\" rel=\"core.event.emitter-method-off\" class=\"docClass\">core.event.emitter.off</a></p></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-on' class='name expandable'>on</a>( <span class='pre'>type, context, callback, [data]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>The context to scope the callback to.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The event listener function.</p>\n</div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-on\" rel=\"core.event.emitter-method-on\" class=\"docClass\">core.event.emitter.on</a></p></div></div></div><div id='method-peek' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-peek' class='name expandable'>peek</a>( <span class='pre'>type, [value]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns value in handlers MEMORY ...</div><div class='long'><p>Returns value in handlers MEMORY</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>event type to peek at</p>\n</div></li><li><span class='pre'>value</span> : * (optional)<div class='sub-desc'><p>Value to use <em>only</em> if no memory has been recorder</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-publish' class='name expandable'>publish</a>( <span class='pre'>type, [args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Emit a public event that can be subscribed by other components. ...</div><div class='long'><p>Emit a public event that can be subscribed by other components.</p>\n\n<p>Handlers are run in a pipeline, in which each handler will receive muted\ndata params depending on the return value of the previous handler:</p>\n\n<ul>\n<li>The original data params from <a href=\"#!/api/core.component.gadget-method-publish\" rel=\"core.component.gadget-method-publish\" class=\"docClass\">publish</a> if this's the first handler, or the previous handler returns <code>undefined</code>.</li>\n<li>One value as the single argument if the previous handler return a non-array.</li>\n<li>Each argument value deconstructed from the returning array of the previous handler.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The topic to publish.</p>\n</div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Additional params that are passed to the handler function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-signal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-signal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-signal' class='name expandable'>signal</a>( <span class='pre'>_signal, [args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Signals the component ...</div><div class='long'><p>Signals the component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_signal</span> : String<div class='sub-desc'><p>Signal</p>\n</div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>signal arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-start' class='name expandable'>start</a>( <span class='pre'>[args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Start the component life-cycle. ...</div><div class='long'><p>Start the component life-cycle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-stop' class='name expandable'>stop</a>( <span class='pre'>[args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the component life-cycle. ...</div><div class='long'><p>Stops the component life-cycle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>event, callback, data</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Listen to an event that are emitted publicly. ...</div><div class='long'><p>Listen to an event that are emitted publicly.</p>\n<p>Subscribe to public events from this component, forcing the context of which to be this component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-task' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base.html#core-component-base-method-task' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-task' class='name expandable'>task</a>( <span class='pre'>resolver, [name]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Schedule a new promise that runs on this component, sends a \"task\" signal once finished. ...</div><div class='long'><p>Schedule a new promise that runs on this component, sends a \"task\" signal once finished.</p>\n\n<p><strong>Note:</strong> It's recommended to use <strong>this method instead of an ad-hoc promise</strong> to do async lift on this component,\nsince in additional to an ordinary promise, it also helps to track the context of any running promise,\nincluding it's name, completion time and a given ID.</p>\n\n<pre><code>var widget = Widget.create({\n    \"sig/task\" : function(promise) {\n        print('task %s started at: %s, finished at: %s', promise.name, promise.started);\n    }\n});\n\nwidget.task(function(resolve) {\n    $(this.$element).fadeOut(resolve);\n}, 'animate');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolver</span> : Function<div class='sub-desc'><p>The task resolver function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolve</span> : Function<div class='sub-desc'><p>Resolve the task.</p>\n</div></li><li><span class='pre'>reject</span> : Function<div class='sub-desc'><p>Reject the task.</p>\n</div></li><li><span class='pre'>notify</span> : Function<div class='sub-desc'><p>Notify the progress of this task.</p>\n</div></li></ul></div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>displayName and instanceCount</p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>event, callback</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a public event listener. ...</div><div class='long'><p>Remove a public event listener.</p>\n<p>Unsubscribe from public events in context of this component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-hub/logger/debug' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.logger.service'>core.logger.service</span><br/><a href='source/service2.html#core-logger-service-event-hub/logger/debug' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.logger.service-event-hub/logger/debug' class='name expandable'>hub/logger/debug</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Log a debug on hub event. ...</div><div class='long'><p>Log a debug on hub event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-hub/logger/error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.logger.service'>core.logger.service</span><br/><a href='source/service2.html#core-logger-service-event-hub/logger/error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.logger.service-event-hub/logger/error' class='name expandable'>hub/logger/error</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Log an error on hub event. ...</div><div class='long'><p>Log an error on hub event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-hub/logger/info' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.logger.service'>core.logger.service</span><br/><a href='source/service2.html#core-logger-service-event-hub/logger/info' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.logger.service-event-hub/logger/info' class='name expandable'>hub/logger/info</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Log an info on hub event. ...</div><div class='long'><p>Log an info on hub event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-hub/logger/log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.logger.service'>core.logger.service</span><br/><a href='source/service2.html#core-logger-service-event-hub/logger/log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.logger.service-event-hub/logger/log' class='name expandable'>hub/logger/log</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Log a message on hub event. ...</div><div class='long'><p>Log a message on hub event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-hub/logger/warn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.logger.service'>core.logger.service</span><br/><a href='source/service2.html#core-logger-service-event-hub/logger/warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.logger.service-event-hub/logger/warn' class='name expandable'>hub/logger/warn</a>( <span class='pre'>message</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Log a warn on hub event. ...</div><div class='long'><p>Log a warn on hub event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","autodetected":{},"members":[{"owner":"core.component.base","tagname":"method","meta":{},"name":"configure","id":"method-configure"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"emit","id":"method-emit"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"off","id":"method-off"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"on","id":"method-on"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"peek","id":"method-peek"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"publish","id":"method-publish"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"signal","id":"method-signal"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"start","id":"method-start"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"stop","id":"method-stop"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"subscribe","id":"method-subscribe"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"task","id":"method-task"},{"owner":"core.mixin.base","tagname":"method","meta":{},"name":"toString","id":"method-toString"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"unsubscribe","id":"method-unsubscribe"},{"owner":"core.logger.service","tagname":"event","meta":{},"name":"hub/logger/debug","id":"event-hub/logger/debug"},{"owner":"core.logger.service","tagname":"event","meta":{},"name":"hub/logger/error","id":"event-hub/logger/error"},{"owner":"core.logger.service","tagname":"event","meta":{},"name":"hub/logger/info","id":"event-hub/logger/info"},{"owner":"core.logger.service","tagname":"event","meta":{},"name":"hub/logger/log","id":"event-hub/logger/log"},{"owner":"core.logger.service","tagname":"event","meta":{},"name":"hub/logger/warn","id":"event-hub/logger/warn"}],"tagname":"class","short_doc":"Provides logging as a service, with appender support. ...","superclasses":["core.mixin.base","core.event.emitter","core.component.base","core.component.gadget","core.component.service"],"meta":{},"subclasses":[],"files":[{"href":"service2.html#core-logger-service","filename":"service.js"}],"name":"core.logger.service","requires":[],"mixins":[],"component":false,"id":"class-core.logger.service","params":[{"type":"Function...","doc":"<p>One or more message appender(s).</p>\n","html_type":"Function...","tagname":"params","name":"appenders"}]});