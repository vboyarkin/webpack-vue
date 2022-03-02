async function start() {
  return await Promise.resolve("async is working");
}

start().then(x => console.log("x: ", x));
