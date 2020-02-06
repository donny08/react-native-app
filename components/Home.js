import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  // ScrollView,
  // FlatList,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  // Button,
  Easing,
  Animated,
  SafeAreaView,
  Alert,
} from 'react-native';
import addProduct from '../services/addProduct';
import MaterialIndicator from './MaterialIndicator';
import STATUS from '../services/status';

// import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-view';

class Home extends Component {
  state = {
    isLoading: true,
    title: STATUS.ACTIVATE,
    image: require('../images/arrow.png'),
    color: 'rgb(0,0,255)',
    icon: {
      width: 16,
      height: 16,
      marginRight: 10,
    },
  };

  constructor(props) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.makeAPIRequest = this.makeAPIRequest.bind(this);
    this.animatedValue = new Animated.Value(1);
    this.animatedText = new Animated.Value(0);
  }
  componentDidMount() {
    // console.log(Status);
  }

  async makeAPIRequest() {
    try {
      const product = await addProduct({
        productId: '82jqp008d2l00',
        emirate: 'Abu Dhabi',
      });

      if (product && product.success) {
        Animated.timing(this.animatedText, {
          toValue: -100,
          easing: Easing.back(1),
          duration: 1000,
        }).start(() => {
          this.animatedText.setValue(0);
          this.setState({
            title: STATUS.ACTIVATED,
            image: require('../images/tick.png'),
            color: '#51da7c',
            icon: {
              width: 18,
              height: 18,
              marginRight: 5,
              marginTop: -1,
            },
          });
        });
      }
    } catch (error) {
      Alert.alert('Oops! Something went wrong. Please try again.');
      this.setState({
        title: STATUS.ACTIVATE,
        image: require('../images/arrow.png'),
        color: 'rgb(0,0,255)',
        icon: {
          width: 16,
          height: 16,
          marginRight: 10,
        },
      });
    }
  }

  handlePressIn() {
    // this.animatedValue.setValue(0);
    Animated.spring(this.animatedValue, {
      toValue: 0.7,
    }).start();
    // Animated.timing(this.animatedValue, {
    //   toValue: 0.9,
    // }).start();

    if (this.state.title == 'Activate') {
      Animated.timing(this.animatedText, {
        toValue: -100,
        easing: Easing.back(1),
        duration: 1000,
      }).start(() => {
        this.animatedText.setValue(0);
      });

      this.setState({
        title: STATUS.WAITING,
        image: require('../images/spinner.gif'),
        color: 'rgb(0,0,255)',
        icon: {
          width: 16,
          height: 16,
          marginRight: 8,
        },
      });
      this.makeAPIRequest();
    }
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const {title, image, color, icon} = this.state;
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
    };

    const animatedText = {
      transform: [
        {
          translateY: this.animatedText,
        },
      ],
    };
    // const animatedText = {
    //   transform: [
    //     {
    //       translateY: this.animatedValue.interpolate({
    //         inputRange: [0, 1],
    //         outputRange: [-150, 1],
    //         extrapolate: 'clamp',
    //       }),
    //     },
    //   ],
    // };
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}>
          <Animated.View
            style={[styles.button, animatedStyle, {backgroundColor: color}]}>
            {/* {title != STATUS.WAITING && <Image style={icon} source={image} />}
            {title == STATUS.WAITING && (
              <MaterialIndicator color="white" size={16} />
            )} */}
            <Animated.View style={[styles.row, animatedText]}>
              {title != STATUS.WAITING && <Image style={icon} source={image} />}
              {title == STATUS.WAITING && (
                <MaterialIndicator color="white" size={16} />
              )}
              <Text style={styles.text}>{title}</Text>
            </Animated.View>

            {/* <Animated.Text style={[styles.text, animatedText]}>
              {title}
            </Animated.Text> */}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 100,
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default Home;
