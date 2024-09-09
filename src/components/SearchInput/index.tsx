import { useEffect, useRef } from 'react';
import { TextField } from '@mui/material';

import { styles } from './styles';
import { IProduct } from '../../types';

type SearchInputProps = {
    onChange: (value: IProduct[] | null) => void;
    value: IProduct[] | null;
};

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const inputHandler = () => {
        if (searchInputRef.current) {
            const searchValue = searchInputRef.current.value.toLocaleLowerCase().trim();

            const filtredDataState = value?.filter((product) => {
                if (product.title) {
                    const title = product.title.toLowerCase();
                    if (title.includes(searchValue)) {
                        return product;
                    }
                }
            });

            if (filtredDataState) onChange?.(filtredDataState);
        }
    };

    useEffect(() => {
        inputHandler();
    }, [value]);

    return (
        <TextField
            sx={styles.searchInput}
            inputRef={searchInputRef}
            onChange={inputHandler}
            autoFocus
            id="search-product-name"
            label="Search product"
            type="text"
            variant="outlined"
            fullWidth
        />
    );
};
