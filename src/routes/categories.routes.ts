import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;
    const category = new CategoriesRepository();

    Object.assign(category, {
        name,
        description,
    });

    return response.status(201).send();
});

export { categoriesRoutes };
