Ext.data.JsonP.core_event_emitter({"uses":[],"mixedInto":[],"extends":"core.component.base","alternateClassNames":[],"parentMixins":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.component.base' rel='core.component.base' class='docClass'>core.component.base</a><div class='subclass '><strong>core.event.emitter</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='docClass'>core.component.gadget</a></div><div class='dependency'><a href='#!/api/core.pubsub.hub' rel='core.pubsub.hub' class='docClass'>core.pubsub.hub</a></div><h4>Files</h4><div class='dependency'><a href='source/emitter.html#core-event-emitter' target='_blank'>emitter.js</a></div></pre><div class='doc-contents'><p>The event module of TroopJS that provides common event handling capability, and some highlights:</p>\n\n<h2>Asynchronous handlers</h2>\n\n<p>Any event handler can be asynchronous depending on the <strong>return value</strong>:</p>\n\n<ul>\n<li>a Promise value makes this handler be considered asynchronous, where the next handler will be called\nupon the completion of this promise.</li>\n<li>any non-Promise values make it a ordinary handler, where the next handler will be invoked immediately.</li>\n</ul>\n\n\n<h2>Mutable event data</h2>\n\n<p>Additional event data can be passed to listeners when calling {link <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a>}, which can be further altered by the\nreturning value of the handler, depending on <strong>event type</strong> we're emitting:</p>\n\n<ul>\n<li><strong>foo[:pipleline]</strong> (default) In a piplelined event, handler shall return <strong>an array</strong> of params, that is the input for the next handler.</li>\n<li><strong>foo:sequence</strong>  In a sequential event, handler shall return <strong>a single</strong> param, that is appended to a list of params, that forms\nthe input for the next handler.</li>\n</ul>\n\n\n<p> On the caller side, the return value of the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> or <a href=\"#!/api/core.event.emitter-method-reemit\" rel=\"core.event.emitter-method-reemit\" class=\"docClass\">reemit</a> call also depends on the event type described above:</p>\n\n<ul>\n<li><strong>foo[:pipleline]</strong> (default) In a piplelined event, it will be <strong>one value</strong> that is the return value from the last handler.</li>\n<li><strong>foo:sequence</strong>  In a sequential event, it will be <strong>an array</strong> that accumulated the return value from all of the handlers.</li>\n</ul>\n\n\n<h2>Memorized emitting</h2>\n\n<p>A fired event will memorize the event data yields from the last handler, for listeners that are registered\nafter the event emitted that thus missing from the call, <a href=\"#!/api/core.event.emitter-method-reemit\" rel=\"core.event.emitter-method-reemit\" class=\"docClass\">reemit</a> will compensate the call with memorized data.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-configure' class='name expandable'>configure</a>( <span class='pre'>[configs]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Add to the component configurations, possibly merge with the existing ones. ...</div><div class='long'><p>Add to the component configurations, possibly merge with the existing ones.</p>\n\n<pre><code>    var List = Component.extend({\n        \"sig/start\": function start() {\n            // configure the List.\n            this.configure({\n                \"type\": \"list\",\n                \"cls\": [\"list\"]\n            });\n        }\n    });\n    var Dropdown = List.extend({\n        \"sig/start\": function start() {\n            // configure the Dropdown.\n            this.configure({\n                \"type\": \"dropdown\",\n                \"cls\": [\"dropdown\"],\n                \"shadow\": true\n            });\n        }\n    });\n\n    var dropdown = new Dropdown();\n\n    // Overwritten: \"dropdown\"\n    print(dropdown.configuration.id);\n    // Augmented: [\"list\",\"dropdown\"]\n    print(dropdown.configuration.cls);\n    // Added: true\n    print(dropdown.configuration.shadow);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>configs</span> : Object... (optional)<div class='sub-desc'><p>Config(s) to add.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new configuration.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners in sequence of their subscribing,\noptionally pass data values t...</div><div class='long'><p>Trigger an event which notifies each of the listeners in sequence of their subscribing,\noptionally pass data values to the listeners.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to emit</p>\n</div></li><li><span class='pre'>args</span> : Mixed... (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'><p>promise Promise of the return values yield from the listeners at all.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-off' class='name expandable'>off</a>( <span class='pre'>event, [context], [listener]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener(s) from a subscribed event, if no listener is specified,\nremove all listeners of this event. ...</div><div class='long'><p>Remove listener(s) from a subscribed event, if no listener is specified,\nremove all listeners of this event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event that the listener subscribes to.</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context that bind to the listener.</p>\n</div></li><li><span class='pre'>listener</span> : Function... (optional)<div class='sub-desc'><p>One more more callback listeners to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-on' class='name expandable'>on</a>( <span class='pre'>event, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event. ...</div><div class='long'><p>Adds a listener for the specified event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope callbacks to.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-peek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-peek' class='name expandable'>peek</a>( <span class='pre'>event</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns value in handlers MEMORY ...</div><div class='long'><p>Returns value in handlers MEMORY</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>to peek at</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-reemit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-reemit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-reemit' class='name expandable'>reemit</a>( <span class='pre'>event, senile, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Re-emit any event that are previously triggered, any (new) listeners will be called with the memorized data\nfrom the ...</div><div class='long'><p>Re-emit any event that are <strong>previously triggered</strong>, any (new) listeners will be called with the memorized data\nfrom the previous event emitting procedure.</p>\n\n<pre><code>// start widget1 upon the app loaded.\napp.on('load', function(url) {\n    widget1.start(url);\n});\n\n// Emits the load event on app.\napp.emit('load', window.location.hash);\n\n// start of widget2 comes too late for the app start.\napp.on('load', function(url) {\n    // Widget should have with the same URL as with widget1.\n    widget2.start(url);\n});\n\n$.ready(function() {\n    // Compensate the \"load\" event listeners that are missed.\n    app.reemit();\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to re-emit, dismiss if it's the first time to emit this event.</p>\n</div></li><li><span class='pre'>senile</span> : Boolean<div class='sub-desc'><p>Whether to trigger listeners that are already handled in previous emitting.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context object to scope this re-emitting.</p>\n</div></li><li><span class='pre'>callback</span> : Function... (optional)<div class='sub-desc'><p>One or more specific listeners that should be affected in the re-emitting.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-signal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-signal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-signal' class='name expandable'>signal</a>( <span class='pre'>_signal</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Signals the component ...</div><div class='long'><p>Signals the component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_signal</span> : Object<div class='sub-desc'><p>{String} Signal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-start' class='name expandable'>start</a>( <span class='pre'></span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Start the component life-cycle. ...</div><div class='long'><p>Start the component life-cycle.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the component life-cycle. ...</div><div class='long'><p>Stops the component life-cycle.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-task' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-task' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-task' class='name expandable'>task</a>( <span class='pre'>resolver, [name]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Schedule a new promise that runs on this component, sends a \"task\" signal once finished. ...</div><div class='long'><p>Schedule a new promise that runs on this component, sends a \"task\" signal once finished.</p>\n\n<p><strong>Note:</strong> It's recommended to use <strong>this method instead of an ad-hoc promise</strong> to do async lift on this component,\nsince in additional to an ordinary promise, it also helps to track the context of any running promise,\nincluding it's name, completion time and a given ID.</p>\n\n<pre><code>var widget = Widget.create({\n    \"sig/task\" : function(promise) {\n        print('task %s started at: %s, finished at: %s', promise.name, promise.started);\n    }\n});\n\nwidget.task(function(resolve) {\n    $(this.$element).fadeOut(resolve);\n}, 'animate');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolver</span> : Function<div class='sub-desc'><p>The task resolver function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolve</span> : Function<div class='sub-desc'><p>Resolve the task.</p>\n</div></li><li><span class='pre'>reject</span> : Function<div class='sub-desc'><p>Reject the task.</p>\n</div></li><li><span class='pre'>notify</span> : Function<div class='sub-desc'><p>Notify the progress of this task.</p>\n</div></li></ul></div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>displayName and instanceCount</p>\n</div></li></ul></div></div></div></div></div></div></div>","autodetected":{},"members":[{"owner":"core.component.base","tagname":"method","meta":{},"name":"configure","id":"method-configure"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"emit","id":"method-emit"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"off","id":"method-off"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"on","id":"method-on"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"peek","id":"method-peek"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"reemit","id":"method-reemit"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"signal","id":"method-signal"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"start","id":"method-start"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"stop","id":"method-stop"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"task","id":"method-task"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"toString","id":"method-toString"}],"tagname":"class","short_doc":"The event module of TroopJS that provides common event handling capability, and some highlights:\n\nAsynchronous handle...","superclasses":["core.component.base"],"meta":{},"subclasses":["core.component.gadget","core.pubsub.hub"],"files":[{"href":"emitter.html#core-event-emitter","filename":"emitter.js"}],"name":"core.event.emitter","requires":[],"mixins":[],"component":false,"id":"class-core.event.emitter"});