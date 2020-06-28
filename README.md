# objectLocalstorage
# Local Storage with Objects

One of the most important skills a developer can learn is how to quickly research and find solutions to problems. Our application is attempting to store an object and not the data in it. Why?

## Instructions

* Find and implement a solution that allows the application to store and retrieve objects  to and from `localStorage`.


## Hint(s)

* You need to convert the object to a string, and vice versa.

### [Storing and retrieving objects with localStorage [HTML5]]
(https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5)

* localStorage stores key-value pairs. So to store a entire javascript object we need to serialize it first (with JSON.stringify, for example):

* localStorage.setItem('user', JSON.stringify(user));

* Then to retrieve it from the store and convert to an object again:

var user = JSON.parse(localStorage.getItem('user'));

* If we need to delete all entries of the store we can simply do:

localStorage.clear();

* [You can find JSON library to stringify and parse the objects here:](http://json.org/).