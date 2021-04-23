import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import axios from "axios"

export default function Jogos(props) {
    const {navigation} = props;

    var link = props.route.params._link

    const [games , setgames] = useState([])

    const getJogos = () => {

        return new Promise(async (resolve, reject) => {
            try {
                let response = await axios.get("https://api.api-futebol.com.br"+link,  {headers: {'Authorization': `Bearer live_d3c8b684bd40e7a11a0de200c9af2f`}})
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    useLayoutEffect(() => {
            getJogos()
            .then((dados) => {
                setgames(dados.chaves)
            })
            .catch((erro) => console.log(erro))
    }, [])
//aq pra baixo vai fazer o foreach ***** em cada array q ele achar
  return (
    <View>
        <SafeAreaView>
                <FlatList
                    data={games}
                    renderItem={
                        ({ item }) =>
                            
                                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 20, color: 'green'}}>Jogo: {item.partida_ida.placar}</Text>
                                </View>
                    }
                    keyExtractor={jogos => String(jogos.nome)}
                />
            </SafeAreaView>
            
    </View>
  );
  }
  //chamando o item pelo getjogos 
