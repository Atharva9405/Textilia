import express, { json } from "express";
import Joi from "joi";
import validator from "express-joi-validation";
import { verifyToken } from "../middleware/auth.js";
import friendInvitationControllers from "../controllers/friendInvitation/friendInvitationControllers.js";

const customValidator = validator.createValidator();

const router = express.Router();

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
})

router.post(
  "/invite",
  verifyToken,
  customValidator.body(postFriendInvitationSchema),
  friendInvitationControllers.postInvite
);

router.post('/accept', verifyToken, customValidator.body(inviteDecisionSchema), friendInvitationControllers.postAccept)
router.post('/reject', verifyToken, customValidator.body(inviteDecisionSchema), friendInvitationControllers.postReject)

export default router;
