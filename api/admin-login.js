const { timingSafeEqual, createHash } = require('node:crypto');
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST 요청만 가능합니다.' });
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return res.status(503).json({ error: 'Vercel에서 ADMIN_PASSWORD를 설정해 주세요.' });
  const password = req.body && req.body.password;
  if (typeof password !== 'string' || password.length > 256) return res.status(400).json({ error: '비밀번호를 입력해 주세요.' });
  const hash = value => createHash('sha256').update(value).digest();
  if (!timingSafeEqual(hash(password), hash(expected))) return res.status(401).json({ error: '비밀번호가 올바르지 않습니다.' });
  return res.status(200).json({ ok: true });
};
