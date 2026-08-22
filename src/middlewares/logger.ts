import type { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    const method = req.method;
    const url = req.url;
    console.log(method, " :" , url);
    next()
}