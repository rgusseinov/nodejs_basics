const http = require('http');

const PORT = process.env.PORT || 5000;

// const dotenv = require('dotenv');
// dotenv.config();

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'content-type': 'application/json'
	})

	if (req.url === '/users'){
		res.end(JSON.stringify([
				{ id: 1, name: "Alice" },
			{ id: 2, name: "Bob" },
			{ id: 3, name: "Charlie" }]));
	}

	if (req.url === '/posts'){
		res.end(JSON.stringify([
			{ id: 1, title: "JavaScript Basics", content: "Learn the fundamentals of JavaScript." },
			{ id: 2, title: "Async Programming", content: "Understanding promises and async/await." },
			{ id: 3, title: "Node.js Guide", content: "How to build server-side applications with Node.js." }
		]));
	}
	
	// res.end(`Сервер стартовал!`);
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));