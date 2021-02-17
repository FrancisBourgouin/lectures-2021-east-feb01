# W3D3 - User Authentication with Express

## Today's menu

- Creating a login form
- Server-side authentication
- HTTP Lifecycle review
- Usefulness of cookies
- Implementings cookies in the server
  
## HTTP is stateless

What do we mean by statelessness ?

- The server doesn't remember you
- The server process every request like a new request

What is state?

- Application state is server-side data which servers store to identify incoming client requests, their previous interaction details, and current context information.
- Ex: login state, logout state

### Benefits

- Scalability - no session related dependency
- Less complex - less synchroniztion
- Easier to cache
- The server cannot lose track of information

### Disadvantages

- cannot easily keep track context
- context has to provided each time
- Good transactions. not good for conversations.

## Using cookies to remember the user

### How cookies work

- a cookie is a small text file that is stored by a browser on the user’s machine

- a collection of key-value pairs that store information
  - shopping-cart, game scores, ads, and logins

`name=Linguini; style=classy;`

- The response header will set the cookie

  Set-Cookie: <em>value</em>[; expires=<em>date</em>][; domain=<em>domain</em>][; path=<em>path</em>][; secure]

- The browser will store the cookie
- The browser will send the cookie in the request headers of subsequent requests
- can be set for a specific domain
- can have an expiration date, if not session cookie

#### Cookie Security

- cookies are not secure
- vulnerable to sniffing -> request is intercepted along the way. The captured cookie is then set manually
- solution: https
- cookie option
  - secure -> ensure only https
  - httpOnly -> prevents javascript to access cookies

## How can we secure cookies

- Cookies are stored in plain text in the browser
- You can access it in developer tools
- How can we prevent this?
- Encrypted cookies

### Bcrypt

- Bcrypt will hash the password with a salt to make it more resistant to attacks
- Bcrypt will slow down the server. It should be async. Tricky!

#### Difference between encrypted and hashing

##### Hash

- turns a message into a combination of text + number + special characters
- Hashing is a 1 way process. You cannot retrieve the original string from the hash
- Useful for passwords
- The password entered will be hashed and the 2 hashed will be compared

##### Encryption

- Encryption turns data into a series of unreadable characters
- Encrypted strings can be reversed if you have the key