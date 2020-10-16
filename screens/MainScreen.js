import * as React from 'react' 
import {Image, Text, View, FlatList, Dimensions, StyleSheet} from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

//Sample Data
import {data, profile, popular} from '../data' 

// Icons
import {Feather} from '@expo/vector-icons'


const MainScreen = ({navigation}) => {

    const {width,height} = Dimensions.get('window')

    return (
      <View style={{flex: 1}}>

      {/* Header */}

      <View style={{marginTop: 40, marginBottom: 30,paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{fontSize: 14,fontWeight: '700', color: 'orange', textTransform: 'uppercase'}}>{profile.date}</Text>
        <Text style={{fontSize: 36, fontWeight: 'bold'}}>Blog</Text>
      </View>
      <View>
        <Image source={{uri: profile.profilePic}} style={{width: 55, height: 55, borderRadius: 10}} />
        <View style={{height: 14, width: 14, borderRadius: 6, position: 'absolute', backgroundColor: 'red', right: -4, top: -4, borderWidth: 2, borderColor: 'white'}}></View>
      </View>
      </View>

      {/* Header End */}

      {/* SharedBlogs */}

    <View>
    <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={item => item.id}
      style={{paddingHorizontal: 30}}
      renderItem={({item}) => {
        return(
          <View>
          <View>
          <TouchableScale 
          activeScale={0.9}
          tension={50}
          friction={7}
          useNativeDriver
          onPress={() => navigation.push('DetailScreen', {data: item})}
          >

          <SharedElement id={`item.${item.id}.photo`}>
              <Image
              source={{uri: item.image}} 
              style={{width: width - 90, height: height - 450, borderRadius: 14, marginRight: 30}}
              resizeMode="cover"
              />
            </SharedElement>
            



            <SharedElement id={`item.${item.id}.text`} style={{width:width - 90, position: 'absolute', bottom: 90, left: 10, paddingHorizontal: 10}}>
              <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', lineHeight: 28}}>{item.title}</Text>
            </SharedElement>




            <View style={{flexDirection: 'row', alignItems: 'center',position: 'absolute', bottom: 20, left: 20,}}>  

              <SharedElement id={`item.${item.id}.profilePic`}>
                <Image
                source={{uri: item.profilePic}} 
                style={{width: 50, height: 50, borderRadius: 10, marginRight: 14}}
                resizeMode="cover"
                />
              </SharedElement>

              <View>
                <SharedElement id={`item.${item.id}.username`}>
                  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{item.username}</Text>
                </SharedElement>
                <SharedElement id={`item.${item.id}.readtime`}>
                  <Text style={{color: 'white', fontSize: 14,}}>{item.readtime} read</Text>
                </SharedElement>
              </View>

            </View>

          </TouchableScale>
          </View>
    
          </View>
        )
      }}
      />
    </View>

    {/* SHARED BLOGS END */}
      

      {/* POPULAR STARRT */}
     
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Popular</Text>
        <Text style={{fontWeight: 'bold', color: 'orange'}}>Show All</Text>
      </View>

      <FlatList 
      data={popular}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return(
          <View style={{flexDirection: 'row', paddingBottom: 30,paddingLeft: 30, alignItems: 'center'}}>

            <View style={{marginRight: 30}}>
              <Image source={{uri: item.image}} style={{width: 100,height: 100, borderRadius: 10}} />
            </View>

            <View style={{width: '60%'}}>

              <Text style={{color: 'orange', fontWeight: 'bold',marginBottom: 4 }}>{item.topic}</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold',marginBottom: 10}}>{item.title}</Text>

              <View style={{flexDirection: 'row', alignItems: 'center', opacity: 0.4}}>

                <View style={{flexDirection: 'row', marginRight: 16, alignItems: 'center'}}>
                  <Feather name='book-open' size={14} color='#000' />
                  <Text style={{marginHorizontal: 4, fontSize: 12}}>{item.readtime} Read</Text>
                </View>

                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                  <Feather name='thumbs-up' size={14} color='#000' />
                  <Text style={{marginHorizontal: 4, fontSize: 12}}>{item.likes} Likes</Text>
                </View>

              </View>
          
            </View>

          </View>
        )
      }}
      />
      </View>
    );
}

export default MainScreen;