const app = require("./app.js");
const config = require("./config/index.js");

const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
