import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#CD113B'
    },
    green:{
        width: 130,
        height: 130,
        backgroundColor: '#57CC99',
        borderRadius: 25,
        margin: 25
    },
    inner:{
        width: 320,
    },
    large: {
        width: 280,
        height: 500,
        backgroundColor: '#CD113B',
        borderRadius: 25,
        padding: 10,
        margin: 10,
        flex: 1,
        alignContent: "center",
        justifyContent: 'center'
    },
    largeimg: {
        width: 300,
        height: 350
    },
    longside: {
        borderTopEndRadius: 25,
        borderBottomEndRadius: 25,
        borderWidth: 5,
        borderColor: '#CD113B',
        width: '60%',
        height: '90%',
        position: 'relative',
        top: 10,
        left: -5,
        backgroundColor: '#fff',
        padding: 10
    },
    lower:{
        width: '90%',
        height: 120,
        borderRadius: 25,
        backgroundColor: '#CD113B',
        marginTop: 30,
        marginLeft: 20
    },
    off:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: '100%',
        backgroundColor: 'transparent',
        transition: '0.4s'
    },
    on:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 25,
        transition: '0.4s'
    },
    orange:{
        width: 130,
        height: 130,
        backgroundColor: '#FF7600',
        borderRadius: 25,
        margin: 25
    },
    orangeLong:{
        width: '90%',
        height: 130,
        backgroundColor: '#FF7600',
        borderRadius: 25,
        margin: 25
    },
    red:{
        width: 130,
        height: 130,
        backgroundColor: '#CD113B',
        borderRadius: 25,
        margin: 25
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        flexDirection: 'row',
        width: 500,
        height: 40,
        marginTop: 20,
        marginLeft: 10
    },
    searchButton: {
        backgroundColor: '#CD113B',
        width: 80,
        height: '100%',
        borderBottomEndRadius: 25,
        borderTopEndRadius: 25,
        padding: 5
    },
    searchInput: {
        padding: 10,
        borderColor: '#CD113B',
        borderBottomStartRadius: 25,
        borderTopStartRadius: 25,
        borderWidth: 3,
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        fontSize: 20
    },
    searchText: {
        color: '#fff',
        fontSize: 20
    },
    sectName: {
        marginLeft: 10,
        fontSize: 25,
        color: '#CD113B'
    },
    shortside: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CD113B',
        width: 160,
        height: '100%',
        borderRadius: 25
    },
    small: {
        width: 160,
        height: 160,
        backgroundColor: '#CD113B',
        borderRadius: '50%',
        paddingTop: 10,
        paddingLeft: 10,
        margin: 10,
        flex: 1,
        alignContent: "center",
        justifyContent: 'center'
    },
    smallimg: {
        width: 120,
        height: 120
    },
    stats: {
        flexDirection: 'row',
        height: 200,
        width: '90%',
        marginLeft: 20,
        marginTop: 20
    },
    statFrame:{
        backgroundColor: '#fff',
        width: '100%',
        height: 395,
        marginTop: 30,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    statText: {
        fontSize: 18
    },
    tab:{
        borderRadius: 25,
        backgroundColor: '#e6e6e6',
        width: 250,
        flexDirection: 'row',
        height: 50,
        marginTop: 40,
        marginLeft: 40
    },
    topdrop: {
        backgroundColor: '#CD113B',
        width: '100%',
        height: 200,
        borderBottomStartRadius: 25,
        borderBottomRightRadius: 25,
        position: 'relative',
        marginBottom: 20
    },
    yellow:{
        width: 130,
        height: 130,
        backgroundColor: '#FFA900',
        borderRadius: 25,
        margin: 25
    }
})

const titles = StyleSheet.create({
    h1: {
        fontSize: 40,
        color: '#fff'
    },
    h2: {
        fontSize: 35,
        color: '#fff'
    },
    h3: {
        fontSize: 30,
        color: '#fff'
    },
    h4: {
        fontSize: 25,
        color: '#fff'
    },
    h5: {
        fontSize: 20,
        color: '#fff'
    },
    h6: {
        fontSize: 15,
        color: '#000'
    },
    smallText:{
        fontSize: 20,
        color: '#000',
    },
    colonm:{
        flex: 1,
        height: 200,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    on:{
        fontSize: 20,
        color: '#000'
    },
    off:{
        fontSize: 20,
        color: '#A9A9A9'
    },
    labelbox:{
        flexDirection: 'row',
        marginLeft: 70,
        marginTop: 10
    },
    label:{
        fontSize: 20
    },
    labelActive:{
        fontSize: 20,   
        color: '#fff'
    },
    statName:{
        fontSize: 20,
        color: '#fff',
        marginTop: 10,
        marginLeft: 10
    },
    statData:{
        fontSize: 25,
        color: '#fff',
        marginTop: 25,
        marginLeft: 20
    }
})

export { styles, titles}