import express, {Request, Response} from 'express';

const app = express()

app.get('/ping', (req: Request, res: Response) => {
    res.send({
        data: "pong"
    })
})

app.listen(8080, () => {
    console.log("server starting")
})