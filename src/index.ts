import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Helooo hhh</h1>
    <div>
  `);
});

app.listen(3005, () => {
  console.log("App is listening on port 3005");
});