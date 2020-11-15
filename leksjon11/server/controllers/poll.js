import { pollService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    return next(
      new ErrorHandler(`Can't find event with ${req.params.id}`, 404)
    );
  }
  res.status(200).json(poll);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await pollService.listPolls();
  res.status(200).json(result);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  try {
    const poll = await pollService.createPoll(req.body);
    res.status(201).json(poll);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    return next(
      new ErrorHandler(`Can't find event with ${req.params.id}`, 404)
    );
  }
  poll.answers.map((answer) => {
    // This part gives an 500 internal error, but the vote goes through anyway
    if (req.body._id.includes(answer._id.toString())) {
      answer.votes += 1;
    }
  });
  poll.save();
  poll = await pollService.updatePoll(req.params.id, req.body);
  res.status(200).json(poll);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
  let poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    return next(
      new ErrorHandler(`Can't find event with ${req.params.id}`, 404)
    );
  }
  poll = await pollService.removePoll(req.params.id);
  res.status(204).json(poll);
});
