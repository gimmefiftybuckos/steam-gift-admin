import { useContext } from 'react';
import { List } from '@mui/material';

import { styles } from './styles';
import { ILog } from '../../types';

import { ListContext } from '../../App';
import { LogItem } from '../LogItem';

export const LogsList = () => {
    const { logsDataState } = useContext(ListContext);

    // сложно с адаптивом, мб стоит собирать одну строку

    return (
        <List sx={styles.list}>
            {logsDataState?.map((item: ILog, index) => {
                return <LogItem key={index} logs={item.logs} />;
            })}
        </List>
    );
};
