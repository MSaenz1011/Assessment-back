import { Application } from "express";

import healtcheck from './api/healthcheck'

const routes = (app: Application): void =>{
    app.use('/api/healthcheck', healtcheck)
}


export default routes