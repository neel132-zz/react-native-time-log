export const defaultStyle = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 100,
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 0.85,
        margin: 20,
        flexDirection: 'column',
    },
    dateContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dotContainer: {
        borderLeftWidth: 0.5,
        borderLeftWidth: 1,
        position: 'relative',
        borderRadius: 100,
        width: 0.5,
    },
    row: {
        flexDirection: 'row', 
    },
    dot: {
        borderRadius: 50,
        width: 12,
        height: 12,
        position: 'absolute',
        left: -6,
        backgroundColor: 'orange',
        top:'49%',
    },
    card: {
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0.5,
            height: 2
        },
        shadowOpacity: 1,
        padding: 10,
    },
    date: {
        color: '#90a4ae',
        fontSize: 16,
        textAlign: 'center',
    },
    imageContainer: {
        padding: 5,
    },
    titleContainer: {
        padding: 5,
    },
    title: {
        color: '#546e7a',
        fontSize: 14,
        fontWeight: 'bold',
    },
    descriptionContainer: {
        padding: 5,
    },
    description: {
        color: '#546e7a',
        fontSize: 10,
    },
    image: {
        width: 18,
        height: 18,
    }
  };