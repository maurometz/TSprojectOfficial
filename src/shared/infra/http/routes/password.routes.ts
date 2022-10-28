/* eslint-disable import/prefer-default-export */
import { Router } from "express";
import { ResetPasswordController } from "../../../../modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "../../../../modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailUseCase = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordController();

passwordRoutes.post("/forgot", sendForgotPasswordMailUseCase.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };
