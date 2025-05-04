import { Request, Response } from 'express'
import { personalInfo } from '../interfaces/personInfo.interface'

export const getHome = (req: Request, res: Response) => {
  
  res.render('main.ejs', { 
    title: 'SafeRide - Transporte Escolar Seguro',
  })
}