import { useContext, useState } from 'react';
import { List } from '@mui/material';

import { styles } from './styles';
import { ActionType } from '../../types';
import { asyncDeleteProduct } from '../../api';

import { ListContext } from '../../App';
import { ProductItem } from '../ProductItem';

export const ProductsList = () => {
    const { listData, productsDataState, setData, dispatch, setSelectId } = useContext(ListContext);
    const [activeItemState, setActive] = useState('');

    const selectHandler = (productId: string) => {
        const product = listData?.find((item) => {
            const { title, receiverRegion } = item;
            const currentProductId = `${title}_${receiverRegion}`;

            if (productId === currentProductId) {
                setSelectId?.(currentProductId);
                setActive?.(currentProductId);
                return item;
            }
        });

        if (product) {
            dispatch?.({ payload: product, type: ActionType.SetProductData });
        }
    };

    const deleteHandler = async (productId: string, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await asyncDeleteProduct(productId);

        const updatedData = productsDataState?.filter((item) => {
            const { title, receiverRegion } = item;
            const currentId = `${title}_${receiverRegion}`;
            return currentId !== productId;
        });

        updatedData ? setData?.(updatedData) : null;
    };

    return (
        <List sx={styles.list}>
            {listData?.map((item, index) => {
                return (
                    <ProductItem
                        selectHandler={selectHandler}
                        deleteHandler={deleteHandler}
                        activeItemState={activeItemState}
                        product={item}
                        key={index}
                    />
                );
            })}
        </List>
    );
};
