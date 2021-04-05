import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { YearRepository } from "../repositories/yearRepository";




class YearController {

    async create(request: Request, response: Response) {
        const { id, name, items } = request.body;

        const yearRepository = getCustomRepository(YearRepository);

        const year = yearRepository.create({
            id, name, items
        })

        await yearRepository.save(year);

        return response.status(201).json(year);
    }

    async show(request: Request, response: Response) {
        const yearRepository = getCustomRepository(YearRepository);

        const all = await yearRepository.find();

        return response.json(all);
    }
}

export { YearController };