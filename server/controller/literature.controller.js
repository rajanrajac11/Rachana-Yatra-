import Literature from "../model/literature.model.js";

export const shareLiterature = async (req, res, next) => {
  try {
    const newLiterature = await Literature.create(req.body);
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

export const rejectLiterature = async (req, res, next) => {
  try {
    //getting id from the request body
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "ID is required to delete" });
    }
    const deletedLiterature = await Literature.findByIdAndDelete(id);

    if (!deletedLiterature) {
      return res
        .status(404)
        .json({ success: false, message: "Literature not found" });
    }
    res.status(200).json({
      success: true,
      message: "Literature deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const acceptLiterature = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "ID is required to approve" });
    }
    const acceptedLiterature = await Literature.findByIdAndUpdate(id, {
      approvalStatus: true,
    });
    if (!acceptedLiterature) {
      return res
        .status(404)
        .json({ success: false, message: "Literature not found" });
    }
    res.status(200).json({
      success: true,
      message: "Literature approved Successfully",
    });
  } catch (error) {
    next(error);
  }
};
