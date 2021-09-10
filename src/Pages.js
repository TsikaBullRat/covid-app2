import React, { useState } from 'react'
import { ScrollView, View, Text, Switch } from 'react-native'
import { Sect, InfoCard, precautions, Tile, StatTab, Search, symptoms, getData, Symptom, LowerBlock, styles, SwitchTab, titles, Labels, Frame, StatSet } from '.';

const Home = ({ navigation, stats }) => {

    const [switches, setOnOff] = useState([false, false, false])
    const [switched, Setter] = useState({
        Common: () => setOnOff([!switches[0], false, false]),
        Less: () => setOnOff([false, !switches[1], false]),
        Serious: () => setOnOff([false, false, !switches[2]])
    })

    return (
        <ScrollView >
            <InfoCard />
            <Sect name="Prevention" Nav={navigation.navigate}>
                {precautions.map(item => <Tile size="small" data={item} key={item.id} />)}
            </Sect>
            <LowerBlock />
        </ScrollView>
    );
}

const Prevention = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {precautions.map(item => <Tile size="large" data={item} key={item.id} />)}
        </ScrollView>
    )
}

const Stats = ({ stats, all }) => {

    const [data, setData] = useState(stats.Totals)

    const Change = name => {
        switch (name) {
            case "Today":
                setData(stats.Today)
                break;
            case "Total":
                setData(stats.Totals)
                break;
            case "Global":
                setData(all)
                break;
            default:
                break;
        }
    }

    console.log(stats)
    return (
        global ? (
            <View style={styles.body}>
                <Text style={titles.h5}>Statistics</Text>
                <SwitchTab Func={Change}/>
                <Labels Func={Change}/>
                <Frame>
                    <StatSet data={data} />
                </Frame>
                {/*
                Boxes
                 */}
            </View>
        ) : null
    )
}

export { Home, Prevention, Stats }