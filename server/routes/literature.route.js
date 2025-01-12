import express from "express";
import {
  getLiteratures,
  shareLiterature,
} from "../controller/literature.controller.js";

const literatureRouter = express.Router();

literatureRouter.post("/share-literature/", shareLiterature);
literatureRouter.get("/get-literatures/", getLiteratures);

export default literatureRouter;
