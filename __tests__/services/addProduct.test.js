import addProduct from '../../services/addProduct';
// jest.mock('../../services/addProduct');

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

    const response = {
      success: true,
      response: 'Applied for product successfully!',
    };

    fetch.mockResponseOnce(JSON.stringify(payload));
    const apiReq = await addProduct(payload);

    //assert on the response
    expect(apiReq).toEqual(response);
  });

  it("should throw Error with message 'UNKNOWN ERROR' when no params were passed", () => {
    try {
      throwError();
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe('UNKNOWN ERROR');
    }
  });
});
