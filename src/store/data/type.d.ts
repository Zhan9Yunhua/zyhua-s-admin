import { DataStore as dataStore } from './index';
import { IResponse } from '@/api';

export as namespace DataStore;

export interface IDataStore extends dataStore {}

// Classification
export interface IClassNames {
  key?: string;
  _id: string;
  order: number;
  name: string;
}

export interface IAddClassification {
  (value: { name: string }): Promise<IResponse>;
}

export interface ISortClassification {
  (value: IClassNames[]): void;
}

export interface IUpdateClassification {
  (value?: IClassNames): void;
}

export interface IRemoveClassification {
  (value: IClassNames): void;
}

// Article
export interface IArticle {
  key?: string;
  _id?: string;
  title: string;
  className: string;
  content: string;
  isFormal: boolean;
  time: string;
}

type Indexes<T> = { [P in keyof T]?: T[P] };
export interface IChangeArticle {
  (value: Indexes<IArticle>): void;
}

// ArticleList
export interface IArticleList {
  count: number;
  rows: IArticle[];
}

export interface IGetArticleList {
  (index?: number, limit?: number): void;
}

// Message
export interface IMessage {
  key?: string;
  _id?: string;
  email: string;
  time: string;
  text: string;
}

export interface IMessageList {
  count: number;
  rows: IMessage[];
}

export interface IGetMessage {
  (index?: number, limit?: number): void;
}
