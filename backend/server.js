const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser); //Parser request bodies as JSON

server.post("/api/portfolio", (req, res) => {

    const newCrypto = req.body; //This will add a new cryptocurrency to db.json file
    db.get("portfolio")
    .push(newCrypto)
    .write();

    res.status(201).json(newCrypto); // Respond with the added data and status code 201 indicating success
});

server.put("/api/portfolio/:id", (req, res) => {

    const cryptoId = req.params.id;
    const updatedCryptoData = req.body;

    db.get("portfolio") //Function to find the crypto by its ID and update its data
    .find({ id: cryptoId })
    .assign(updatedCryptoData)
    .write();

    res.status(200).json(updatedCryptoData); // Respond with the updated data and status code (200) indicating success 
});

server.delete("/api/portfolio/:id", (req, res) => {

    const cryptoId = req.params.id;

    db.get("portfolio") // Function to remove crypto by its ID
    .remove({ id: cryptoId })
    .write();

    res.sendStatus(204); // Respond with status code (204) to indicate success 
});

server.use(middlewares); //Sets my default middlewares (logger, static, cors)

server.use("./api", router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});