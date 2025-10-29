# script about "Add post edit"

Based on the files from the lesson, you need to add some editing to the post.

There should be a form like on the Create Post page

Going to it should be when you click on the Edit button in the table

After going to the edit page, you need to load the post data, as is done on the View page

After that, you need to substitute the loaded data into the form fields and allow editing

When the user submits the form, you need to send a put request to the server

Copy code
fetch('https://jsonplaceholder.typicode.com/posts/1', {
method: 'PUT',
body: JSON.stringify({
id: 1,
title: 'foo',
body: 'bar',
userId: 1,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
Be sure to include the body of the request, it should be like in the example with the post request

Further work flow after the request is the same as on the Create Post page

The doc on the ari is here https://jsonplaceholder.typicode.com/guide/