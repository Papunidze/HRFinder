const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");

const Group = require("../models/group-models");
const { uploadImage } = require("../config/storage");
const User = require("../models/user-models");
const Member = require("../models/members-scheme");

exports.createGroup = catchAsync(async (req, res, next) => {
  try {
    const admin = req.user;

    const initials = req.body.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    const image =
      (await uploadImage(req.body.image)) ||
      `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`;

    const newGroup = new Group({
      name: req.body.name,
      admins: admin,
      image: image,
    });

    await newGroup.save();

    res.status(201).json({
      status: "success",
      group: newGroup,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.getAdminsOfGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);
    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    const admins = await User.find({ _id: { $in: group.admins } }).select(
      "_id name avatar email"
    );

    res.status(200).json({
      status: "success",
      data: {
        admins,
      },
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.getMembersOfGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    const members = await Member.find({ _id: { $in: group.members } });

    res.status(200).json({
      status: "success",
      members,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.getCurrentMembers = catchAsync(async (req, res, next) => {
  try {
    const member = await Member.findOne({ _id: req.params.memberId });

    res.status(200).json({
      status: "success",
      member,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.getGroupById = catchAsync(async (req, res, next) => {
  try {
    const groupId = req.params.groupId;

    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({
        status: "fail",
        message: "Group not found",
      });
    }

    res.status(200).json({
      status: "success",
      group: group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.addAdminToGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId, adminId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    if (group.admins.includes(adminId)) {
      return next(new AppError("User is already an admin of the group", 400));
    }

    group.admins.push(adminId);

    await group.save();

    res.status(200).json({
      status: "success",
      group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.editGroupDetails = catchAsync(async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const { name } = req.body;

    const group = await Group.findById(groupId);
    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    group.name = name;
    await group.save();

    res.status(200).json({
      status: "success",
      group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.addMemberToGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const { body } = req;

    const initials = body.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    const avatar =
      (await uploadImage(body.avatar)) ||
      `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`;

    const newMember = await Member.create({ ...body, avatar });

    const group = await Group.findById(groupId);

    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    group.members.push(newMember._id);

    await group.save();

    res.status(200).json({
      status: "success",
      group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.removeMemberFromGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId, memberId } = req.params;

    const group = await Group.findById(groupId);
    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    if (!group.members.includes(memberId)) {
      return next(new AppError("User is not a member of the group", 400));
    }

    group.members = group.members.filter(
      (member) => member.toString() !== memberId
    );
    await group.save();

    res.status(200).json({
      status: "success",
      message: "Member removed successfully",
      group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.removeAdminFromGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId, adminId } = req.params;

    const group = await Group.findById(groupId);
    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    if (!group.admins.includes(adminId)) {
      return next(new AppError("User is not an admin of the group", 400));
    }

    group.admins = group.admins.filter((admin) => admin.toString() !== adminId);
    await group.save();

    res.status(200).json({
      status: "success",
      message: "Admin removed successfully",
      group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.removeGroup = catchAsync(async (req, res, next) => {
  try {
    const { groupId } = req.params;

    const group = await Group.findByIdAndDelete(groupId);
    if (!group) {
      return next(new AppError("Group not found", 404));
    }

    res.status(200).json({
      status: "success",
      group: group,
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});

exports.getGroups = catchAsync(async (req, res, next) => {
  try {
    const adminId = req.user._id;

    const groups = await Group.find({ admins: adminId });

    res.status(200).json({
      status: "success",
      data: {
        groups,
      },
    });
  } catch (err) {
    console.log(err.message);
    return next(new AppError(err.message));
  }
});
