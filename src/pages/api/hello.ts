// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const Example = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ hello: "world" });
};
export default Example;
