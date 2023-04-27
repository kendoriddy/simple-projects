import dbConnect from "../../../../db/dbconnect";

import Hero from "../../../../models/Hero";

dbConnect();

// Get all heroes, post a new hero

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heroes = await Hero.find({});
        res.status(200).json({ success: true, data: heroes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const hero = await Hero.create(req.body);
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
