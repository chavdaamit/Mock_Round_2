import Modeluser from "../model/ModelUser.js";

import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
  try {
    const {
      name,
      Email,
      password,
      salary,
      designation,
      status,
      created_date,
      updated_date,
    } = req.body;

    const newUser = new Modeluser({
      name,
      Email,
      password,
      salary,
      designation,
      status,
      created_date,
      updated_date,
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "new user successfully", newUser });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const GetAllUser = async (req, res, next) => {
  try {
    const users = await Modeluser.find();

    if (!users) {
      return next(new HttpError("user not found", 404));
    }

    res.status(200).json({
      success: true,
      tota: users.length,
      message: "user data found",
      users,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, password } = req.body;

    const Users = await Modeluser.findByCredentials(Email, password);

    const token = await Users.generateAuthToken();

    if (!Users) {
      return next(new HttpError("unable to login"));
    }

    res.status(200).json({ success: true, Users, token });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

const UserDelete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await Modeluser.findByIdAndDelete(id);

    if (!user) {
      return next(new HttpError("user not found", 404));
    }

    res
      .status(200)
      .json({ success: true, message: "user delete successfully" });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const logOutUser = async (req, res, next) => {
  try {
    req.user.tokens = req.user.tokens.filter((t) => t.token != req.token);

    await req.user.save();

    res
      .status(200)
      .json({ success: true, message: "user logout successfully" });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default { add, GetAllUser, login, UserDelete, logOutUser };
