export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  DETELE = 'DELETE',
  PUT = 'PUT,'
}

export enum RequestState {
  Unset = 'Unset',
  Waiting = 'Waiting',
  Success = 'Success',
  Failure = 'Failure',
}

export enum TitleType {
  TV_SERIES = 'tvSeries',
  VIDEO = 'video',
  TV_MOVIE = 'tvMovie',
  MOVIE = 'movie',
}

export interface TitleBaseModelType {
  id: string;
  image?: {
    height: number;
    width: number;
    id: string;
    url: string;
  }
  title: string;
  titleType: TitleType;
  year: number;
}

export interface TitleTVSeriesModelType extends TitleBaseModelType {
  titleType: TitleType.TV_SERIES;
  numberOfEpisodes?: number;
  seriesStartYear?: number;
}

export interface TitleVideoModelType extends TitleBaseModelType {
  titleType: TitleType.VIDEO;
}

export interface TitleTVMovieModelType extends TitleBaseModelType {
  titleType: TitleType.TV_MOVIE;
  runningTimeInMinutes: number;
}
export interface TitleMoviewModelType extends TitleBaseModelType {
  titleType: TitleType.MOVIE;
  runningTimeInMinutes: number;
}

export type TitleModel = TitleTVSeriesModelType
| TitleVideoModelType
| TitleTVMovieModelType
| TitleMoviewModelType;

export interface CastModel {
  id: string;
  akas?: Array<string>;
  legacyNameText: string;
  name: string;
  category: string;
  characters?: Array<string>;
  roles?: Array<{
    character: string;
  }>
}

export interface IMDBTitleSearchResponseType {
  results: TitleModel[];
}

export interface IMDBCreditSearchResponseType {
  cast: Array<CastModel>
}
