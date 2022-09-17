import "reflect-metadata"
import '../../container'
import express from 'express'
import { routes } from "./routes"
import path from "path"

const server = express()

// usando template engine
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
const viewsPath= 'src/app/presentation/views'
server.set('views', path.join(viewsPath))

//habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))