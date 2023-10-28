

 
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState({});

  async function playSound() {
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('./assets/sample.mpeg'),
      { shouldPlay: true },
      updatePlaybackStatus
    );
    setSound(newSound);
  }

  const handlePlayPause = async () => {
    if (isPlaying && sound) {
      await sound.pauseAsync();
    } else {
      if (!sound) {
        await playSound();
      } else {
        await sound.playAsync();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const updatePlaybackStatus = status => {
    // if (!isSeeking) {
    //   setSliderValue(status.positionMillis / status.durationMillis);
    // }
    // setPlaybackStatus(status);
    if (status.durationMillis && status.positionMillis && !isSeeking) {
      setSliderValue(status.positionMillis / status.durationMillis);
    }
    setPlaybackStatus(status);
  };

  const onSliderValueChange = async value => {
    setIsSeeking(true);
    setSliderValue(value);
    if (sound) {
      await sound.setPositionAsync(value * playbackStatus.durationMillis);
    }
  };

  const onSlidingComplete = () => {
    setIsSeeking(false);
  };

  const formatTime = millis => {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Music App</Text>
      <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={isFinite(sliderValue) ? sliderValue : 0}
        onValueChange={onSliderValueChange}
        onSlidingComplete={onSlidingComplete}
        thumbTintColor="#3498db"
        minimumTrackTintColor="#3498db"
      />
      <Text style={styles.timer}>
        {formatTime(playbackStatus.positionMillis)} / {formatTime(playbackStatus.durationMillis)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  slider: {
    width: '80%',
    marginTop: 20,
  },
  timer: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default App;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Easing } from 'react-native';
// import { Audio } from 'expo-av';
// import Slider from '@react-native-community/slider';
// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

// const App = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [sound, setSound] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isSeeking, setIsSeeking] = useState(false);
//   const [playbackStatus, setPlaybackStatus] = useState({});
//   const [animationValue, setAnimationValue] = useState(new Animated.Value(0));
//   const [songs, setSongs] = useState([]);
//   const [selectedSong, setSelectedSong] = useState(null);

//   async function playSound(uri) {
//     if (sound) {
//       await sound.unloadAsync();
//     }
//     const { sound: newSound } = await Audio.Sound.createAsync(
//       { uri },
//       { shouldPlay: true },
//       updatePlaybackStatus
//     );
//     setSound(newSound);
//     setIsPlaying(true);
//   }

//   const handlePlayPause = async () => {
//     if (isPlaying && sound) {
//       await sound.pauseAsync();
//       setIsPlaying(false);
//     } else if (!isPlaying && sound) {
//       await sound.playAsync();
//       setIsPlaying(true);
//     }

//     Animated.timing(animationValue, {
//       toValue: isPlaying ? 0 : 1,
//       duration: 500,
//       easing: Easing.linear,
//       useNativeDriver: true
//     }).start();
//   };

//   const updatePlaybackStatus = status => {
//     if (status.durationMillis && status.positionMillis && !isSeeking) {
//       setSliderValue(status.positionMillis / status.durationMillis);
//     }
//     setPlaybackStatus(status);
//   };

//   async function getSongsFromDevice() {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     if (status === 'granted') {
//       const media = await MediaLibrary.getAssetsAsync({
//         mediaType: 'audio',
//         first: 100,
//       });
//       if (media.totalCount > 0) {
//         setSongs(media.assets);
//       }
//     }
//   }

//   useEffect(() => {
//     getSongsFromDevice();
//   }, []);

//   const rotation = animationValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   });

//   const animatedStyle = {
//     transform: [{ rotate: rotation }]
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Music Player</Text>

//       <ScrollView style={styles.songsList}>
//         {songs.map((song) => (
//           <TouchableOpacity
//             key={song.id}
//             style={styles.songItem}
//             onPress={() => {
//               setSelectedSong(song);
//               playSound(song.uri);
//             }}
//           >
//             <Text style={styles.songText}>{song.filename}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <Animated.View style={animatedStyle}>
//         <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
//           <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
//         </TouchableOpacity>
//       </Animated.View>

//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={1}
//         value={isFinite(sliderValue) ? sliderValue : 0}
//         onValueChange={(value) => {
//           setIsSeeking(true);
//           setSliderValue(value);
//           if (sound) {
//             sound.setPositionAsync(value * playbackStatus.durationMillis);
//           }
//         }}
//         onSlidingComplete={() => setIsSeeking(false)}
//         thumbTintColor="#3498db"
//         minimumTrackTintColor="#3498db"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   songsList: {
//     width: '100%',
//     maxHeight: 150,
//     marginBottom: 20,
//   },
//   songItem: {
//     borderBottomColor: '#ddd',
//     borderBottomWidth: 1,
//     padding: 10,
//   },
//   songText: {
//     fontSize: 16,
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#3498db',
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   slider: {
//     width: '100%',
//     marginTop: 20,
//   },
// });

// export default App;
