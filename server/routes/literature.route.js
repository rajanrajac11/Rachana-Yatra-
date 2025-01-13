import express from "express";
import {
  acceptLiterature,
  getLiteratures,
  getNotApprovedLiteratures,
  rejectLiterature,
  shareLiterature,
} from "../controller/literature.controller.js";

const literatureRouter = express.Router();

literatureRouter.post("/share-literature/", shareLiterature);
literatureRouter.get("/get-literatures/", getLiteratures);
literatureRouter.get(
  "/get-non-approved-literatures",
  getNotApprovedLiteratures
);
literatureRouter.delete("/reject-literature/", rejectLiterature);
literatureRouter.put("/accept-literature/", acceptLiterature);

export default literatureRouter;
