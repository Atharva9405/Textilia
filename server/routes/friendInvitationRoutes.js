import express from "express";
import Joi from "joi";
import validator from "express-joi-validation";
import { verifyToken } from "../middleware/auth.js";
import friendInvitationControllers from "../controllers/friendInvitation/friendInvitationControllers.js";

const customValidator = validator.createValidator();

const router = express.Router();

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});

router.post(
  "/invite",
  verifyToken,
  customValidator.body(postFriendInvitationSchema),
  friendInvitationControllers.postInvite
);

export default router;
