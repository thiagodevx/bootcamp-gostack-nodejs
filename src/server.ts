import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello world'});
});
const port = 3333;
app.listen(port, () => console.log(`Server started on port ${port}`));