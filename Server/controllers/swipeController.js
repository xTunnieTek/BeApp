const User = require("../models/userModel");
const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.getGenderInterestUser = async (req, res, next) => {
  const gender = req.query.gender;
  const users = await User.find({ gender });
  return res.status(200).json({
    status: "success",
    users,
  });
};

exports.getAllMatches = async (req, res, next) => {
  const id = req.query.id;
  const users = await User.find({ matches: id });
  return res.status(200).json({
    status: "success",
    users,
  });
};

exports.handleSwipedRight = async (req, res, next) => {
  const { userId, swipedUserId } = req.body;
  const objectUserId = mongoose.Types.ObjectId(req.body.userId);
  const objectSwipedUserId = mongoose.Types.ObjectId(req.body.swipedUserId);
  console.log("hehe", { userId, swipedUserId });

  // update liked_by for swiped user
  const swipedUser = await User.findOneAndUpdate(
    { _id: objectSwipedUserId },
    { $push: { liked_by: userId } },
  );
  // Check user is liked by swiped user
  const user = await User.findById({ _id: userId });
  const likedBy = user.liked_by;
  for (const u in likedBy) {
    if (JSON.stringify(swipedUserId) === JSON.stringify(likedBy[u])) {
      console.log(true);
      // neu co update matches cua user va swiped user
      const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { matches: { _id: swipedUserId } },
          $pull: { liked_by: swipedUserId },
        },
        { new: true }
      );
      // update matches cua swiped user
      const updatedSwipedUser = await User.findByIdAndUpdate(
        { _id: swipedUserId },
        {
          $push: { matches: { _id: userId } },
          $pull: { liked_by: userId },
        },
        { new: true }
      );
      console.log(updatedUser, updatedSwipedUser);
      return res.status(200).json({
        status: "It's a match !!!!",
        data: [updatedUser, updatedSwipedUser],
      });
    }
  }
  return res.status(200).json({
    status: "Liked success, wait for a match !!",
    swipedUser,
  });
};
