import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/get',
    method: 'get',
    response: (res: any) => {
      console.log(res);
      return {
        code: 0,
        data: {
          name: 'this is mock name'
        }
      };
    }
  }
] as MockMethod[];
