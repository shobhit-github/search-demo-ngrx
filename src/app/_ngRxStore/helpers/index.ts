
import * as QS from 'qs';


export * from './customer.helper';

export const toQueryString = (object): string => unescape( QS.stringify(object) );



