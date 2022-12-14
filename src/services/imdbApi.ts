import {
  HTTP_METHOD,
  IMDBTitleSearchResponseType,
  IMDBCreditSearchResponseType,
} from './imdbTypes';

const BASE_URL = 'https://imdb8.p.rapidapi.com';

const commonHeaders = {
  'X-RapidAPI-Key': '9e886282c3msh1af460eddc4bc36p1facb0jsnd9e2b1a3d5b0',
  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
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

export const imdbFindTitle = (q: string) => callApiEndpoint<
  undefined,
  IMDBTitleSearchResponseType
>({
  endpoint: `title/find?q=${q}`,
  method: HTTP_METHOD.GET,
});

export const imdbGetCast = (id: string) => callApiEndpoint<
  undefined,
  IMDBCreditSearchResponseType
>({
  endpoint: `title/get-full-credits?tconst=${id}`,
  method: HTTP_METHOD.GET,
});
