import type { NextFunction, Request, Response } from "express";

export const noRouteHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
};