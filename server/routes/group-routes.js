const express = require("express");
const router = express.Router();
const groupController = require("../controllers/group-controller");
const { protect } = require("../middleware/protect");
const { createGroupValidation, validate } = require("../middleware/validation");

router.post(
  "/create",
  protect,
  createGroupValidation,
  validate,
  groupController.createGroup
);

router.post(
  "/:groupId/add-admin/:adminId",
  protect,
  groupController.addAdminToGroup
);

router.put("/:groupId/edit", protect, groupController.editGroupDetails);

router.post(
  "/:groupId/add-member/:memberId",
  protect,
  groupController.addMemberToGroup
);

router.delete(
  "/:groupId/remove-member/:memberId",
  protect,
  groupController.removeMemberFromGroup
);

router.delete(
  "/:groupId/remove-admin/:adminId",
  protect,
  groupController.removeAdminFromGroup
);

router.delete(
  "/:groupId/remove",
  protect,

  groupController.removeGroup
);

module.exports = router;
