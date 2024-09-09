import {
    Actions,
    ActionType,
    FormContextProps,
    IProduct,
    IProductDispatch,
    ListContextProps
} from './types';

export const countryCodesMap = new Map<string, string>([
    ['Australia', 'AU'],
    ['Brazil', 'BR'],
    ['Canada', 'CA'],
    ['Chile', 'CL'],
    ['China', 'CN'],
    ['CIS', 'CIS'],
    ['Colombia', 'CO'],
    ['Costa Rica', 'CR'],
    ['Europe', 'EU'],
    ['Hong Kong', 'HK'],
    ['India', 'IN'],
    ['Indonesia', 'ID'],
    ['Israel', 'IL'],
    ['Japan', 'JP'],
    ['Kazakhstan', 'KZ'],
    ['Kuwait', 'KW'],
    ['LATAM', 'AR'],
    ['Malaysia', 'MY'],
    ['MENA', 'TR'],
    ['Mexico', 'MX'],
    ['New Zealand', 'NZ'],
    ['Norway', 'NO'],
    ['Peru', 'PE'],
    ['Philippines', 'PH'],
    ['Poland', 'PL'],
    ['Qatar', 'QA'],
    ['Russia', 'RU'],
    ['Saudi Arabia', 'SA'],
    ['Singapore', 'SG'],
    ['South Africa', 'ZA'],
    ['South Asia', 'PK'],
    ['South Korea', 'KR'],
    ['Switzerland', 'CH'],
    ['Taiwan', 'TW'],
    ['Thailand', 'TH'],
    ['UAE', 'AE'],
    ['Ukraine', 'UA'],
    ['United Kingdom', 'UK'],
    ['USA', 'US'],
    ['Uruguay', 'UY'],
    ['Vietnam', 'VN']
]);

export const countryCodesToCurrencyMap = new Map<string, { country: string; currency: string }>([
    ['AU', { country: 'Australia', currency: 'AUD' }],
    ['BR', { country: 'Brazil', currency: 'BRL' }],
    ['CA', { country: 'Canada', currency: 'CAD' }],
    ['CL', { country: 'Chile', currency: 'CLP' }],
    ['CN', { country: 'China', currency: 'CNY' }],
    ['CIS', { country: 'CIS', currency: 'CIS' }],
    ['CO', { country: 'Colombia', currency: 'COP' }],
    ['CR', { country: 'Costa Rica', currency: 'CRC' }],
    ['EU', { country: 'Europe', currency: 'EUR' }],
    ['HK', { country: 'Hong Kong', currency: 'HKD' }],
    ['IN', { country: 'India', currency: 'INR' }],
    ['ID', { country: 'Indonesia', currency: 'IDR' }],
    ['IL', { country: 'Israel', currency: 'ILS' }],
    ['JP', { country: 'Japan', currency: 'JPY' }],
    ['KZ', { country: 'Kazakhstan', currency: 'KZT' }],
    ['KW', { country: 'Kuwait', currency: 'KWD' }],
    ['AR', { country: 'LATAM', currency: 'ARS' }],
    ['MY', { country: 'Malaysia', currency: 'MYR' }],
    ['TR', { country: 'MENA', currency: 'TRY' }],
    ['MX', { country: 'Mexico', currency: 'MXN' }],
    ['NZ', { country: 'New Zealand', currency: 'NZD' }],
    ['NO', { country: 'Norway', currency: 'NOK' }],
    ['PE', { country: 'Peru', currency: 'PEN' }],
    ['PH', { country: 'Philippines', currency: 'PHP' }],
    ['PL', { country: 'Poland', currency: 'PLN' }],
    ['QA', { country: 'Qatar', currency: 'QAR' }],
    ['RU', { country: 'Russia', currency: 'RUB' }],
    ['SA', { country: 'Saudi Arabia', currency: 'SAR' }],
    ['SG', { country: 'Singapore', currency: 'SGD' }],
    ['ZA', { country: 'South Africa', currency: 'ZAR' }],
    ['PK', { country: 'South Asia', currency: 'PKR' }],
    ['KR', { country: 'South Korea', currency: 'KRW' }],
    ['CH', { country: 'Switzerland', currency: 'CHF' }],
    ['TW', { country: 'Taiwan', currency: 'TWD' }],
    ['TH', { country: 'Thailand', currency: 'THB' }],
    ['AE', { country: 'UAE', currency: 'AED' }],
    ['UA', { country: 'Ukraine', currency: 'UAH' }],
    ['UK', { country: 'United Kingdom', currency: 'GBP' }],
    ['US', { country: 'USA', currency: 'USD' }],
    ['UY', { country: 'Uruguay', currency: 'UYU' }],
    ['VN', { country: 'Vietnam', currency: 'VND' }]
]);

export const countryMapKeys: string[] = Array.from(countryCodesMap.keys());

export const timeMap = new Map<string, number>([
    ['5 Min', 5],
    ['60 Min', 60],
    [`12 H`, 720],
    ['1 Day', 1440],
    ['7 Days', 10080],
    ['All time', 0]
]);

export const timeMapKeys: string[] = Array.from(timeMap.keys());

export const setValue = (state: IProduct, action: Actions): IProductDispatch => {
    switch (action.type) {
        case ActionType.SetSenderRegion:
            return { ...state, senderRegion: action.payload };
        case ActionType.SetReceiverRegion:
            return { ...state, receiverRegion: action.payload };
        case ActionType.SetTitle:
            return { ...state, title: action.payload };
        case ActionType.SetPrice:
            return { ...state, price: action.payload };
        case ActionType.SetProductData:
            return {
                ...state,
                title: action.payload.title,
                price: action.payload.price,
                senderRegion: action.payload.senderRegion,
                receiverRegion: action.payload.receiverRegion
            };
        default:
            return state;
    }
};

export const productDataDefault = {
    senderRegion: '',
    receiverRegion: '',
    title: '',
    price: 0
};

export const initialListContext: ListContextProps = {
    productsDataState: null,
    logsDataState: null
};

export const initialFormContext: FormContextProps = {
    productsDataState: null,
    setData: () => {},
    dispatch: () => {}
};

export const callProductData = async (
    async: () => Promise<IProduct[] | undefined>,
    setState: (value: IProduct[] | null) => void
) => {
    try {
        const data = await async();
        setState(data || null);
    } catch (error) {
        console.error(error);
    }
};

export const BASE_INTERVAL = 60;

export const callLogsData = async (
    async: (value: number) => Promise<string[] | undefined>,
    setState: (value: string[] | null) => void,
    interval: number
) => {
    try {
        const data = await async(interval);
        setState(data || null);
    } catch (error) {
        console.error(error);
    }
};

export const fetchData = async <T, A>(
    asyncFunc: (interval: A) => Promise<T | undefined>,
    setState: (value: T | null) => void,
    interval?: A
) => {
    const timer = setTimeout(() => {
        setState(null);
    }, 120);
    try {
        const data = await asyncFunc(interval as A);
        setState(data || null);
        clearTimeout(timer);
    } catch (error) {
        console.error(error);
    }
};
