import { PrismaClient } from '@prisma/client';

export default class DenunciasModelPrisma {
    #prismaClient;

    constructor() {
        this.#prismaClient = new PrismaClient();
    }

    async addDenuncia(denuncia) {
        await this.#prismaClient.denuncia.create({ data: denuncia });
    }

    async getAllDenuncias() {
        return await this.#prismaClient.denuncia.findMany();
    }

    async addDenunseguimipolicia(seguimiento) {
        await this.#prismaClient.denunseguimipolicia.create({ data: seguimiento });
    }

    async getAllDenunseguimipolicia() {
        return await this.#prismaClient.denunseguimipolicia.findMany();
    }
}



