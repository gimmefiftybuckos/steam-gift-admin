export const styles = {
    listItem: {
        height: 70,
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'outline 0.1s',
        '&:hover': {
            outline: '1px solid rgba(0, 0, 0, 0.24)',
            backgroundColor: '#ebebeb'
        },
        '&.Mui-selected': {
            transition: 'background-color 0.2s, outline 0.2s',
            '&:hover': {
                outline: '1px solid rgba(0, 0, 0, 0.24)',
                backgroundColor: '#d3d3d3'
            }
        }
    },
    primaryTextElement: {
        width: '80%'
    },
    secondaryTextElement: {
        width: '20%',
        textAlign: 'end'
    },
    primaryTypography: {
        fontSize: 'clamp(0.9rem, 0.595rem + 0.504vw, 1.2rem)'
    },
    secondaryTypography: {
        fontSize: 'clamp(0.7rem, 0.598rem + 0.252vw, 0.9rem)'
    }
};
