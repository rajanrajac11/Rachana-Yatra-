import Literature from "../model/literature.model.js";

export const shareLiterature = async (req, res, next) => {
  try {
    const newLiterature = await Literature.create(req.body);
    console.log(req.body);
    res.status(200).json({ message: "Literature created successfully" });
  } catch (error) {
    console.log("Validation Error: ", error.message);
    res
      .status(400)
      .json({ message: "Literature validation failed", error: error.message });
  }
};
export const getLiteratures = async (req, res, next) => {
  try {
    // Fetch only literatures with approvalStatus set to true
    const literatures = await Literature.find({ approvalStatus: true });
    res.status(200).json(literatures);
  } catch (error) {
    next(error);
  }
};
export const getNotApprovedLiteratures = async (req, res, next) => {
  try {
    // Fetch only literatures with approvalStatus set to true
    const literatures = await Literature.find({ approvalStatus: false });
    res.status(200).json(literatures);
  } catch (error) {
    next(error);
  }
};
