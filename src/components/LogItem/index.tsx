import { ListItem, ListItemText } from '@mui/material';

import { styles } from './styles';
import { ILog } from '../../types';

export const LogItem = ({ logs }: ILog) => {
    return (
        <ListItem sx={styles.logsItem}>
            {logs.map((item, index) => {
                return (
                    <ListItemText
                        sx={styles.logItemText}
                        secondary={item}
                        key={index}
                        secondaryTypographyProps={styles.primaryTypography}
                    />
                );
            })}
        </ListItem>
    );
};
