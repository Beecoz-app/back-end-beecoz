"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(email);
    return isValidEmail;
};
exports.validateEmail = validateEmail;
// Language: typescript
// Path: src\utils\isSomeEmpty.ts
// Compare this snippet from src\controllers\Auth\Client\ClientController.ts:
// import { Client } from "@prisma/client";
// import { Request, Response } from "express";
// import ClientProfileRepository from "../../../repositories/Client/ClientProfile/ClientProfileRepository";
// import ClientRepository from "../../../repositories/Client/ClientRepository";
// import LoginRepository from "../../../repositories/Login/LoginRepository";
// import TypeUserRepository from "../../../repositories/TypeUser/TypeUserRepository";
// import { isSomeEmpty } from "../../../utils/isSomeEmpty"
// import { generateToken } from "../../../utils/jwt";
// import { hashPassword, verifyPassword } from "../../../utils/password";
// import { validateEmail } from "../../../utils/validateEmail";
// 
// 
// class AuthClientController {
//   async register(req: Request, res: Response) {
//     const {
//       name,
//       email,
//       password,
//       cellNumber,
//       lastName,
//
