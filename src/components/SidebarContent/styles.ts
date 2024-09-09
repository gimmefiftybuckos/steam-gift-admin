export const styles = {
    panelContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxBlockSize: '100vh',
        inlineSize: '100%',
        paddingBlockStart: 4
    },
    sidebarContainer: {
        maxInlineSize: '40vw',
        bgcolor: '#fbfcfe',
        borderInlineEnd: '1px solid rgba(0, 0, 0, 0.12)'
    },
    searchInputContainer: {
        display: 'flex',
        gap: 2,
        justifyContent: 'space-between',
        marginInline: 'auto',
        marginBlockEnd: 4,
        paddingInline: 3,
        inlineSize: '100%'
    },
    button: {
        borderRadius: 4,
        maxInlineSize: '5vw',
        minInlineSize: '3vw',
        blockSize: '56px',
        inlineSize: '100%',
        fontSize: 'clamp(0.6rem, 0.446rem + 0.378vw, 0.9rem)'
    },
    listContainer: {
        paddingInline: 3,
        inlineSize: '100%',
        overflowY: 'auto',
        borderRadius: 4,
        borderBlockStart: '1px solid rgba(0, 0, 0, 0.12)'
    }
};
