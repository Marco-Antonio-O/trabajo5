const { connect } = require("mongoose")

connect(process.env.URI)
.then(() => console.log("Base de datos conectada"))
.catch(err => console.error(errs))