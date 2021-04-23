import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import * as FasesService from '../fase'

export default function Jogos(props) {
    const {navigation} = props;

    const [fases, setFases] = useState([])

    useLayoutEffect(() => {
        FasesService.getFases()
            .then((dados) => {
                setFases(dados)
            })
            .catch((erro) => console.log(erro))
    }, [])

  return (
    <View style={{display: 'flex', alignItems:'center', height:'100%'}}>
        <SafeAreaView>
                <FlatList
                    data={fases}
                    renderItem={
                        ({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Jogos", item)}
                            >
                                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 20 }}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>
                    }   //chamando nomes das fases, pois esta chamando a func getfases
                />
            </SafeAreaView>
    </View>
  );
  }
