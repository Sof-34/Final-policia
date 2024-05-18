import express from 'express';
import DenunciasModelPrisma from './denuncias-model.prisma.mjs';

const { Router } = express;

export default class DenunciasController {
    #router = Router();
    #denunciasModel = null;

    constructor() {
        this.#denunciasModel = new DenunciasModelPrisma();
        this.registerRoutes();
    }

    getRouter() {
        return this.#router;
    }

    registerRoutes() {
        const routerV1 = Router();
        routerV1.get('/denuncias', this.getAllDenuncias.bind(this));
        routerV1.post('/denuncias', this.createDenuncia.bind(this));
        routerV1.get('/denunseguimipolicia', this.getAllDenunseguimipolicia.bind(this));
        routerV1.post('/denunseguimipolicia', this.createDenunseguimipolicia.bind(this));

        this.#router.use('/v1', routerV1);
    }

    async getAllDenuncias(req, res) {
        try {
            const denuncias = await this.#denunciasModel.getAllDenuncias();
            res.json(denuncias);
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createDenuncia(req, res) {
        try {
            const denuncia = req.body;
            console.info({ denuncia });
            await this.#denunciasModel.addDenuncia(denuncia);
            res.send('Denuncia registrada');
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllDenunseguimipolicia(req, res) {
        try {
            const seguimientos = await this.#denunciasModel.getAllDenunseguimipolicia();
            res.json(seguimientos);
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createDenunseguimipolicia(req, res) {
        try {
            const seguimiento = req.body;
            console.info({ seguimiento });
            await this.#denunciasModel.addDenunseguimipolicia(seguimiento);
            res.send('Seguimiento de denuncia registrado');
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}





