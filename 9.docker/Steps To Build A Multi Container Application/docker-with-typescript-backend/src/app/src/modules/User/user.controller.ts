import httpStatus from 'http-status';

import { UserServices } from './user.service';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const userRegister = catchAsync(async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.body.data) {
    throw new Error('Missing user data payload');
  }
  if (!req.file) {
    throw new Error('Missing image file upload');
  }

  const userPayload = JSON.parse(req.body.data);
  const user = await UserServices.createUser({
    ...userPayload,
    profilePhoto: req.file.path,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully',
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users Retrieved Successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Retrieved Successfully',
    data: user,
  });
});

export const UserControllers = {
  getSingleUser,
  userRegister,
  getAllUsers,
};
