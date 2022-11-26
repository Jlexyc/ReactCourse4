const BASE_URL = 'http://localhost:8080';

const commonHeaders = {
  'Content-Type': 'application/json',
};

export const callApiEndpoint = async ({
  endpoint,
  method,
  body,
  headers,
}) => {
  console.log('endpoint: ', endpoint);
  console.log('method: ', method);
  console.log('body: ', body);
  console.log('headers: ', headers);

  try {
    const response = await fetch([BASE_URL, endpoint].join('/'), {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: { ...commonHeaders, ...headers },
    });
    if (response.ok) {
      const responseJson = await response.json();
      return {
        success: true,
        response: responseJson,
      };
    }
    return {
      success: false,
      error: new Error('Something went wrong'),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const fetchAllGoodsApi = () => callApiEndpoint({
  endpoint: 'goods',
  method: 'GET',
});

export const addGoodsApi = ({ item }) => callApiEndpoint({
  endpoint: 'goods',
  method: 'POST',
  body: item,
});

export const removeGoodsApi = ({ id }) => callApiEndpoint({
  endpoint: ['goods', id].join('/'),
  method: 'DELETE',
});

export const putGoodsApi = ({ item }) => callApiEndpoint({
  endpoint: ['goods', item.id].join('/'),
  method: 'PUT',
  body: item,
});
