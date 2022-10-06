// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { email } = req.query;

  // sendEmailto(email);

  res.status(200).json({ status: 'success', email });
}
