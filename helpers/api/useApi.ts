import axios from 'axios';

interface Props {
  path: string
}

const useApi = (props: Props): Promise<[any, string]> => {
  const constructed = `https://cms.patientory.com${props.path}`
  return axios.get(constructed).then(d => [d.data, d.headers["x-wp-totalpages"]]);
}

export default useApi;