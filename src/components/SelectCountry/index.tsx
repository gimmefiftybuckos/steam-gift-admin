import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { styles } from './styles';
import { IProduct, Actions } from '../../types';
import { countryCodesMap, countryMapKeys } from '../../utils';

type SelectCountryProps = {
    dispatch: (actions: Actions) => void;
    data: IProduct;
    point: 'senderRegion' | 'receiverRegion';
};

export const SelectCountryForm: React.FC<SelectCountryProps> = ({ dispatch, data, point }) => {
    let pointName = '';
    switch (point) {
        case 'senderRegion':
            pointName = 'From';
            break;
        case 'receiverRegion':
            pointName = 'To';
            break;
    }

    return (
        <FormControl fullWidth>
            <InputLabel id={point + '-label'}>{pointName}</InputLabel>
            <Select
                sx={styles.selectInput}
                onChange={(event) =>
                    dispatch({
                        payload: event.target.value as string,
                        type: `set_${point}`
                    })
                }
                value={data[point]}
                labelId={point + 'label'}
                label={pointName}
                required
                fullWidth
            >
                <MenuItem value="">None</MenuItem>
                {countryMapKeys.map((countryName) => {
                    return (
                        <MenuItem key={countryName} value={countryCodesMap.get(countryName)}>
                            {countryName}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};
