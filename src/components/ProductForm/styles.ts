export const styles = {
    mainContainer: {
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
        margin: 1
    },
    dialogMainContainer: {
        minInlineSize: 400
    },
    formContainer: {
        display: 'flex',
        flex: '1 1 250px',
        flexDirection: 'column',
        gap: 2
    },
    input: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 4
        },
        'input[type="number"]': {
            MozAppearance: 'textfield'
        },
        'input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none'
        },
        'input::-webkit-outer-spin-button': {
            WebkitAppearance: 'none'
        }
    },
    buttonContainer: {
        display: 'flex',
        gap: 3,
        marginBlockStart: 2
    }
};
