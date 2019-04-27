import { Application } from 'express'
import { getDataItems } from '../controller/items'

function allRoutes(r: Application) {
  /**
   * add route here
   */
  r.get('/', getDataItems)
}

export const mapRoutes = (s: Application ) => allRoutes(s)
