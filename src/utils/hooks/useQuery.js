import { useLocation } from 'react-router';

function useQuery (query) {
  return new URLSearchParams(useLocation().search).get(query);
}

export default useQuery;