

/**
 * Default variabls from page
 */
var menuWidth = 300;
var stylesPath = chrome.runtime.getURL('styles.css');
var currentPageHeadSource = document.head;
var currentPageBodySource = document.body;
var injectPageHTML = '';
var oringDocument = document;
var injectPageHTML = '<div id="injectHTMLtarget" style="width:100%; height:100%"></div>';
 if(!document.querySelector("injectedITXExtension")){
    // var injectHeadSource = '<link rel="stylesheet" href="' + stylesPath + '">';
    var injectHeadSource = document.createElement('link');
    injectHeadSource.rel = 'stylesheet';
    injectHeadSource.type = "text/css";
    injectHeadSource.href = stylesPath;

    currentPageHeadSource.appendChild(injectHeadSource);

    var injectBodySource = '<div style="float:left; width: 100%; height: 100%;">' +
    '<div style="height: 100%; width: calc(100% - ' + menuWidth + 'px);">' + currentPageBodySource + '</div>' +
    '<div id="injectedITXExtension" style="z-index:2147483647; position: fixed; bottom: 0; right: 0; height: 100%; width:' + menuWidth + 'px;">' + injectPageHTML + '</div>' +
    '</div>';
    console.log(currentPageBodySource);
    currentPageBodySource = injectBodySource;
    console.log(currentPageBodySource);

    
}
/*
document.querySelector(document).ready(function () {
  document.querySelector('#injectHTMLtarget').html('<h1>HSITX XPath Selector</h1>');
  document.querySelector('body').querySelectorAll("a").classList.add("itxClass");
  document.querySelector('body').querySelectorAll("a").attr("href", "#");
})
*/
/*
  

  var injectPageHTML = '<div id="injectHTMLtarget" style="width:100%; height:100%"></div>';
  if (currentPageSource.includes('injectedITXExtension')) {
    return 0;
  } else {
    document.querySelector('head').html(
      currentPageHeadSource +
      '<link rel="stylesheet" href="' + stylesPath + '">'
    );
    document.querySelector('body').html(
      '<div style="float:left; width: 100%; height: 100%;">' +
      '<div style="height: 100%; width: calc(100% - ' + menuWidth + 'px);">' + currentPageBodySource + '</div>' +
      '<div id="injectedITXExtension" style="z-index:2147483647; position: fixed; bottom: 0; right: 0; height: 100%; width:' + menuWidth + 'px;">' + injectPageHTML + '</div>' +
      '</div>'
    );
  }


/*
const itxClassEventElements = document.querySelectorAll(".itxClass");
for(const eventTarget of itxClassEventElements){
  eventTarget.addEventListener('click',function(event){
    var targetXpath = getXpath(event.target);
    document.getElementById('injectHTMLtarget').appendChild("<h5>" + targetXpath + "</h5>");
  })
}
document.querySelector(".itxClass").on('click', e => {
  var value = getXPath(e.target);
  document.querySelector('#injectHTMLtarget').insertAdjacentHTML("beforeend","<h5>" + value + "</h5>");
  //var value2 = lookupElementByXPath(createXPathFromElement(this));
  //document.querySelector('#injectHTMLtarget').insertAdjacentHTML("beforeend","<h5>" + value2 + "</h5>");
});

function getXPath(element) {
  var val = element.value;
  //aconsole.log("val="+val);
  var xpath = '';
  for (; element && element.nodeType == 1; element = element.parentNode) {
    //alert(element);
    var id = document.querySelector(element.parentNode).children(element.tagName).index(element) + 1;
    var currentParentChildCount = document.querySelector(element.parentNode).children(element.tagName).length;
    currentParentChildCount > 1 ? (id = '[' + id + ']') : (id = '');
    xpath = '/' + element.tagName.toLowerCase() + id + xpath;
  }
  var resultXPath = '/html/body' + xpath.substring(21);
  return resultXPath;
}

function createXPathFromElement(elm) { 
  var allNodes = document.getElementsByTagName('*'); 
  for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) 
  { 
      if (elm.hasAttribute('id')) { 
              var uniqueIdCount = 0; 
              for (var n=0;n < allNodes.length;n++) { 
                  if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++; 
                  if (uniqueIdCount > 1) break; 
              }; 
              if ( uniqueIdCount == 1) { 
                  segs.unshift('id("' + elm.getAttribute('id') + '")'); 
                  return segs.join('/'); 
              } else { 
                  segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]'); 
              } 
      } else if (elm.hasAttribute('class')) { 
          segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]'); 
      } else { 
          for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) { 
              if (sib.localName == elm.localName)  i++; }; 
              segs.unshift(elm.localName.toLowerCase() + '[' + i + ']'); 
      }; 
  }; 
  return segs.length ? '/' + segs.join('/') : null; 
}; 

function lookupElementByXPath(path) { 
  var evaluator = new XPathEvaluator(); 
  var result = evaluator.evaluate(path, document.documentElement, null,XPathResult.FIRST_ORDERED_NODE_TYPE, null); 
  return  result.singleNodeValue; 
} 
*/