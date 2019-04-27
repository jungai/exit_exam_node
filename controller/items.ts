import { NextFunction, Request, Response } from 'express'
import { getItems } from '../model/items'

export const getDataItems = (req: Request, res: Response, _next: NextFunction) => {

    const items = getItems()
    res.json({ result: items})
}
