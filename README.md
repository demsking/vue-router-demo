# vue-router-demo

## Getting Started

```sh
# build the container
docker build -t vue-router-demo .

# start the app
docker run --rm -it -v $(pwd)/src:/src -p 3000:3000 vue-router-demo
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
