
import React,{useState,useEffect} from 'react'
import  {View,Text, FlatList,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native'







// const cafeData = [
//     { id: '1', name: 'Cafe One', description: 'Cozy ambiance', rating: 4.5, distance: 10 ,image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg'},
//     { id: '2', name: 'Cafe Two', description: 'Cozy ambiance', rating: 3.0, distance: 5 ,image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg'},
//     { id: '3', name: 'Cafe Three', description: 'Cozy ambiance', rating: 4.0, distance: 2 ,image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg'},
//     { id: '4', name: 'Four Hotel', description: 'Cozy ambiance', rating: 1.0, distance: 1 ,image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg'},

//   ];


  const cafeData = [
    {
      id: '1',
      name: 'Cafe One',
      description: 'Cafe One offers a unique blend of traditional and modern flavors, ensuring each visit is a memorable experience. From our renowned espressos to our delightful pastries, there\'s something for everyone.',
      rating: 4.5,
      distance: 1,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
      address: '123 Coffee St, Coffee Town, CF1 1AB',
      operatingHours: 'Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 6pm',
    },
    {
      id: '2',
      name: 'Cafe Two',
      description: 'Nestled in the heart of the city, Cafe Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you\'re guaranteed a relaxing time.',
      rating: 4.2,
      distance: 2,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
      address: '456 Latte Ln, Coffee City, CF2 2BC',
      operatingHours: 'Mon-Sun: 8am - 8pm',
    },
    // ... add more mock data here
  ];

function CafeListScreen({navigation}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('rating'); // default sorting is by rating
    const [displayedCafes, setDisplayedCafes] = useState(cafeData);

    

    useEffect(() => {
        const filtered = cafeData.filter(cafe => cafe.name.toLowerCase().includes(searchTerm.toLowerCase()));
      
        const sorted = [...filtered].sort((a, b) => {
          if (sortType === 'rating') {
            return b.rating - a.rating;
          } else {
            return a.distance - b.distance;
          }
        });
      
        setDisplayedCafes(sorted);
          
      }, [searchTerm, sortType]);
  return (
    <View style={styles.container}>

        <View style={styles.searchBar}>
            <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search Cafe..."
            />
        </View>
        <View style={styles.sortOptions}>
            <TouchableOpacity onPress={() => setSortType('rating')}>
                <Text style={styles.sortText}>Sort by Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortType('distance')}>
                <Text style={styles.sortText}>Sort by Distance</Text>
            </TouchableOpacity>
        </View>



        <FlatList
            data={displayedCafes}
            renderItem={({item})=>(

                <TouchableOpacity 
                style={styles.listItem} 
                
                onPress={()=>navigation.navigate('Details',{cafe:item})}
                
                >
                    <Image source={{ uri: item.image }} style={styles.cafeImage} />
                    <Text style={styles.cafeName}>{item.name}</Text>
                    <Text>{item.description}</Text>


                </TouchableOpacity>

            )}

            keyExtractor={item=>item.id.toString()}
        
        />



    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    listItem: {
      padding: 10,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cafeName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cafeImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },


      searchBar: {
        margin: 10,
      },
      searchInput: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
      },
      sortOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      sortText: {
        fontSize: 16,
        color: 'blue',
      },
  });

export default CafeListScreen