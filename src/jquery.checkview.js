(function ( $ ) {
  
  var pluginName = 'checkview';
  
  var defaults = {
    'checkedClass': 'checked',
    'wrapperTag': 'span', 
    'wrapperClass': 'checkview', 
    'iconClass': 'icon-ok',
    'preventSubmit': false
  };

  function CheckView(element, options) {
        
    var 
      doc = element.ownerDocument,
      checkView = this,
      eventType = 'click',
      $element = $(element),
      $label,
      toggleClickTimeoutId = null;

    // Init element props      
    element.tabIndex = "-1";
    element.style.position = 'absolute';
    element.style.width = '0';
    element.style.height = '0'; 
    
    var nextElement = $(element).next();
    var previousElement = $(element).prev();
    var valueElement = nextElement && nextElement.tagName === "input" && nextElement.type === "hidden" ? nextElement
       : previousElement && previousElement.tagName === "input" && previousElement.type === "hidden" ? previousElement
       : null;
    
    // Init container
    var containerView = $element.parents("." + options.wrapperClass)[0];
    if (!containerView) {
      // Create the wrapper if it doesn't exist
      containerView = doc.createElement(options.wrapperTag || 'span');
      element.parentNode.insertBefore(containerView, element);
    }
    var $containerView = $(containerView);
    
    // Init container props
    containerView.tabIndex = "0";
    containerView.className = options.wrapperClass;
    containerView.style.display = 'inline-block';
    containerView.style.cursor = "pointer";
    
    // Init icon
    var checkmarkIcon = doc.createElement('i');
    checkmarkIcon.className = options.iconClass;
    containerView.appendChild(checkmarkIcon);
    
    // private methods
    function init() {
      
      if (!element.value) {
        element.value = "on";
      }

      element.style.visibility = "hidden";
      containerView.appendChild(element);
      
      $containerView.bind('click', function(event) {
        if (event.target !== element && !$(event.target).parents('label').length) {
          toggleClick();
        }
      });

      $containerView.bind('keypress', function(event) {
        if (event.which === 32) {
          element.checked = !element.checked;
          checkView.invalidate();
        }
        if (event.which === 13 && !options.preventSubmit) {
          if (element.form) {
            element.form.submit();
          }
        }
      });
        
      $element.bind('change', function(event) {
        checkView.invalidate();
        invalidateRadios.call(this);
        window.clearTimeout(toggleClickTimeoutId);
      });
      
      $(window).bind('resize', function() {
        checkView.invalidate();
      });
      
      this.invalidate();
      
    }
    
    /**
     * Toggles state of input-checkbox 
     */
    function toggleClick() {
      element.checked = !element.checked;
      $(element).trigger('change');
    } 
    
    /**
     * Layouts the component
     */
    function layout() {
      var $containerView = $(containerView);
      if (element.checked) {
        $containerView.addClass(options.checkedClass);
      } else {
        $containerView.removeClass(options.checkedClass);
      }
      var $copyStyles = $(['margin-left', 'margin-right']);
      var css = {};
      $copyStyles.each(function() {
        var value = $element.css(this);
        if (value) {
          css[this] = value;
        }
      });
      $containerView.css(css);
      checkmarkIcon.style.visibility = element.checked ? '' : 'hidden';
    }
    
    /**
     * Invalidates radio-buttons
     */
    function invalidateRadios() {
      $("input[type='radio'][name='" + element.name + "']", element.form).each(function() {
        var checkview = $(this).data('checkview');
        if (checkview && this !== element) {
          checkview.invalidate();
        }
      });
    }
    
    // public methods
    
    /**
     * Sets the checkview's state
     */
    this.setChecked = function(bool) {
      element.checked = bool;
      if (bool) {
        $element.attr('checked', 'checked');
      } else {
        $element.removeAttr('checked');
      }
      this.invalidate();
    };
    
    /**
     * Returns the checkview's state
     */
    this.isChecked = function() {
      return $(element).is(":checked");
    };
    
    /**
     * Refreshes the component
     */
    this.invalidate = function() {
      layout.call(this);
    };

    // init
    init.call(this);
  }

  // bootstrap plugin
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$(this).data(pluginName)) {
          $(this).data(pluginName, new CheckView(this, $.extend({}, defaults, options)));
      }
      return $(this);
    });
  };

})( jQuery );