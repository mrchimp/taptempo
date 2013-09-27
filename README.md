taptempo
========

Find the BPM of a piece of music by repeatedly hitting things.

Demo: [http://deviouschimp.co.uk/misc/taptempo](http://deviouschimp.co.uk/misc/taptempo)

Usage
=====

    <script src="taptempo.js" type="text/javascript"></script>
    <script type="text/javascript">
      var taptempo = new Taptempo(options);
    </script>

Options
=======

The options variable should be an object with any, all or none of the following attributes.

* reset_callback
  default = null
  Taptempo will reset after **reset_time** milliseconds of not being tapped. This function will then be called.
* reset_time
  default = 3000
  Number of milliseconds between tapping and Taptempo resetting.
* return_ms
  default = false
  If true returns average time between taps in milliseconds. Otherwise returns in beats per minute.