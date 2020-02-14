# tiny-url
URL shortener

### What is a URL shortening system?

- system which generates a short key for the provided URL
- user can use the key to be redirected to the initial URL (e.g. https://service-url/:short-key)

### What's the main value and who needs such a system & why?

- a very long URLs can be shortened to only few characters
- it could be used to turn long 'ugly' URLs into shorter and more pleasant URLs
- it's convinient for situations where number of characters is limited

### The main mechanism of work & system components

- an URL is stored in a storage unit alongside with the generated short key related to this particular URL
- short key must be unique to a single URL
- on GET request, an original URL is retrived from a data storage based on user provided short key
- after the original URL is retrieved, user is redirected

### Main challenges in implementing & running the system

- the key generating system (ordered or string based), ensuring that keys are not overwritten
- should the urls be deleted from the base after some time
- should the max length for the url be set to prevent misuse

### Some advanced features

- allow users to choose custom short keys
- allow admin to choose how many records want to see in daily most popular urls
- allow admin to choose does he want to see urls with the most get or post hits
- checking on the server if the provided url is valid (dns.lookup() from dns module) 

### What could be improved in this project

- error handling with popup message for the user
- user inputs sanitization and validation on the server
- protocol recognize system, so that user is not limited to only https protocol
- more scalable way of filtering the most popular urls on the server
