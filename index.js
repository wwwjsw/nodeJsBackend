const app = require('./src/config/app-express');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});