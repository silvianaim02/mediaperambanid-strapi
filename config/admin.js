module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1fa331645ba96a84442b4ba5f990ae5b'),
  },
});
