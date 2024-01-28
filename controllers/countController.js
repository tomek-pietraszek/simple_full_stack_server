import createError from "http-errors";

import Count from "../models/dataModel.js";

export const updateCount = async (req, res, next) => {
  try {
    const count = await Count.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!count) {
      await Count.create({ count: null });
    }

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      sameSite: "None",
      secure: true,
    };

    res.cookie("count", req.body.count, cookieOptions);

    res.status(200).json({
      success: true,
      msg: "Count updated successfully",
      count,
    });
  } catch (error) {
    next(error);
  }
};

export const getCount = (req, res, next) => {
  try {
    const { count } = req.cookies
    console.log(count)
 

    res.status(200).json({
      success: true,
      count
    });
  } catch (error) {
    next(error);
  }
};
