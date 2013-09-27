/**
 * Tap Tempo by Mr Chimp
 */
var Taptempo = (function(options) {
  var tap_stack      = [],
      reset_callback = options.reset_callback || null,
      reset_time     = options.reset_time || 3000,
      return_ms      = options.return_ms || false,
      reset_timeout;

  function tap () {
    tap_stack.push(new Date());

    var total = 0,
        size = tap_stack.length - 1,
        average;

    window.clearTimeout(reset_timeout);
    reset_timeout = window.setTimeout(reset, reset_time);

    if (size > 0) {
      for (x = 0; x < size; x++) {
        total = total + (tap_stack[x + 1] - tap_stack[x]);
      }
      average = total / size;
    } else {
      return 0;
    }
    if (return_ms) {
      return average;
    } else {
      return mstobpm(average);
    }
  }

  function mstobpm (ms) {
    return 60000 / ms;
  }

  function reset () {
    tap_stack = [];
    reset_callback();
  }

  return {
    tap: tap,
    mstobpm: mstobpm
  };
});