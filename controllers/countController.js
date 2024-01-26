import createError from "http-errors";

import Count from "../models/dataModel.js";

export const updateCount = async (req, res, next) => {
    try {
        const count = await Count.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });

          if(!count){
            await Count.create({count: null})
          }
          res.cookie("count", req.body.count, {httpOnly: true, secure:true})

          res.status(200).json({
            success:true,
            msg: "Count updated successfully",
            count
          })


    } catch (error) {
        next(error)
    }

};
