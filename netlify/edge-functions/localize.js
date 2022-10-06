export default (request, context) => {
  context.cookies.set({
    name: 'country_code',
    value: context.geo.country.code,
  });
  context.cookies.set({
    name: 'user',
    value: 'lorezz',
  });
};
