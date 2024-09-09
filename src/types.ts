import { Dispatch } from 'react';

export interface IProduct {
    title: string;
    price: number;
    senderRegion: string;
    receiverRegion: string;
}

export interface ILog {
    logs: string[];
}

export interface IProductDispatch extends IProduct {
    set_productData?: IProduct;
}

type KeyType = `set_${'senderRegion' | 'receiverRegion'}`;

export enum ActionType {
    SetSenderRegion = 'set_senderRegion',
    SetReceiverRegion = 'set_receiverRegion',
    SetTitle = 'set_title',
    SetPrice = 'set_price',
    SetProductData = 'set_productData'
}

export type Actions =
    | { type: KeyType; payload: string }
    | { type: ActionType.SetTitle; payload: string }
    | { type: ActionType.SetPrice; payload: number }
    | { type: ActionType.SetProductData; payload: IProduct };

export interface ListContextProps {
    listData?: IProduct[] | null;
    productsDataState?: IProduct[] | null;
    logsDataState?: ILog[] | null;
    dispatch?: Dispatch<Actions>;
    setData?: (data: IProduct[]) => void;
    setSelectId?: (value: string) => void;
}

export interface FormContextProps {
    productsDataState: IProduct[] | null;
    selectedId?: string;
    inDialog?: boolean;
    dispatch: Dispatch<Actions>;
    setData: (data: IProduct[]) => void;
    handleDialog?: () => void;
}
