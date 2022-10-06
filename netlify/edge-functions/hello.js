export default async (request, context) => {

  const user = context.cookies.get('user');
  console.log('hello user', user);

  const country_code = context.cookies.get('country_code');
  console.log('hello country_code', country_code);

  
  const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await joke.json();

  // return new Response('Hello world!!!! ^^');
  return context.json({ geo: context.geo, data });
};
