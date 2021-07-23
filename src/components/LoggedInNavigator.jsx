import React from "react";
import {Header} from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import { inject, observer } from "mobx-react";
import {navigate, openDrawer} from "../state/RootNavigation";
import { ImageBackground, StyleSheet, View, Linking, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';
import AccordionListItem from './AccordionList';
import {Spinner} from '../screens/Spinner';

// Constants
const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView {...props} style={{width: '100%', marginTop:'-4px',}}>
        {/* Background image and user info  */}
        <View style={{paddingTop: 0, height:195}}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/DrawerBackground.jpg')} 
            >
            <View style={{height:195, textAlign:'center', paddingTop:75}}>
                <Text > {props.userStateStore.email} </Text> 
                <Text > {props.userStateStore.id} </Text> 
            </View>
            </ImageBackground>
        </View>
        {/* Welcome items  */}
        <DrawerItem    
            label='Welcome'
            onPress={() => props.navigation.navigate("Welcome")}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                name="earth-outline"
                size={size}/>
            }
        />
        <DrawerItem    
            label='AGFUND'
            onPress={() => props.navigation.navigate("Agfund")}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                name="earth-outline"
                size={size}/>
            }
        />
        <DrawerItem    
            label='TFB Store'
            onPress={() => Linking.openURL('https://texasfarmbureau.four51ordercloud.com/shop/catalog')}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                name="cart-outline"
                size={size}/>
            }
        />
        {/* Membership accordion  */}
        <AccordionListItem title={'Membership'}>
            <DrawerItem    
                label='My Membership'
                onPress={() => props.navigation.navigate("MyMembership")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Benefits & Services'
                onPress={() => props.navigation.navigate("BenefitsServices")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='County Information'
                onPress={() => props.navigation.navigate("CountyInformation")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Billing'
                onPress={() => props.navigation.navigate("Billing")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Resources'
                onPress={() => props.navigation.navigate("Resources")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
        </AccordionListItem>
        {/* Registration accordion  */}
        <AccordionListItem title={'Registration'}>
            <DrawerItem    
                label='My Registration'
                onPress={() => props.navigation.navigate("MyRegistration")}
                activeBackgroundColor='red'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
        </AccordionListItem>
        {/* Account accordion  */}
        <AccordionListItem title={'Account'}>
            <DrawerItem    
                label='Contact Preferences'
                onPress={() => props.navigation.navigate("ContactPreferences")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='My Account'
                onPress={() => props.navigation.navigate("MyAccount")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
        </AccordionListItem>
        {/* Admin accordion  */}
        { props.userType === 'Admin' && 
        <AccordionListItem title={'Admin Links'}>
            <DrawerItem    
                label='Reports'
                onPress={() => props.navigation.navigate("Reports")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Form Maintenance'
                onPress={() => props.navigation.navigate("FormMaintenance")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Edit Benefits'
                onPress={() => props.navigation.navigate("EditBenefits")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Management'
                onPress={() => props.navigation.navigate("Management")}
                activeBackgroundColor='red'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='SSS Admin'
                onPress={() => props.navigation.navigate("SSSAdmin")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='Announcements'
                onPress={() => props.navigation.navigate("Announcements")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
            <DrawerItem    
                label='On Site Registration'
                onPress={() => props.navigation.navigate("OnSiteRegistration")}
                activeBackgroundColor='gray'
                icon={ ({focused, size}) => <Ionicons
                    name="earth-outline"
                    size={size}/>
                }
            />
        </AccordionListItem>
        }
        {/* Logout button */}
        <DrawerItem    
            label='Logout'
            onPress={() => props.userStateStore.logout()}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                name="arrow-undo-outline"
                size={size}/>
            }
        />


    </DrawerContentScrollView>
)
const Drawer = createDrawerNavigator();

// Default Exported Component
const LoggedInNavigator = class LoggedInNavigator extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
            {/* Header  */}
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => openDrawer(), }}
                centerComponent={{ text: 'MyTFB', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate("Welcome"), }}
            />
            {/* Right side drawer */}
            <Drawer.Navigator initialRouteName="Welcome" headerMode="none"
                drawerStyle={{
                    backgroundColor: "#fafafa",
                    alignItems: "center",
                    paddingTop:0,
                  }}
                drawerContent={props => <CustomDrawerContentComponent {...props} {...this.props} />}
            >
                <Drawer.Screen name="Welcome" component={HomeScreen} />
                <Drawer.Screen name="Agfund" component={Spinner} />
                <Drawer.Screen name="MyMembership" component={Spinner} />
                <Drawer.Screen name="BenefitsServices" component={Spinner} />
                <Drawer.Screen name="CountyInformation" component={Spinner} />
                <Drawer.Screen name="Billing" component={Spinner} />
                <Drawer.Screen name="Resources" component={Spinner} />
                <Drawer.Screen name="MyRegistration" component={Spinner} />
                <Drawer.Screen name="ContactPreferences" component={Spinner} />
                <Drawer.Screen name="MyAccount" component={Spinner} />
                <Drawer.Screen name="Reports" component={Spinner} />
                <Drawer.Screen name="FormMaintenance" component={Spinner} />
                <Drawer.Screen name="EditBenefits" component={Spinner} />
                <Drawer.Screen name="SSSAdmin" component={Spinner} />
                <Drawer.Screen name="Announcements" component={Spinner} />
                <Drawer.Screen name="OnSiteRegistration" component={Spinner} />
            </Drawer.Navigator>
            {/* Footer */}
            <Footer> </Footer>
          </>
        );
    };

}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 190,
        paddingTop: 0,
    }
});

export default inject('userStateStore')(observer(LoggedInNavigator));