import { useContext } from 'react';
import { Box, ListItem, Typography } from '@mui/material';

import { styles } from './styles';

import { ProductsList } from '../ProductsList';
import { ListContext } from '../../App';
import { LogsList } from '../LogsList';

export const DataListContainer = () => {
    const { listData, logsDataState } = useContext(ListContext);

    const data = listData || logsDataState;
    const component = listData ? <ProductsList /> : <LogsList />;

    return (
        <Box>
            {data?.length === 0 ? (
                <ListItem sx={styles.listItem}>
                    <Typography variant="body1">Not found</Typography>
                </ListItem>
            ) : null}

            {data ? (
                component
            ) : (
                <ListItem sx={styles.listItem}>
                    <Typography variant="body1">Loading...</Typography>
                </ListItem>
            )}
        </Box>
    );
};
