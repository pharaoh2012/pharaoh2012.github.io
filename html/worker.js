// workker.js
// addEventListener("fetch", function(evt) {
// 	console.info(evt.request.url);
// 	evt.respondWith(new Response("Hi, Barret Lee"));

// });

addEventListener("fetch", function(evt) {
	evt.respondWith(new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(new Response("Hi, Barret Lee" + new Date()));
		}, 1000);
	}));
});

console.info("workker.js");