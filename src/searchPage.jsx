import React from 'react';

import useQuery from './utils/hooks/useQuery';

export default function SearchPage() {
  const query = useQuery('q');
  console.log({searchTerm: query});
  return (
    <div>
      <h1>This is Search Page</h1>
    </div>
  )
}
