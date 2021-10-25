module.exports = paramSchema => {
  return async function (ctx, next) {
    let body = ctx.request.body;
    try {
      if (typeof body === 'string' && body.length) body = JSON.parse(body);
    } catch (error) {}
    const paramMap = {
      router: ctx.request.params,
      query: ctx.request.query,
      body
    };

    if (!paramSchema) return next();

    const schemaKeys = Object.getOwnPropertyNames(paramSchema);
    if (!schemaKeys.length) return next();

    schemaKeys.some(item => {
      const validObj = paramMap[item];

      const validResult = paramSchema[item].validate(validObj, {
        allowUnknown: true
      });

      if (validResult.error) {
        ctx.assert(false, ctx.utils.handle.throwError(9998, validResult.error.message));
      }
    });
    await next();
  };
};
