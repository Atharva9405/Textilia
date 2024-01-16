import express from "express";
import authControllers from "../controllers/auth/authControllers.js";
import Joi from "joi";
import validator from "express-joi-validation";

const customValidator = validator.createValidator();

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const router = express.Router();

router.post("/register",customValidator.body(registerSchema), authControllers.postRegister);

router.post("/login",customValidator.body(loginSchema), authControllers.postLogin);

export default router;
