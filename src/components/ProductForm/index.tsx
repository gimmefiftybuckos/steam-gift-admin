import { useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { styles } from './styles';
import { ActionType, IProduct } from '../../types';
import { asyncPostProduct, asyncUpdateProduct } from '../../api';
import { productDataDefault } from '../../utils';

import { SelectCountryForm } from '../SelectCountry';
import { FormContext } from '../../App';

type ProductFormProps = {
    productState: IProduct;
};

export const ProductForm = ({ productState }: ProductFormProps) => {
    const { handleDialog, setData, dispatch, selectedId, inDialog, productsDataState } =
        useContext(FormContext);

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inDialog) {
            const data = await asyncPostProduct(productState);

            if (data) {
                const updatedData = [productState].concat(productsDataState ?? []);

                setData(updatedData);
            }
            handleDialog?.();
        } else {
            const data = await asyncUpdateProduct(selectedId as string, productState);

            if (data) {
                const index = productsDataState?.findIndex((item) => {
                    const { title, receiverRegion } = item;
                    return selectedId === `${title}_${receiverRegion}`;
                });

                if (typeof index === 'number' && productsDataState) {
                    const updateData = [...productsDataState];
                    updateData[index] = productState;

                    setData(updateData);
                }
            }
        }

        dispatch({ payload: productDataDefault, type: ActionType.SetProductData });
    };

    return (
        <form action="submit" onSubmit={submitHandler}>
            <Box sx={[styles.mainContainer, inDialog ? styles.dialogMainContainer : null]}>
                <Box sx={styles.formContainer}>
                    <TextField
                        sx={styles.input}
                        onChange={(event) =>
                            dispatch({ payload: event.target.value, type: ActionType.SetTitle })
                        }
                        value={productState.title}
                        autoFocus
                        required
                        id="product-name"
                        label="Product name"
                        type="text"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        sx={styles.input}
                        onChange={(event) =>
                            dispatch({
                                payload: parseFloat(event.target.value),
                                type: ActionType.SetPrice
                            })
                        }
                        value={productState.price}
                        required
                        id="product-price"
                        label="Product price"
                        type="number"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
                <Box sx={styles.formContainer}>
                    <SelectCountryForm
                        dispatch={dispatch}
                        data={productState}
                        point="senderRegion"
                    />
                    <SelectCountryForm
                        dispatch={dispatch}
                        data={productState}
                        point="receiverRegion"
                    />
                </Box>
            </Box>
            <Box sx={styles.buttonContainer}>
                {inDialog ? (
                    <>
                        <Button onClick={handleDialog}>Cancel</Button>
                        <Button type="submit">Add</Button>
                    </>
                ) : (
                    <Button type="submit">Update</Button>
                )}
            </Box>
        </form>
    );
};
