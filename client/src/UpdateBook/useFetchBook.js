import { getBook } from "../api";
import { useQuery } from 'react-query';

export const useFetchBook = (id) => {

    console.log('madeit');
    const { data, error, isLoading, isError } = useQuery(
        ["book", { id }], getBook);

    return { data, error, isLoading, isError };
};

