import { Router } from "express";
import { StatusCodes } from 'http-status-codes'

import { CidadadesController } from './../controllers'


const router = Router()

router.get("/", (req, res) => {
    return res.send("Olá, DEV!");
});


router.post("/cidades", CidadadesController.create);


export { router }