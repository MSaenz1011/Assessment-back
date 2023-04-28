import { Router } from "express";

import {
  getAllListsController,
  createListController,
  getSingleListController,
  deleteSingleListController,
} from "./list.controller";
import { isAuthenticated } from "../../middleware/auth";

const router = Router();

router.get("/", isAuthenticated, getAllListsController);
router.post("/", isAuthenticated, createListController);
router.get("/:id", isAuthenticated, getSingleListController);
router.delete("/:id", isAuthenticated, deleteSingleListController);

export default router;