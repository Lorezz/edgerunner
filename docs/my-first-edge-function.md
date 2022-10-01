This is a guide on how to use edge functions on netlify, and about netlify advanced next.js toolkit

Below the list of commands done to create this branches.

1 create folder

```
mkdir edgerunner && cd edgerunner
```

2 create package.json

```
npm init -y
git init
```

3: create Edge Function folder

```zh
mkdir -p netlify/edge-functions

```

4: create an Edge Function file

```zh
touch netlify/edge-functions/hello.js

```

5: add some stupid code to hello.js

```js
export default () => new Response('Hello world');
```

6: declare function path inside netlify.toml

```zh
touch netlify.toml
```

and add declaration

```toml
[[edge_functions]]
path = "/test"
function = "hello"
```

7: run local
you need netlify-cli so, to install or update:

```
npm install netlify-cli -g
```

then you can test your function with

```
ntl dev #or netlify dev
```

and open a browser to [localhost:8888/test]()

8: deploy

create a repo  like
```
gh repo create edgerunner --public
```
add origin :
```
git remote add origin git@github.....
```
commit and push
```
git add .
git commit -m "initial"
git push 
```
