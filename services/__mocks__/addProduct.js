const fakeResponse = {
  success: true,
  response: 'Applied for product successfully!',
};

export default async payload => {
  if (!payload) {
    throw new Error('VALIDATION ERROR!');
  }
  return await new Promise(resolve => {
    resolve(fakeResponse);
  }, reject => {
    reject('Oops! Something went wrong. Please try again.');
  });
};
