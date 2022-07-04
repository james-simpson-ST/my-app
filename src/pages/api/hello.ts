// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const Example = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(axios.VERSION);
  res.status(200).json({ hello: "world" });
};
export default Example;
