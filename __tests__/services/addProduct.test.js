import addProduct from '../../services/addProduct';
// jest.mock('../../services/addProduct');

// const syncify = async (fn) => {
//   try {
//     const result = await fn();
//     return () => { return result; };
//   } catch (e) {
//     return () => { throw e; };
//   }
// };

describe('testing api', () => {
  beforeEach(() => {
    //homeService.mockClear();
    fetch.resetMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('calls fetch and returns success response', async () => {
    const payload = {
      productId: '82jqp008d2l00',
      emirate: 'Abu Dhabi',
    };

    // const response = {
    //   success: true,
    //   response: 'Applied for product successfully!',
    // };

    fetch.mockResponseOnce(JSON.stringify(payload));
    const apiReq = await addProduct(payload);
    console.log(apiReq);
    //assert on the response
    expect(apiReq.success).toEqual(true);
  });

  it("should throw Error with message 'VALIDATION ERROR!' when no params were passed", async () => {
    //expect.assertions(1);
      try {
        await addProduct();
      } catch (e) {
        console.log(e.message);
        expect(e.message).toMatch('VALIDATION ERROR!');
      }

    // const outcome = await syncify(async () => {
    //   return await addProduct(payload);
    // });

    // console.log(outcome);

    // expect(outcome).toThrow();
  });

  it("should throw Error with message 'Oops! Something went wrong. Please try again.' when error from server", async () => {
    // expect.assertions(1);
     const payload = {
       productId: '',
       emirate: 'Abu Dhabi',
     };

     try {
       await addProduct(payload);
     } catch (e) {
       console.log(e.message);
       expect(e.message).toMatch(
         'Oops! Something went wrong. Please try again.',
       );
     }
  });
});
