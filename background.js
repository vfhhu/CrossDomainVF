//---------------------------------------------------


 //set  Access-Control-Allow-Origin
 chrome.webRequest.onHeadersReceived.addListener(function(details) {
		details.responseHeaders.push({name:'Access-Control-Allow-Origin',value:"*"});
		  return {responseHeaders:details.responseHeaders};
 },{urls: ["<all_urls>"]}, ["responseHeaders","blocking"]);