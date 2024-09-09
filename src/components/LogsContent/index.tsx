import { useContext, useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';

import { styles } from './styles';
import { timeMap, timeMapKeys } from '../../utils';

import { DataListContainer } from '../DataListContainer';
import { ListContext } from '../../App';

type LogsContentProps = {
    setIntervalState: (value: number) => void;
    logsIntervalState: number;
};

export const LogsContent = ({ setIntervalState, logsIntervalState }: LogsContentProps) => {
    const { logsDataState } = useContext(ListContext);
    const [selectedButton, setSelectedButton] = useState<number | null>(logsIntervalState);

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = parseInt(event.currentTarget.value);

        setIntervalState(value);
        setSelectedButton(value);
    };

    return (
        <Box sx={styles.panelContainer}>
            <ButtonGroup sx={styles.buttonGroup}>
                {timeMapKeys.map((item, index) => {
                    const value = timeMap.get(item);
                    return (
                        <Button
                            disabled={logsDataState === null} // для того чтоб не спамить запросами
                            color={selectedButton === value ? 'error' : 'primary'}
                            onClick={clickHandler}
                            key={index}
                            value={value}
                            sx={styles.button}
                        >
                            {item}
                        </Button>
                    );
                })}
            </ButtonGroup>
            <Box sx={styles.listContainer}>
                <DataListContainer />
            </Box>
        </Box>
    );
};
