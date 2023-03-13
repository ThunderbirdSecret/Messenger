import { APIError } from 'api/typesAPI';

// TODO: Реализовать спецификацию ошибок
export const isApiReturnedError = (response: unknown | APIError): response is APIError => {
  if (response) {
    return Object.prototype.hasOwnProperty.call(response, 'reason');
  }

  return false;
};
