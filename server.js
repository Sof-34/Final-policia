import express from 'express';
const {Router}=express;
export default class DenunciasController{
    #router=Router();
    #denunciasModel=null;
    constructor(){
        this.registerRoutes();
    }
    getRouter() {
        return this.#router;
    }
    registerRoutes() {
        const routerV1 = Router();
        routerV1.get(`/denuncias`, async (req, res) => await this.getAllDenuncias(req, res));
        
        this.#router.use(`/v1`, routerV1);
    }
    async getAllDenuncias(req, res) {
        try {
            this.#denunciasModel = new DenunciasModel();
            this.#denunciasModel.connect();
            const denuncias = await this.#denunciasModel.getAllCiudades();
            res.json(denuncias);
        } catch (error) {
            console.error(`error: ${error}`);
        } finally {
            this.#denunciasModel.closeConnection();
        }
    }
}
