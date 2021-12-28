import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height -130,
    },
    videoPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',   
    },
    bottomContainer: {
        padding: 10, 
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 4,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    songName: {
        color: '#fff',
        fontSize: 17,
        marginLeft: 5,
    }, 
    songImage: { 
        width: 40, 
        height: 40,
        borderRadius: 25, 
        borderWidth: 1, 
        borderColor: '#fff',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300, 
        justifyContent: 'space-between',
        marginRight: 4,
    },
    profilePicture: {
        width: 50, 
        height: 50,
        borderRadius: 25, 
        borderWidth: 2, 
        borderColor: '#fff',
    },

    iconContainer: {
        alignItems: 'center',
        color: '#fff',
    },

    statsLabel: {
        color: '#fff', 
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    }
    

});

export default styles;


