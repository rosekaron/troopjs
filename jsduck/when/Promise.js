/**
 *
 * A Promise represents the pending result of a computation that may not have completed yet.
 *
 * ## Promise states
 *
 * A Promise starts in an *unresolved* or *pending* state.  For example, the Promise for a computation
 * that hasn't yet completed is in the *pending* state. At some point the computation will either complete
 * successfully, thus producing a result, or fail, either generating some sort of error or *reason* why
 * it could not complete.
 *
 * If the computation completes successfully, its Promise will transition to the *fulfilled* state, and
 * all consumers (see below) will be notified of the actual result. In other words, their callback will
 * be invoked and passed the result.
 *
 * If the computation fails, its Promise will transition to the *rejected* state, and all consumers will
 * be notified of the error or reason for the failure.  In other words, their `errorback` will be invoked
 * and passed the result.
 *
 * Once in the fulfilled or rejected state, a Promise become *immutable*--neither its state nor its result
 * (or error/reason) can be modified.
 *
 * ## Consumers
 *
 * A Promise can be safely given to any number of consumers, who can register to observe the result
 * (or error/reason) of the promise using {@link when#constructor}, or the promise's {@link #then}.
 *
 *     when(promise,
 *       function(result) {
 *         console.log("success: " + result);
 *       },
 *       function(reason) {
 *         console.log("failed: " + reason);
 *       }
 *     );
 *
 * or similarly with {@link #then}
 *
 *     promise.then(
 *       function(result) {
 *         console.log("success: " + result);
 *       },
 *       function(reason) {
 *         console.log("failed: " + reason);
 *       }
 *     );
 *
 * <div class="notice">
 * Documentation for this class comes from <a href="https://github.com/cujojs/when/blob/master/docs/api.md">when.js</a>
 * and is available under <a href="ttp://www.opensource.org/licenses/mit-license.php">MIT license</a>.
 * </div>
 *
 * @class when.Promise
 * @alternateClassName Promise
 * @author Brian Cavalier
 */

/**
 * Consumes a promise as the final handler in a thenable chain.
 *
 * 	promise.done(handleValue, handleError);
 *
 * One golden rule of promise error handling is:
 *
 * Either `return` the promise, thereby _passing the error-handling buck_ to the caller, or call {@link #done} and _assuming
 * responsibility for errors_.
 *
 * While {@link #then} is the primary API for transforming a promise's value and producing a new promise for the transformed
 * value, {@link #done} is used to terminate a promise chain, and extract the final value or error. It signals that you
 * are taking responsibility for the final outcome. If the chain was ultimately successful, `handleValue` will be
 * called with the final value. If the chain was not successful and an error propagated to the end, `handleError` will be
 * called with that error.
 *
 * Any error, either a returned rejection or a thrown exception, that propagates out of `handleValue` or `handleError`
 * will be rethrown to the host environment, thereby generating a loud stack trace (and in some cases, such as Node,
 * halting the VM). This provides immediate feedback for development time errors and mistakes, and greatly reduces
 * the chance of an unhandled promise rejection going silent.
 *
 * Note that there are still cases that {@link #done} simply cannot catch, such as the case of _forgetting to call
 * {@link #done}!_ Thus, {@link #done} and the unhandled rejection monitor are complimentary in many ways. In fact,
 * when the monitor is enabled, any error that escapes `handleValue` or `handleError` will also trigger the monitor.
 *
 * Since {@link #done}'s purpose is consumption rather than transformation, {@link #done} always returns `undefined`.
 *
 * @method done
 * @param {Function} handleValue
 * @param {Function} [handlerError]
 */

/**
 * The primary API for transforming a promise's value and producing a new promise for the transformed result,
 * or for handling and recovering from intermediate errors in a promise chain.
 *
 * 	// Main promise API
 * 	var newPromise = promise.then(onFulfilled, onRejected, onProgress);
 *
 * It arranges for:
 *
 * - `onFulfilled` to be called with the value after promise is fulfilled, or
 * - `onRejected` to be called with the rejection reason after promise is rejected.
 * - `onProgress` to be called with any progress updates issued by promise.
 *
 * Returns a trusted promise that will fulfill with the return value of either `onFulfilled` or `onRejected`,
 * whichever is called, or will reject with the thrown exception if either throws.
 *
 * A promise makes the following guarantees about handlers registered in the same call to `.then()`:
 *
 * - Only one of `onFulfilled` or `onRejected` will be called, never both.
 * - `onFulfilled` and `onRejected` will never be called more than once.
 * - `onProgress` may be called multiple times.
 *
 * @method then
 * @param {Function} onFulfilled
 * @param {Function} [onRejected]
 * @param {Function} [onProgress]
 * @returns {Promise}
 */

/**
 * Arranges to call `variadicOnFulfilled` with promise's values, which is assumed to be an array, as its argument list,
 * e.g. `variadicOnFulfilled.spread(undefined, array)`.
 *
 * 	promise.spread(variadicOnFulfilled);
 *
 * It's a shortcut for either of the following:
 *
 * 	// Wrapping variadicOnFulfilled
 * 	promise.then(function(array) {
 * 		return variadicOnFulfilled.apply(undefined, array);
 * 	});
 *
 * 	// Or using `when.apply`
 * 	promise.then(when.apply(variadicOnFulfilled));
 *
 * @method spread
 * @param {(Promise|*)[]} variadicOnFulfilled
 * @return {Promise}
 */

/**
 * Arranges to call `onRejected` on the promise's rejection reason if it is rejected.
 *
 * 	promise.catch(onRejected);
 * 	// or
 * 	promise.otherwise(onRejected);
 *
 *  It's a shortcut for:
 *
 * 	promise.then(undefined, onRejected);
 *
 * @method catch
 * @alias otherwise
 * @param {Function} onRejected
 * @return {Promise}
 */

/**
 * Finally allows you to execute "cleanup" type tasks in a promise chain.
 *
 * 	promise.finally(onFulfilledOrRejected);
 * 	// or
 * 	promise.ensure(onFulfilledOrRejected);
 *
 * It arranges for `onFulfilledOrRejected` to be called, _with no arguments_, when promise is either fulfilled or rejected.
 * `onFulfilledOrRejected` cannot modify promise's fulfillment value, but may signal a new or additional error by
 * throwing an exception or returning a rejected promise.
 *
 * {@link #finally} should be used instead of `promise.always.` It is safer in that it _cannot_ transform a failure
 * into a success by accident (which `always` could do simply by returning successfully!).
 *
 * When combined with {@link #catch}, {@link #finally} allows you to write code that is similar to the familiar
 * synchronous `catch/finally` pair. Consider the following synchronous code:
 *
 * 	try {
 * 		return doSomething(x);
 * 	} catch(e) {
 * 		return handleError(e);
 * 	} finally {
 * 		cleanup();
 * 	}
 *
 * Using {@link #finally}, similar asynchronous code (with `doSomething()` that returns a promise) can be written:
 *
 * 	return doSomething()
 * 		.catch(handleError)
 * 		.finally(cleanup);
 *
 * @method finally
 * @alias ensure
 * @param {Function} onFulfilledOrRejected
 * @return {Promise}
 */

/**
 * Returns a yielded promise
 *
 * 	originalPromise.yield(promiseOrValue);
 *
 * - If `originalPromise` is rejected, the returned promise will be rejected with the same reason
 * - If `originalPromise` is fulfilled, then it "yields" the resolution of the returned promise to `promiseOrValue`, namely:
 *   - If `promiseOrValue` is a value, the returned promise will be fulfilled with `promiseOrValue`
 *   - If `promiseOrValue` is a {@link Promise promise}, the returned promise will be:
 *     - fulfilled with the fulfillment value of `promiseOrValue`, or
 *     - rejected with the rejection reason of `promiseOrValue`
 *
 * In other words, it's much like:
 *
 * 	originalPromise.then(function() {
 * 		return promiseOrValue;
 * 	});
 *
 * @method yield
 * @param {Promise|*} promiseOrValue
 * @return {Promise}
 */

/**
 * If a promise is rejected, {@link #else} catches the rejection and resolves the returned promise with a default value.
 * This is a shortcut for manually {@link #catch}ing a promise and returning a different value, as such:
 *
 * 	var p1 = doAyncOperationThatMightFail();
 * 	return p1.catch(function() {
 * 		return defaultValue;
 * 	});
 *
 * @method else
 * @alias orElse
 * @param {*} defaultValue Default value to resolve with
 * @return {Promise}
 */

/**
 * Executes a function as a side effect when `promise` fulfills.
 *
 * 	promise.tap(onFulfilledSideEffect);
 *
 * Returns a new promise:
 *
 *  - If `promise` fulfills, `onFulfilledSideEffect` is executed:
 *    - If `onFulfilledSideEffect` returns successfully, the promise returned by {@link #tap} fulfills with `promise`'s
 *    original fulfillment value. That is, `onfulfilledSideEffect`'s result is discarded.
 *    - If `onFulfilledSideEffect` throws or returns a rejected promise, the promise returned by {@link #tap} rejects with
 *    the same reason.
 *  - If `promise` rejects, `onFulfilledSideEffect` is _not_ executed, and the promise returned by {@link #tap} rejects
 *  with `promise`'s rejection reason.
 *
 * These are equivalent:
 *
 * 	// Using only .then()
 * 	promise.then(function(x) {
 * 		doSideEffectsHere(x);
 * 		return x;
 * 	});
 *
 * 	// Using .tap()
 * 	promise.tap(doSideEffectsHere);
 *
 * @method tap
 * @param {Function} onFulfilledSideEffect
 * @return {Promise}
 */

/**
 * Create a new promise that will, after `milliseconds` delay, fulfill with the same value as promise.
 *
 * 	var delayedPromise = promise.delay(milliseconds);
 *
 * If `promise` rejects, `delayedPromise` will be rejected immediately.
 *
 * 	var delayed;
 *
 * 	// delayed is a pending promise that will become fulfilled
 * 	// in 1 second with the value "hello"
 * 	delayed = when('hello').delay(1000);
 *
 * 	// delayed is a pending promise that will become fulfilled
 * 	// 1 second after anotherPromise resolves, or will become rejected
 * 	// *immediately* after anotherPromise rejects.
 * 	delayed = promise.delay(1000);
 *
 * 	// Do something 1 second after promise resolves
 * 	promise.delay(1000).then(doSomething).catch(handleRejection);
 *
 * @method delay
 * @since 3.0
 * @param {Number} milliseconds Milliseconds to delay before resolving
 * @return {Promise}
 */

/**
 * Create a new promise that will reject after a timeout if `promise` does not fulfill or reject beforehand.
 *
 * 	var node = require('when/node');
 *
 * 	// Lift fs.readFile so it returns promises
 * 	var readFile = node.lift(fs.readFile);
 *
 * 	// Try to read the file, but timeout if it takes too long
 * 	function readWithTimeout(path) {
 * 		return readFile(path).timeout(500);
 * 	}
 *
 * @method timeout
 * @since 3.0
 * @param {Number} milliseconds Milliseconds to wait before timeout
 * @param {*} [reason=Error] Custom reason for the timeout rejection
 * @return {Promise}
 */

/**
 * Returns a snapshot descriptor of the current state of `promise`.
 *
 * 	var status = promise.inspect();
 *
 * This descriptor is _not live_ and will not update when `promise`'s state changes.
 * The descriptor is an object with the following properties. When promise is:
 *
 * - pending: `{ state: 'pending' }`
 * - fulfilled: `{ state: 'fulfilled', value: <promise's fulfillment value> }`
 * - rejected: `{ state: 'rejected', reason: <promise's rejection reason> }`
 *
 * While there are use cases where synchronously inspecting a promise's state can be helpful, the use of {@link #inspect}
 * is discouraged. It is almost always preferable to simply use `when()` or {@link #then} to be notified when the
 * promise fulfills or rejects.
 *
 * @method inspect
 * @return {Object} Status object
 * @return {"pending"|"fulfilled"|"rejected"} return.state Promises current state
 * @return {*} return.value Promises fulfillment value
 * @return {*} return.reason Promises rejection reason
 */

/**
 * Creates a new promise that follows `promise`, but which will invoke its handlers with their `this` set to object.
 * Normally, promise handlers are invoked with no specific `thisArg`, so with can be very useful when bridging
 * promises to object-oriented patterns and libraries.
 *
 * > **Note**: Promises returned from `with/withThis` are NOT Promises/A+ compliant,
 * > specifically violating [2.2.5](http://promisesaplus.com/#point-41)
 *
 * For example:
 *
 * 	function Thing(value, message) {
 * 		this.value = value;
 * 		this.message = message;
 * 	}
 *
 * 	Thing.prototype.doSomething = function(x) {
 * 		var promise = doAsyncStuff(x);
 * 		return promise.with(this) // Set thisArg to this thing instance
 * 			.then(this.addValue)  // Works since addValue will have correct thisArg
 * 			.then(this.format);   // all subsequent promises retain thisArg
 * 	};
 *
 * 	Thing.prototype.addValue = function(y) {
 * 		return this.value + y;
 * 	};
 *
 * 	Thing.prototype.format = function(result) {
 * 		return this.message + result;
 * 	};
 *
 * 	// Using it
 * 	var thing = new Thing(41, 'The answer is ');
 *
 * 	thing.doSomething(1)
 * 		.with(console) // Re-bind thisArg now to console
 * 		.then(console.log); // Logs 'The answer is 42'
 *
 * All promises created from `boundPromise` will also be bound to the same thisArg until {@link #with} is used
 * to re-bind or unbind it. In the previous example, the promise returned from `thing.doSomething` still has
 * its thisArg bound to `thing`. That may not be what you want, so you can unbind it just before returning:
 *
 * 	Thing.prototype.doSomething = function(x) {
 * 		var promise = doAsyncStuff(x);
 * 		return promise.with(this)
 * 			.then(this.addValue)
 * 			.then(this.format)
 * 			.with(); // Unbind thisArg
 * 	};
 *
 * @method with
 * @alias withThis
 * @since 3.0
 * @param {Object} object
 * @returns {Promise}
 */

/**
 * Registers a handler for progress updates from `promise`. It is a shortcut for:
 *
 * 	promise.then(void 0, void 0, onProgress);
 *
 * **Notes on Progress events**
 *
 * Progress events are not specified in Promises/A+ and are optional in Promises/A.
 * They have proven to be useful in practice, but unfortunately, they are also underspecified,
 * and there is no current _de facto_ or agreed-upon behavior in the promise implementor community.
 *
 * In when.js, progress events will be propagated through a promise chain:
 *
 *  1. In the same way as resolution and rejection handlers, your progress handler _MUST_ return
 *  a progress event to be propagated to the next link in the chain. If you return nothing, `undefined`
 *  will be propagated.
 *
 *  2. Also in the same way as resolutions and rejections, if you don't register a progress handler
 *  (e.g. .`then(handleResolve, handleReject <no-progress-handler>))`, the update will be propagated through.
 *
 *  3. **This behavior will likely change in future releases**: If your progress handler throws an exception,
 *  the exception will be propagated to the next link in the chain.
 *  The best thing to do is to ensure your progress handlers do not throw exceptions.
 *  > **Known Issue**: If you allow an exception to propagate and there are no more progress
 *  > handlers in the chain, the exception will be silently ignored. We're working on a solution to this.
 *
 * This gives you the opportunity to _transform_ progress events at each step in the chain so that they
 * are meaningful to the next step. It also allows you to choose _not_ to transform them,
 * and simply let them propagate untransformed, by not registering a progress handler.
 *
 * Here is an example:
 *
 * 	function myProgressHandler(update) {
 * 		logProgress(update);
 * 		// Return a transformed progress update that is
 * 		// useful for progress handlers of the next promise!
 * 		return update + 1;
 * 	}
 *
 * 	function myOtherProgressHandler(update) {
 * 		logProgress(update);
 * 	}
 *
 * 	var d = when.defer();
 * 	d.promise.then(undefined, undefined, myProgressHandler);
 *
 * 	var chainedPromise = d.promise.then(doStuff);
 * 	chainedPromise.then(undefined, undefined, myOtherProgressHandler);
 *
 * 	var update = 1;
 * 	d.notify(update);
 *
 * 	// Results in:
 * 	// logProgress(1);
 * 	// logProgress(2);
 *
 * @method progress
 * @since 3.0
 * @param {Function} onProgress
 */

/**
 * Return a promise that remains pending forever
 *
 * @method never
 * @returns {Promise} forever-pending promise.
 */