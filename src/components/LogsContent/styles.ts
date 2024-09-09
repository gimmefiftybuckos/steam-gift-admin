export const styles = {
    panelContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingBlockStart: 4,
        maxBlockSize: '100vh',
        inlineSize: '100%'
    },
    listContainer: {
        paddingInline: 3,
        inlineSize: '100%',
        overflowY: 'auto',
        borderRadius: 4,
        borderBlockStart: '1px solid rgba(0, 0, 0, 0.12)'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBlockEnd: 4
    },
    button: {
        borderRadius: 4,
        maxInlineSize: '5vw',
        minInlineSize: '3vw',
        blockSize: '56px',
        inlineSize: '100%',
        fontSize: 'clamp(0.6rem, 0.446rem + 0.378vw, 0.9rem)'
    }
};
