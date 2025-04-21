import { Request, Response } from 'express'
import { personalInfo } from '../interfaces/personInfo.interface'

export const getHome = (req: Request, res: Response) => {
  const miInfo: personalInfo = {
    nombre: "Carlos",
    apellido: "Gutiérrez",
    cedula:31391521,
    seccion:3
  }
  
  res.render('main.ejs', { 
    title: 'Mi Información Personal',
    info: miInfo 
  })
}