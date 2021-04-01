import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { YearsRepository } from "../repositories/yearsRepository";




class YearController {

    async create(request: Request, response: Response) {
        const { id, name, items } = request.body;

        const yearsRepository = getCustomRepository(YearsRepository);

        const year = yearsRepository.create({
            id, name, items
        })

        await yearsRepository.save(year);

        return response.status(201).json(year);
    }

    async show(request: Request, response: Response) {
        const yearsRepository = getCustomRepository(YearsRepository);

        const all = await yearsRepository.find();

        return response.json(all);
    }
}

export { YearController };