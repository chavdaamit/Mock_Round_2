import express from "express";

import userController from "../controller/userController.js";

const router = express.Router();

router.post("/add", userController.add);

router.get("/AllUser", userController.GetAllUser);

router.post("/Login", userController.login);

router.delete("/Delete/:id", userController.UserDelete);

router.post("/logout", userController.logOutUser);
export default router;
