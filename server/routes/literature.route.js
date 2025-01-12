import express from "express";
import {
  getLiteratures,
  getNotApprovedLiteratures,
  shareLiterature,
} from "../controller/literature.controller.js";

const literatureRouter = express.Router();

literatureRouter.post("/share-literature/", shareLiterature);
literatureRouter.get("/get-literatures/", getLiteratures);
literatureRouter.get(
  "/get-non-approved-literatures",
  getNotApprovedLiteratures
);

export default literatureRouter;
