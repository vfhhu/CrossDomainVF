//---------------------------------------------------


//if you need to change more,add a new Listener
  
 //set  Access-Control-Allow-Origin
 chrome.webRequest.onHeadersReceived.addListener(function(details) {
		details.responseHeaders.push({name:'Access-Control-Allow-Origin',value:"*"});
		console.log(details.responseHeaders)
		  return {responseHeaders:details.responseHeaders};
 },{urls: ["<all_urls>"]}, ["responseHeaders","blocking"]);

//---------------------------------------------------