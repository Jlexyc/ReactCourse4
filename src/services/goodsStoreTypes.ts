export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  DETELE = 'DELETE',
  PUT = 'PUT,'
}

export interface ItemModel {
  id: string;
  title: string;
  weight: string;
  category: string;
  description: string;
}

export enum RequestState {
  Unset = 'Unset',
  Waiting = 'Waiting',
  Success = 'Success',
  Failure = 'Failure',
}
