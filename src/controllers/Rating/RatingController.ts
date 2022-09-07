import { Rating } from "@prisma/client";
import { Request, Response } from "express";
import RatingRepository from "../../repositories/Rating/RatingRepository";
import ClientRepository from "../../repositories/Client/ClientRepository";
import ServiceTypeRepository from "../../repositories/ServiceType/ServiceTypeRepository";
