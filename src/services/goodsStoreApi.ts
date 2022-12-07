import { ItemModel, HTTP_METHOD } from './goodsStoreTypes';

const BASE_URL = 'http://localhost:8080';

const commonHeaders = {
  'Content-Type': 'application/json',
};

interface CallApiEndpointParameters<BodyType> {
  endpoint: string;
  method?: HTTP_METHOD;
  headers?: {[index: string]: string};
  body?: BodyType;
}

interface CallApiEndpointResult<ResponseType> {
  error?: Error;
  success: boolean;
  response?: ResponseType;
}

interface FetchAllGoodsResponse {
  goods: ItemModel[];
}

export const callApiEndpoint = async <BodyType, ResponseType>({
  endpoint,
  method,
  body,
  headers,
}: CallApiEndpointParameters<BodyType>): Promise<CallApiEndpointResult<ResponseType>> => {
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
      error: new Error('Something went wrong'),
    };
  }
};

export const fetchAllGoodsApi = () => callApiEndpoint<undefined, FetchAllGoodsResponse>({
  endpoint: 'goods',
  method: HTTP_METHOD.GET,
});

export const addGoodsApi = ({ item }: { item: Omit<ItemModel, 'id'>}) => callApiEndpoint<
  Omit<ItemModel, 'id'>,
  ItemModel
  >({
    endpoint: 'goods',
    method: HTTP_METHOD.POST,
    body: item,
  });

export const removeGoodsApi = ({ id }: { id: string}) => callApiEndpoint<undefined, undefined>({
  endpoint: ['goods', id].join('/'),
  method: HTTP_METHOD.DETELE,
});

export const putGoodsApi = ({ item }: { item: ItemModel }) => callApiEndpoint<
  ItemModel,
  ItemModel
>({
  endpoint: ['goods', item.id].join('/'),
  method: HTTP_METHOD.PUT,
  body: item,
});
