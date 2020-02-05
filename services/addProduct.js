const authorization ='Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vdXNlcjEiLCJuYW1lIjoiUkFLQkFOSyBEZW1vIiwiaWF0IjoxNTE2MjM5MDIyfQ.hD2So1Jms00c7XB_bxNIrTgvSqMesmrlc0FkBAdY6rM';

export default async payload => {
  try {
    let response = await fetch('http://rakbank-test.mocklab.io/activation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(payload),
    });
    let responseJson = await response.json();
    return {
      success: true,
      response: responseJson.message,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error,
    };
  }
};
// import 'isomorphic-fetch';

// class HomeService {
//   constructor() {
//     this.authorization =
//       'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vdXNlcjEiLCJuYW1lIjoiUkFLQkFOSyBEZW1vIiwiaWF0IjoxNTE2MjM5MDIyfQ.hD2So1Jms00c7XB_bxNIrTgvSqMesmrlc0FkBAdY6rM';
//   }

//   async addProduct(payload) {
//     try {
//       let response = await fetch('http://rakbank-test.mocklab.io/activation', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: this.authorization,
//         },
//         body: JSON.stringify(payload),
//       });
//       let responseJson = await response.json();
//       return {
//         success: true,
//         response: responseJson.message,
//       };
//     } catch (error) {
//       console.error(error);
//       return {
//         success: false,
//         error: error,
//       };
//     }
//   }
// }
// const homeService = new HomeService();

// export default homeService;
