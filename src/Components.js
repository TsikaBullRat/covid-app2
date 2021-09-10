import React, { useState } from 'react'
import { Image, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles, titles, symptoms } from '.';

const Frame = ({ children }) => {
    return (
        <View style={styles.statFrame}>
            {children}
        </View>
    )
}
const InfoCard = () => {
    return (
        <View style={styles.topdrop}>
            <View style={styles.inner}>
                <Text style={titles.h1}>Hey!!!</Text>
                <Text style={titles.h5}>
                    If you feel any of the covid-19 symptoms, do not hesitate to contact us.
                </Text>
            </View>
        </View>
    )
}

const Labels = ({Func}) => {
    const [selected, setSelect] = useState({ style1: titles.labelActive, style2: titles.label })
    const total = () =>{
        setSelect({ style1: titles.labelActive, style2: titles.label })
        Func("Total")
    }
    const today = () =>{
        setSelect({ style1: titles.label, style2: titles.labelActive })
        Func("Today")
    }
    return (
        <View style={titles.labelbox}>
            <Text style={selected.style1} onPress={total}>Total </Text>
            <Text style={titles.label}> / </Text>
            <Text style={selected.style2} onPress={today}> Today</Text>
        </View>
    )
}

const LowerBlock = () => {
    return (
        <View style={styles.lower}>

        </View>
    );
}

const Search = ({ Callback }) => {

    const [find, setCountry] = useState('')

    return (
        <View style={styles.search}>
            <TextInput placeholder="Find Country" onChangeText={text => setCountry(text)} style={styles.searchInput} />
            <TouchableOpacity onPress={() => Callback(find)} style={styles.searchButton}>
                <Text style={styles.searchText}>Enter</Text>
            </TouchableOpacity>
        </View>
    )
}

const Sect = ({ name, children, Nav }) => {

    return (
        <>
            <Text style={styles.sectName} onPress={() => Nav(name)}>{name}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {children}
            </ScrollView>
        </>
    )
}

const StatSet = ({ data }) => {

    if (data.label) {
        switch (data.label) {
            case "Today":
                return (
                    <>
                        <View style={styles.row}>
                            <View style={styles.yellow}>
                                <Text style={titles.statName}>{Object.keys(data)[2]}</Text>
                                <Text style={titles.statData}>{data.Deaths}</Text>
                            </View>
                            <View style={styles.red}>
                                <Text style={titles.statName}>{Object.keys(data)[3]}</Text>
                                <Text style={titles.statData}>{data.Active}</Text>
                            </View>
                        </View>
                        <View style={styles.orangeLong}>
                            <Text style={titles.statName}>{Object.keys(data)[1]}</Text>
                            <Text style={titles.statData}>{data.Case}</Text>
                        </View>
                    </>
                )
                break;
            case "Total":
                return (
                    <>
                        <View style={styles.row}>
                            <View style={styles.yellow}>
                                <Text style={titles.statName}>{Object.keys(data)[1]}</Text>
                                <Text style={titles.statData}>{data.Cases}</Text>
                            </View>
                            <View style={styles.red}>
                                <Text style={titles.statName}>{Object.keys(data)[2]}</Text>
                                <Text style={titles.statData}>{data.Deaths}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.green}>
                                <Text style={titles.statName}>{Object.keys(data)[3]}</Text>
                                <Text style={titles.statData}>{data.Recovery}</Text>
                            </View>
                            <View style={styles.orange}>
                                <Text style={titles.statName}>{Object.keys(data)[4]}</Text>
                                <Text style={titles.statData}>{data.Critical}</Text>
                            </View>
                        </View>
                    </>
                )
                break;
            default:
                return "Sum Ting Wong"
                break;
        }
    } else {
        return (
            <>
                <View style={styles.row}>
                    <View style={styles.yellow}>
                        <Text style={titles.statName}>{Object.keys(data)[0]}</Text>
                        <Text style={titles.statData}>{data.Cases}</Text>
                    </View>
                    <View style={styles.red}>
                        <Text style={titles.statName}>{Object.keys(data)[1]}</Text>
                        <Text style={titles.statData}>{data.Deaths}</Text>
                    </View>
                </View>
                <View style={styles.orangeLong}>
                    <Text style={titles.statName}>{Object.keys(data)[2]}</Text>
                    <Text style={titles.statData}>{data.Recovery}</Text>
                </View>
            </>
        )
    }
}

const StatTab = ({ data }) => {

    console.log(data)
    return (
        <View style={styles.stats}>
            <View style={styles.shortside}>
                <Text style={titles.h3}>{data.label}</Text>
            </View>
            <View style={styles.longside}>
                <Text style={styles.statText}>{`: ${data.label === "Today" ? data.Active : data.Cases}`}</Text>
                <Text style={styles.statText}>{`${Object.keys(data)[2]}: ${data.label === "Today" ? data.Cases : data.Deaths}`}</Text>
                <Text style={styles.statText}>{`${Object.keys(data)[3]}: ${data.label === "Today" ? data.Deaths : data.Recovery}`}</Text>
            </View>
        </View>
    )
}

const SwitchTab = () => {

    const [style, setStyle] = useState({
        left: styles.on,
        right: styles.off,
        t1: titles.on,
        t2: titles.off
    })

    const Switch = () => {
        if (style.left === styles.on) {
            setStyle({
                left: styles.off,
                right: styles.on,
                t1: titles.off,
                t2: titles.on
            })
        } else if (style.left === styles.off) {
            setStyle({
                left: styles.on,
                right: styles.off,
                t1: titles.on,
                t2: titles.off
            })
        }
    }

    return (
        <TouchableOpacity
            style={styles.tab}
            onPress={Switch}>
            <View style={style.left}>
                <Text style={style.t1}>My Country</Text>
            </View>
            <View style={style.right}>
                <Text style={style.t2}>Global</Text>
            </View>
        </TouchableOpacity>
    )
}

const Symptom = ({ flick }) => {


    return (
        <>
            <TouchableOpacity
                onPress={() => flick.Common()}
                style={styles.small}>
                <Text style={titles.h6}>Common</Text>
                <Image source={require('./res/common.png')} style={styles.smallimg} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={flick.Less}
                style={styles.small}>
                <Text style={titles.h6}>Less Common</Text>
                <Image source={require('./res/less_common.png')} style={styles.smallimg} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={flick.Serious}
                style={styles.small}>
                <Text style={titles.h6}>Serious</Text>
                <Image source={require('./res/warning.png')} style={styles.smallimg} />
            </TouchableOpacity>



        </>
    );
}

const Tile = ({ size, data }) => {

    const style = size === "small" ? styles.small : size === "large" ? styles.large : null
    const img = size === "small" ? styles.smallimg : size === "large" ? styles.largeimg : null
    const outer = size === "large" ? { justifyContent: 'center', alignItems: 'center' } : titles.colonm
    return (
        <View style={outer}>
            <View
                style={style}
            >
                <Image source={data.img} style={img} />
                {size === "large" ? <Text style={titles.h5}>{data.text}</Text> : null}
            </View>
            {size === "large" ? null : <Text style={titles.smallText}>{data.textshort}</Text>}
        </View>
    );
}



export { Sect, StatTab, InfoCard, Tile, Search, Symptom, LowerBlock, SwitchTab, Labels, Frame, StatSet }