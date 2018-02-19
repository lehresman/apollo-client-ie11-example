This is an example of how Apollo Client throws an "out of stack space" error on IE11.

To run:

```
yarn install
node server.js
```

Then visit http://localhost:3001

Notice in IE11 it throws "Out of stack space" in the Apollo code.

For some reason, this only happens for me when Google Maps is included.
I've been able to boil it down to a very small reproducable setup, represented
here in this repository.

Edit `www/index.html` and remove the Google Maps `<script>` tag and you'll see it works.
But with Google Maps included, it consistently throws an "out of stack space" error
in the Apollo code.
