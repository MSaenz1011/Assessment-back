import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'


const configExpress = (app: Application)=>{
    app.use(express.json())
    app.use(morgan('dev'))
    app.use(cors())
}

export default configExpress