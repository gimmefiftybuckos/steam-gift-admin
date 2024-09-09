import { createContext, ReactElement, useEffect, useReducer, useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, GlobalStyles } from '@mui/material';

import { styles } from './styles';
import { ActionType, ILog, IProduct } from './types';
import { asyncGetLogs, asyncGetProducts } from './api';
import {
    BASE_INTERVAL,
    fetchData,
    initialFormContext,
    initialListContext,
    productDataDefault,
    setValue
} from './utils';

import { ProductForm } from './components/ProductForm';
import { SidebarContent } from './components/SidebarContent';
import { LogsContent } from './components/LogsContent';

export const ListContext = createContext(initialListContext);
export const FormContext = createContext(initialFormContext);

export const App = (): ReactElement => {
    const [productsDataState, setData] = useState<IProduct[] | null>(null);
    const [logsDataState, setLogsData] = useState<ILog[] | null>(null);
    const [toSearchState, setSearchState] = useState<IProduct[] | null>(null);

    const [productState, dispatch] = useReducer(setValue, productDataDefault); // IProduct

    const [dialogOpen, setDialogOpen] = useState(false);
    const [logsShow, setShowLogsState] = useState(false);

    const [selectedId, setSelectId] = useState('');
    const [logsIntervalState, setIntervalState] = useState(BASE_INTERVAL);

    const baseFormInit = {
        productsDataState: productsDataState as IProduct[],
        setData: setData,
        dispatch: dispatch
    };

    const handleDialog = () => {
        setDialogOpen(!dialogOpen);
        dispatch({ payload: productDataDefault, type: ActionType.SetProductData });
    };

    const handleShowLogs = () => {
        if (!logsShow) {
            fetchData(asyncGetLogs, setLogsData, logsIntervalState);
            setLogsData(null);
        }

        setShowLogsState(!logsShow);
    };

    useEffect(() => {
        fetchData(asyncGetProducts, setData);
    }, []);

    useEffect(() => {
        fetchData(asyncGetLogs, setLogsData, logsIntervalState);
    }, [logsIntervalState]);

    return (
        <>
            <GlobalStyles styles={styles.globalStyles} />

            <Box sx={styles.main}>
                <ListContext.Provider
                    value={{
                        listData: toSearchState || productsDataState,
                        productsDataState: productsDataState,
                        dispatch,
                        setData,
                        setSelectId
                    }}
                >
                    <SidebarContent
                        productsDataState={productsDataState}
                        logsShow={logsShow}
                        setSearchState={setSearchState}
                        handleShowLogs={handleShowLogs}
                        handleDialog={handleDialog}
                    />
                </ListContext.Provider>

                {logsShow ? (
                    <ListContext.Provider
                        value={{
                            logsDataState: logsDataState
                        }}
                    >
                        <LogsContent
                            logsIntervalState={logsIntervalState}
                            setIntervalState={setIntervalState}
                        />
                    </ListContext.Provider>
                ) : (
                    <Box sx={styles.productFormContainer}>
                        <FormContext.Provider
                            value={{ ...baseFormInit, selectedId, inDialog: false }}
                        >
                            <ProductForm productState={productState} />
                        </FormContext.Provider>
                    </Box>
                )}
            </Box>

            <Dialog open={dialogOpen} onClose={handleDialog} PaperProps={{ sx: styles.dialog }}>
                <DialogTitle sx={styles.dialogTitle}>New Product</DialogTitle>
                <DialogContent>
                    <FormContext.Provider
                        value={{ ...baseFormInit, handleDialog: handleDialog, inDialog: true }}
                    >
                        <ProductForm productState={productState} />
                    </FormContext.Provider>
                </DialogContent>
            </Dialog>
        </>
    );
};
