### Sync vs Async in Node.js

```markdown
• Sync vs Async in Node.js

Node.js supports both synchronous and asynchronous programming models.
Understanding their differences is crucial for writing efficient and scalable applications.

• Synchronous (Sync)

- Executes code sequentially, one operation at a time.
- Blocks further execution until the current task completes.
- Simple to understand but can lead to performance issues for I/O-heavy tasks.

• Example (Sync File Read)

const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // Blocks further code execution
console.log('File read complete!');
```

---

### Asynchronous (Async)

- Non-blocking execution allows the program to perform other tasks while waiting for an operation to complete.
- Ideal for I/O operations, database queries, etc.
- Uses callbacks, promises, or `async/await` for handling results.

**Example 1 (Async File Read with Callback)**
```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('File reading in progress...');
```

**Example 2 (Async with Promises)**
```javascript
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
console.log('File reading in progress...');
```

**Example 3 (Async with `async/await`)**
```javascript
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile();
console.log('File reading in progress...');
```

---

#### Key Differences

| Feature           | Synchronous                 | Asynchronous                 |
|--------------------|-----------------------------|------------------------------|
| Execution Model    | Blocking                    | Non-blocking                 |
| Performance        | Slower for I/O operations   | Efficient for I/O operations |
| Use Cases          | CPU-bound tasks             | I/O-bound tasks              |

---

#### When to Use..?

- **Synchronous**: Simple scripts or tasks where blocking is acceptable.
- **Asynchronous**: Real-world applications requiring high concurrency (e.g., servers, APIs).

---

### My URL Module Project - Setup Instructions

**1. Initialize Node.js Project**
Run the following commands to create a project folder and initialize it:

```bash
mkdir my-url-repo
cd my-url-repo
npm init -y
```

**Install the URL module with npm**
```javascript
npm install url
```

**Create an index.js file with the following code**
```javascript
const url = require('url');

const myUrl = new URL('https://www.example.com/pathname/?search=test#hash');
console.log(myUrl.hostname);
```
------
------

## HTTP Methods and Architecture

Node.js supports various HTTP methods when handling requests in a server application. Below are the commonly used methods:

- **GET**: Retrieve data from the server.
- **POST**: Send data to the server.
- **PUT**: Update existing data.
- **DELETE**: Remove data from the server.
- **PATCH**: Modify part of existing data.
- **OPTIONS**: Retrieve information about the communication options for the target resource.
- **HEAD**: Retrieve response headers without the response body.

**Example of Handling HTTP Methods in Node.js**

Using the built-in `http` module:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request received');
    } else if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received');
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Node.js Server Architecture

1. **Single-Threaded, Event-Driven**
- Handles multiple requests asynchronously using the event loop.
- Non-blocking I/O operations improve performance.

2. **Common Architectures**
- **Monolithic**: Entire application runs as a single process.
- **Microservices**: Application is broken into smaller services that communicate via APIs.
- **MVC (Model-View-Controller)**: Separation of concerns for maintainability.

3. **Using Express.js for Better Routing**

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('GET request')); 
app.post('/', (req, res) => res.send('POST request'));
app.put('/', (req, res) => res.send('PUT request'));
app.delete('/', (req, res) => res.send('DELETE request'));

app.listen(3000, () => console.log('Server running on port 3000'));
```
------
------
