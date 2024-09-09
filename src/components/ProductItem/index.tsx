import React from 'react';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { styles } from './styles';
import { IProduct } from '../../types';
import { countryCodesToCurrencyMap } from '../../utils';

type ProductItemProps = {
    selectHandler: (productId: string) => void;
    deleteHandler: (productId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
    activeItemState: string;
    product: IProduct;
};

export const ProductItem: React.FC<ProductItemProps> = ({
    selectHandler,
    deleteHandler,
    activeItemState,
    product
}) => {
    const { title, price, senderRegion, receiverRegion } = product;

    const productId = `${title}_${receiverRegion}`;

    const senderRegionCurrency = countryCodesToCurrencyMap.get(senderRegion)?.currency;
    const senderCountryName = countryCodesToCurrencyMap.get(senderRegion)?.country;
    const receiverCountryName = countryCodesToCurrencyMap.get(receiverRegion)?.country;

    return (
        <ListItem
            selected={activeItemState === productId}
            sx={styles.listItem}
            role={'button'}
            dense
            key={productId}
            secondaryAction={
                <IconButton onClick={(event) => deleteHandler(productId, event)} edge="end">
                    <DeleteOutlinedIcon />
                </IconButton>
            }
            onClick={() => selectHandler(productId)}
        >
            <ListItemText
                sx={styles.primaryTextElement}
                primaryTypographyProps={styles.primaryTypography}
                secondaryTypographyProps={styles.secondaryTypography}
                primary={title}
                secondary={senderCountryName + '—' + receiverCountryName}
            />
            <ListItemText
                sx={styles.secondaryTextElement}
                secondaryTypographyProps={styles.secondaryTypography}
                secondary={price + ' ' + senderRegionCurrency}
            />
        </ListItem>
    );
};
