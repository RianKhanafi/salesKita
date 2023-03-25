// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data: any = [
    { name: "Mie goreng", deskripsi: "Miew goreng adalah makanan enak" },
    { name: "Mie goreng", deskripsi: "Miew goreng adalah makanan enak " },
  ];
  res.status(200).json({ data });
}
