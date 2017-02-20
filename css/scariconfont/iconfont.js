;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.58 704.328c-115.01 0-208.247-93.237-208.247-208.247S412.57 287.833 527.58 287.833s208.247 93.237 208.247 208.247S642.591 704.328 527.58 704.328zM527.58 319.871c-97.319 0-176.209 78.89-176.209 176.209S430.262 672.29 527.58 672.29s176.209-78.89 176.209-176.209S624.899 319.871 527.58 319.871zM543.596 608.21l-32.041 0 0-96.108-96.114 0 0-32.038 96.114 0 0-96.117 32.041 0 0 96.117 96.114 0 0 32.038-96.114 0L543.596 608.21z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M496 703.625c-114.666 0-207.625-92.958-207.625-207.625S381.333 288.375 496 288.375 703.625 381.334 703.625 496 610.667 703.625 496 703.625zM496 320.317c-97.028 0-175.683 78.655-175.683 175.683S398.972 671.683 496 671.683 671.683 593.028 671.683 496 593.028 320.317 496 320.317zM384.196 480.032l223.599 0 0 31.939L384.196 511.971 384.196 480.032z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.85 123.721l-36.235-36.234-381.621 381.621-381.622-381.621-36.234 36.234 381.621 381.622-381.621 381.621 36.234 36.235 381.622-381.621 381.621 381.621 36.235-36.235-381.621-381.621z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)