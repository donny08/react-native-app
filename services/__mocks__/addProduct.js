const fakeResponse = {
  success: true,
  response: 'Applied for product successfully!'
};

export default async payload => {
    return await new Promise(resolve => {
      resolve(fakeResponse);
    });
};