// workker.js
addEventListener("fetch", function(evt) {
	console.info(evt.request.url);
 	evt.respondWith(new Response("Hi, Barret Lee"));
});

console.info("workker.js");