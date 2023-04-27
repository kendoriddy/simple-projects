/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../../db/dbconnect";

import Hero from "../../../../models/Hero";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);

        if (!hero) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!hero) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const hero = await Hero.deleteOne({ _id: id });
        if (!hero) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: hero });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
