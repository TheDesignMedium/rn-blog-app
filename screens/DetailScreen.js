import * as React from 'react'
import {TouchableOpacity, Image, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';

// Icons

import {Feather} from '@expo/vector-icons'


const DetailScreen = props => {
    
    const {width,height} = Dimensions.get('window')

    const { data } = props.route.params;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>

      <View>

      <SharedElement id={`item.${data.id}.photo`}>
        <Image source={{uri: data.image}} style={{width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} resizeMode="cover"/>
      </SharedElement>

      <View style={{flexDirection: 'row',alignItems: 'center',position: 'absolute', bottom: 14, left: 10}}>

      <SharedElement id={`item.${data.id}.profilePic`}>
        <Image
        source={{uri: data.profilePic}} 
        style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}}
        resizeMode="cover"
        />
    </SharedElement>

    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>

      <View>
      <SharedElement id={`item.${data.id}.username`}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{data.username}</Text>
      </SharedElement>
      <SharedElement id={`item.${data.id}.readtime`}>
        <Text style={{color: 'white', fontSize: 14,}}>{data.readtime} read</Text>
      </SharedElement>
      </View>

      <TouchableOpacity>
        <Feather name='bookmark' size={24} color='white' />
      </TouchableOpacity>

    </View>

      </View>

      </View>

     <ScrollView style={{paddingHorizontal: 10, paddingTop: 14}}>
     
     <SharedElement id={`item.${data.id}.text`} style={{ width: width - 30, marginBottom: 14}}>
        <Text style={{color: 'black', fontSize: 22,fontWeight: 'bold', lineHeight: 32}}>{data.title}</Text>
     </SharedElement>

    <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>Much less attention was paid to the president’s statement that sunlight might safeguard people from the virus. Supposing we hit the body with a tremendous — whether it’s ultraviolet or just very powerful light, Trump said. Supposing you brought the light inside the body, which you can do either through the skin or in some other way When it comes to potential Covid-19 reatments, the president’s speculations have been numerous and frequently misguided.</Text>    

    <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>But the idea that sunlight could counteract Covid-19, both inside and outside the body, is not all that far-fetched. Richard Weller, MD, is a dermatologist and sunlight researcher at the University of Edinburgh in the U.K. Weller says he’s looked at Covid-19 data in the United States, and that there seems to be a correlation between states that get a lot of sun and lower rates of death. “I think there are probably several pathways by which sunlight and sun exposure may exert beneficial effects he says.</Text>   

    <View style={{marginVertical: 25, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity style={{padding: 12, flexDirection: 'row', alignItems: 'center'}}>
            <Feather name='heart' size={16} color='orange' />
            <Text style={{fontWeight: 'normal', textAlign: 'center', marginHorizontal: 10}}>3.4K Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 12, width: 100, backgroundColor: 'orange', borderRadius: 10}}>
            <Text style={{color: 'white',fontWeight: 'bold', textAlign: 'center'}}>Follow</Text>
        </TouchableOpacity>
    </View>     

    </ScrollView>

    <View style={{position: 'absolute', top: 40, left: 10}}>

    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Feather name='arrow-left' size={24} color='white' />
     </TouchableOpacity>

    </View>
    
    </View>  
    );
  };

export default DetailScreen;

