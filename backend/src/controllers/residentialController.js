import { Request, Response } from "express";
import Resident from "../models/residentialsModel";
const { default: mongoose } = require('mongoose');

exports.getResidentials = async (req, res) => {
    try {  
      const residentials = await Resident.find()
      res.status(200).json(residentials)
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong when fetching the users' })
    }
  }

// export async function getResidential(req, res) {
//     const { residentialId } = req.params;
//     const apartment = await Residential.findById(residentialId);
//     res.json(apartment);
//   }