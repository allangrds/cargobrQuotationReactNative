import useMethod from '../../helpers/request';
import { authUrl } from './urls';

const authenticate = body => useMethod('POST')(authUrl, {
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

export { authenticate };
