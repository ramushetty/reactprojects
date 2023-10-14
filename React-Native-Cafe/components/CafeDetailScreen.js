import React,{useState} from 'react';
import { View,
    Text,
    StyleSheet,
    Image,
    Button, } from 'react-native';

export default function CafeDetailScreen({ route }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const cafe = route.params.cafe; // Assuming you pass the cafe object when navigating
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: cafe.image }} style={styles.cafeImage} />
        <Text style={styles.cafeName}>{cafe.name}</Text>
        <Text style={styles.cafeAddress}>{cafe.address}</Text>
        <Text style={styles.cafeHours}>Hours: {cafe.operatingHours}</Text>
        <Text>{cafe.description}</Text>
        <Text style={styles.cafeRating}>Rating: {cafe.rating}</Text>
        <Button 
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} 
          onPress={() => setIsFavorite(!isFavorite)}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
      },
      cafeImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
      },
      cafeName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      cafeAddress: {
        fontSize: 18,
        marginBottom: 10,
      },
      cafeHours: {
        fontSize: 16,
        marginBottom: 10,
      },
      cafeRating: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
});
