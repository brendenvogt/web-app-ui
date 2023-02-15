// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  name: string;
  greeting: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("http://web-app-api-dev.us-west-2.elasticbeanstalk.com/")
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
