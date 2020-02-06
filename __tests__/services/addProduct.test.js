import addProduct from '../../services/addProduct';
jest.mock('../../services/addProduct');

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
});
