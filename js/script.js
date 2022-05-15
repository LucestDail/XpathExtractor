setTimeout(function () {
  // Configuration
  var menuWidth = 300;
  var currentPageUrl = window.location.href;
  var stylesPath = chrome.runtime.getURL('styles.css');
  var currentPageSource = $("html").html();
  var currentPageHeadSource = document.getElementsByTagName('head')[0].innerHTML;
  var currentPageBodySource = document.getElementsByTagName('body')[0].innerHTML;
  var injectPageHTML = '<div id="injectHTMLtarget" style="width:100%; height:100%"></div>';
  var currentDragTarget = null;
  /**
   * Adding All Elements effect(hover)
   * for checking area themselves
   */

  $(document).ready(function () {
    /**
     * html injection condition checking
     * if already injected specific keyword(in this case, injectedITXExtension), then just return 0
     * else, inject management concole div inject(named injectedITXExtension)
     */
    if (currentPageSource.includes('injectedITXExtension')) {
      return 0;
    } else {
      $('head').html(
        currentPageHeadSource +
        '<script src="xpathExtractor.js"></script>' +
        '<link rel="stylesheet" href="' + stylesPath + '">'
      );
      $('body').html(
        '<div style="float:left; width: 100%; height: 100%;">' +
        '<div style="height: 100%; width: calc(100% - ' + menuWidth + 'px);">' + currentPageBodySource + '</div>' +
        '<div id="injectedITXExtension" style="z-index:100; position: fixed; overflow: scroll; bottom: 0; right: 0; height: 100%; width:' + menuWidth + 'px;">' + injectPageHTML + '</div>' +
        '</div>'
      );
    }

/*
<label for="basic-url">Your crawl target info</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-companycode">companycode/</span>
  </div>
  <input type="text" class="form-control" id="companycode" aria-describedby="basic-addon-companycode">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-domainurl">domainurl/</span>
  </div>
  <input type="text" class="form-control" id="domainurl" aria-describedby="basic-addon-domainurl">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-domainquerystring">domainquerystring/</span>
  </div>
  <input type="text" class="form-control" id="domainquerystring" aria-describedby="basic-addon-domainquerystring">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-crawltype">crawltype/</span>
  </div>
  <input type="text" class="form-control" id="crawltype" aria-describedby="basic-addon-crawltype">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-crawllinktarget">crawllinktarget/</span>
  </div>
  <input type="text" class="form-control" id="crawllinktarget" aria-describedby="basic-addon-crawllinktarget">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon-descriptioninfo">descriptioninfo/</span>
  </div>
  <input type="text" class="form-control" id="descriptioninfo" aria-describedby="basic-addon-descriptioninfo">
</div>
*/
    $('#injectHTMLtarget').html(
      '<h1>HSITX XPath Selector</h1>'+
      '<button type="button" class="btn btn-primary">Link</button>'+
      '<label for="basic-url">Your crawl target info</label>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-companycode">companycode/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="companycode" aria-describedby="basic-addon-companycode">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-domainurl">domainurl/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="domainurl" aria-describedby="basic-addon-domainurl">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-domainquerystring">domainquerystring/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="domainquerystring" aria-describedby="basic-addon-domainquerystring">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-crawltype">crawltype/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="crawltype" aria-describedby="basic-addon-crawltype">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-crawllinktarget">crawllinktarget/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="crawllinktarget" aria-describedby="basic-addon-crawllinktarget">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '  <div class="input-group-prepend">'+
      '    <span class="input-group-text" id="basic-addon-descriptioninfo">descriptioninfo/</span>'+
      '  </div>'+
      '  <input type="text" class="form-control" id="descriptioninfo" aria-describedby="basic-addon-descriptioninfo">'+
      '</div>'
    );
    $('#injectHTMLtarget').on({
      'dragenter' : function(e){
        $(this).css('background-color','yellow');
      },
      'dragleave' : function(e){
        $(this).css('background-color','white');
      },
      'dragover' : function(e){
        e.preventDefault();
        e.stopPropagation();
      },
      'drop' : function(e){
        e.target.append(currentDragTarget);
        console.log(currentDragTarget);
      }
    });
    $('body').find("a").addClass("itxClass");
    $('body').find("a").attr("href", "#");
    $('body').find("a").attr("draggable", "true");
    $('body').find("a").on({
      'dragstart' : function(e){
        currentDragTarget = e.target;
      },
      'dragend':function(e){
        $('#injectHTMLtarget').css('background-color','white');
      }
    });
    // $('body').find("a").attr("ondragstart", "currentDragTarget = this; console.log(currentDragTarget.innerHTML);");
    /**
     * Get XPath (and Alert it testing)
     */
    $(".itxClass").click(function () {
      var value = getXPath(this);
      $('#injectHTMLtarget').append("<h5>" + value + "</h5>");
      //var value2 = lookupElementByXPath(createXPathFromElement(this));
      //$('#injectHTMLtarget').append("<h5>" + value2 + "</h5>");
    });

    function getXPath(element) {
      var val = element.value;
      //aconsole.log("val="+val);
      var xpath = '';
      for (; element && element.nodeType == 1; element = element.parentNode) {
        //alert(element);
        var id = $(element.parentNode).children(element.tagName).index(element) + 1;
        var currentParentChildCount = $(element.parentNode).children(element.tagName).length;
        currentParentChildCount > 1 ? (id = '[' + id + ']') : (id = '');
        xpath = '/' + element.tagName.toLowerCase() + id + xpath;
      }
      var resultXPath = '/html/body' + xpath.substring(21);
      return resultXPath;
    }

    function createXPathFromElement(elm) {
      var allNodes = document.getElementsByTagName('*');
      for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
        if (elm.hasAttribute('id')) {
          var uniqueIdCount = 0;
          for (var n = 0; n < allNodes.length; n++) {
            if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
            if (uniqueIdCount > 1) break;
          };
          if (uniqueIdCount == 1) {
            segs.unshift('id("' + elm.getAttribute('id') + '")');
            return segs.join('/');
          } else {
            segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
          }
        } else if (elm.hasAttribute('class')) {
          segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
        } else {
          for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
            if (sib.localName == elm.localName) i++;
          };
          segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
        };
      };
      return segs.length ? '/' + segs.join('/') : null;
    };

    function lookupElementByXPath(path) {
      var evaluator = new XPathEvaluator();
      var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    };
  })
});