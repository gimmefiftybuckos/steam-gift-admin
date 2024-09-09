import { Box, Button } from '@mui/material';

import { styles } from './styles';
import { IProduct } from '../../types';

import { SearchInput } from '../SearchInput';
import { DataListContainer } from '../DataListContainer';

type SidebarContentProps = {
    productsDataState: IProduct[] | null;
    logsShow: boolean;
    setSearchState: (value: IProduct[] | null) => void;
    handleDialog: () => void;
    handleShowLogs: () => void;
};

export const SidebarContent = ({
    productsDataState,
    logsShow,
    setSearchState,
    handleDialog,
    handleShowLogs
}: SidebarContentProps) => {
    return (
        <Box sx={[styles.panelContainer, styles.sidebarContainer]}>
            <Box sx={styles.searchInputContainer}>
                <SearchInput value={productsDataState} onChange={setSearchState} />
                <Button sx={styles.button} variant="outlined" onClick={handleDialog}>
                    New Prod
                </Button>
                <Button
                    sx={styles.button}
                    color={logsShow ? 'error' : 'primary'}
                    variant="outlined"
                    onClick={handleShowLogs}
                >
                    {logsShow ? 'Hide Logs' : 'Show Logs'}
                </Button>
            </Box>
            <Box
                sx={[
                    styles.listContainer,
                    {
                        bgcolor: '#fbfcfe'
                    }
                ]}
            >
                <DataListContainer />
            </Box>
        </Box>
    );
};
