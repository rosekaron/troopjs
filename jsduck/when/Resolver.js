/**
 * In most situations, you'll deal with promises--observing them via {@link when#constructor} or {@link Promise#then},
 * or returning them to callers. Sometimes it can also be useful to hand out a resolver and allow another
 * (possibly untrusted) party to provide the resolution value for a promise.
 * This provides a way to allow an untrusted to safely provide a result to your code, *or to another
 * (also possibly untrusted) party*.
 *
 * In other words, you can allow two parties to communicate safely by giving the promise portion of a deferred to one,
 * and the resolver portion to the other.
 *
 * ## Adapting callback-based APIs
 *
 * Also, `when.js` resolver methods ({@link when#resolve} and {@link when#reject}) can be used as callback functions
 * by passing them to libraries that are built around traditional callback patterns, rather than promises.
 *
 * Here's a simple example:
 *
 *     function getWithPromise(url) {
 *       var deferred, resolver;
 *
 *       // Create a deferred, which has both a resolver and a promise part, and grab the resolver
 *       deferred = when.defer();
 *       resolver = deferred.resolver;
 *
 *       // We can pass the deferred resolver's resolve() and reject() methods directly as the callbacks
 *       // because the resolver's methods can be called without their original context.
 *       oldSchoolAjaxFunctionThatUsesCallbacks('GET', url, resolver.resolve, resolver.reject);
 *
 *       // Return the promise part to the caller.
 *       // Now the oldSchoolAjaxFunctionThatUsesCallbacks and our caller can communicate (in one direction)
 *       // without knowing about each other.  The resolver/promise separation also guarantess they cannot
 *       // corrupt each other.
 *       return deferred.promise;
 *     }
 *
 * ## Creating new APIs
 *
 * Adapting callback-based APIs is only one way to use resolvers. Sometimes it can also be useful to build your
 * own APIs that accept resolvers. For example, if you want to create a plugin architecture for your library
 * or product, a plugin could simply be an object with a method that accepts a resolver that can be used by
 * the plugin to signal that it has completed its work.
 *
 * This also allows the plugins to avoid creating their own deferreds/promises. Thus, they don't need to use
 * a promise library, and can easily use other callback-based APIs, if needed.
 *
 * For example:
 *
 *     // My Plugin API
 *     // {
 *     //   All plugins should implement the doPluginStuff method
 *     //
 *     //	 doPluginStuff: function(resolver) {}
 *     // }
 *
 *     // Simple plugin implementation
 *     {
 *       doPluginStuff: function(resolver, ...) {
 *         var awesomePluginResult;
 *
 *         try {
 *           // Do stuff
 *           // ...
 *           // Compute the result asynchronously, using some old school callback/errback-based API
 *           // Again, we can pass the resolver's methods directly
 *
 *           computeAwesomePluginResultAsynchronously(resolver.resolve, resolver.reject);
 *         } catch(e) {
 *           // Uh oh, something went wrong in the syncrhonous portion above
 *
 *           resolver.reject(e);
 *         }
 *
 *         // Don't need to return anything
 *       }
 *     }
 *
 *     // Snippet from our library that calls our plugins
 *     function callPlugin(plugin) {
 *       var deferred = when.defer();
 *
 *       // Give the resolver to the plugin to do its work
 *       plugin.doPluginStuff(deferred.resolver);
 *
 *       // Return the promise, so our own code can observe the plugin result, even though
 *       // the plugin may be asynchronous.
 *       // This promise can also safely be exposed to any number of untrusted parties since the resolver
 *       // and promise will facilitate safe, one-way communication of the plugin's result.
 *       return deferred.promise;
 *     }
 *
 * <div class="notice">
 * Documentation for this class comes from <a href="https://github.com/cujojs/when/blob/master/docs/api.md">when.js</a>
 * and is available under <a href="ttp://www.opensource.org/licenses/mit-license.php">MIT license</a>.
 * </div>
 *
 * @class when.Resolver
 * @alternateClassName Resolver
 * @author Brian Cavalier
 */

/**
 * @inheritdoc when#resolve
 * @method resolve
 * @return {undefined}
 */

/**
 * @inheritdoc when#reject
 * @method reject
 * @return {undefined}
 */

/**
 * Notify about the promise progress.
 * @method notify
 * @param {*} progress
 * @returns {Promise}
 */
