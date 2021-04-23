import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import * as JogosService from '../campeonato'

export default function Home(props) {

    const {navigation} = props;

    const [camp, setCamp] = useState([])

    useLayoutEffect(() => {
        JogosService.getCamp()
            .then((dados) => {
                setCamp(dados[1])
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent:'center', height:'100%', }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Fases", camp)}
            >
                <View style={{ marginTop: 20,}}>
                    <Text style={{ fontSize: 22, color: 'green'}}>{camp.nome} </Text>
                </View>
                <Image
                style={{ height: 150, width: 150, marginTop: 20,}}
                source={{
                    uri: camp.logo,
                }}
                />

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({});