const app = require('./app');

const PORT = process.env.DB_PORT;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;