import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

export const listPolls = catchAsyncErrors(async (req, res, next) => {
  const polls = await userService.userService.listUserPolls(req.params.id);
  res.status(200).json(polls);
});
