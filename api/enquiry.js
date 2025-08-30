module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { name, email, mobile, project } = req.body || {};

    if (!name || !mobile) {
      return res.status(400).send('Error: Missing required fields');
    }

    // TODO: Integrate email sending (e.g., Nodemailer/Resend) and/or database storage here.
    // For now, we just acknowledge receipt so the frontend can proceed.

    return res.status(200).send('Thank You');
  } catch (err) {
    console.error('API error /api/enquiry:', err);
    return res.status(500).send('Error: Server error');
  }
};
