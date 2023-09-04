import { ComponentType } from 'react';
import { useDataFetching } from '../hooks';

const withDataFetching = (endpoint: string) => <P extends {}>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const {  loading, error } = useDataFetching(endpoint);

    if (loading) {
      return <div>Loading...</div>; 
    }

    if (error) {
      return <div>Error: {error}</div>; 
    }

    
    return <WrappedComponent {...props}  />;
  };
};

export default withDataFetching;
