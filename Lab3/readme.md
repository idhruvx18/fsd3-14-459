# HTTP Module
Hyper Text Transfer Protocol
html = hyper text markup language
css = cascade style sheet
npm = node package manager

## API
any api can be of four types 
Get-->read
Delete-->delete
Api can be responsed by server with status code and JSON data api generally start with API/version.By default can check only get request to check other three request type like post put patch or delete we require frontend or third party api tester like postman,thunderclient,echoApi.

# Content-Type

`Content-Type` is an HTTP header that tells the server or browser what type of data is being sent in a request or response.

It helps the receiving system understand how the data should be interpreted.

## Common Content Types

### 1. text/html

`text/html` is used for HTML documents.

Example:

```html
<h1>Hello World</h1>
<p>This is an HTML page.</p>
```

HTTP header:

```text
Content-Type: text/html
```

It tells the browser that the response contains HTML content.

---

### 2. application/json

`application/json` is used for JSON data.

Example:

```json
{
  "name": "airtag",
  "type": "electronic",
}
```

HTTP header:

```text
Content-Type: application/json
```

It tells the receiving application that the data is formatted as JSON.

Note: The correct MIME type is `application/json`, not `text/json`.

---

### 3. text/plain

`text/plain` is used for ordinary plain text without HTML formatting or JSON structure.

Example:

```text
Hello World
This is a plain text file.
```

HTTP header:

```text
Content-Type: text/plain
```

It tells the browser or server that the content should be treated as plain text.

---

## Quick Comparison

| Content-Type       | Used For       | Example           |
| ------------------ | -------------- | ----------------- |
| `text/html`        | HTML documents | `<h1>Hello</h1>`  |
| `application/json` | JSON data      | `{"name":"John"}` |
| `text/plain`       | Plain text     | `Hello World`     |

## Summary

Content-Type is important when transferring data over HTTP because it tells the receiver how to interpret the content.

* `text/html` → HTML
* `application/json` → JSON
* `text/plain` → Plain text

Using the correct Content-Type helps browsers, servers, and applications process data correctly.

## status code
-200->ok
-201->created
-202->accepted
-204->no content
-400->bad request
-401->unauthorized
-403->forbidden
-404->not found
-500->Internal server error 
-503->service unavailable

## server can send header to send data
1. res.writeHeader()
2. res.setHeader()

## Server can set status code 
1. res.statusCode()
2. res.writeHeader()

## request method
1. get
2. post
3. put/patch
4. delete

## Routes

