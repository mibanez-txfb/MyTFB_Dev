import * as React from 'react';
import {Linking, KeyboardAvoidingView, TouchableWithoutFeedback, Text, ScrollView, View, StyleSheet, Button, Image, TextInput} from 'react-native';
import { inject, observer } from "mobx-react";
import {HR} from '../components/Hr';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from "@react-native-picker/picker";

// Constants
const width_proportion = '65%';
const height_proportion = '40%';

// Default Exported Component
const JoinMyTFBScreen = class JoinMyTFBScreen extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            DOB:'',
            Gender:'',
            State:'',
            County:'',

        }
    }

    render(){
        return (
            
            <View style={styles.screen}>
                <ScrollView style={styles.containerView} > 
                    <KeyboardAvoidingView  behavior="padding">
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.loginScreenContainer}>
                                <View style={styles.topFormView}>
                                    <Text style={styles.topFormText}>TFB Membership Application</Text> 
                                    <Image
                                        style={styles.logo}
                                        source={require('../assets/TFBLogo.png')}
                                    /> 
                                </View>
                                <Text > Fill out the application below to create a new TFB membership. If you are looking to RENEW an existing membership,<Text style={{color:'blue'}} onPress={()=>Linking.openURL('https://utilities.txfb.com/membership')}> Click Here </Text> </Text>
                                <HR/>
                                <View style={styles.middleFormView}> 
                                    <View>
                                        <Text>
                                            <Ionicons style={styles.iconStyle}
                                                name="person-circle-outline"
                                                size='large'
                                            />  
                                            Contact Information 
                                        </Text>
                                    </View>
                                    <TextInput placeholder="First Name" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleOne} />
                                    
                                    <TextInput placeholder="Last name" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <TextInput placeholder="Data Of Birth" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <View>
                                        <Text> Gender
                                            <Picker
                                                selectedValue={this.state.Gender}
                                                mode={"dialog"}
                                                onValueChange={(Gender) => this.setState({Gender:Gender})}
                                            >
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="Male" value="Male" />
                                                <Picker.Item label="Female" value="Female" />
                                            </Picker>
                                        </Text>
                                    </View>
                                    <TextInput placeholder="Mailing Address" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <TextInput placeholder="City" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <View>
                                        <Text> State
                                            <Picker
                                                selectedValue={this.state.State}
                                                mode={"dialog"}
                                                onValueChange={(State) => this.setState({State:State})}
                                            >
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="Al" value="Al" />
                                                <Picker.Item label="AK" value="AK" />
                                                <Picker.Item label="AR" value="AR" />
                                                <Picker.Item label="AZ" value="AZ" />
                                                <Picker.Item label="CA" value="CA" />
                                                <Picker.Item label="CO" value="CO" />
                                                <Picker.Item label="CT" value="CT" />
                                                <Picker.Item label="DE" value="DE" />
                                                <Picker.Item label="DC" value="DC" />
                                                <Picker.Item label="FL" value="FL" />
                                                <Picker.Item label="GA" value="GA" />
                                                <Picker.Item label="HI" value="HI" />
                                                <Picker.Item label="ID" value="ID" />
                                                <Picker.Item label="IL" value="IL" />
                                                <Picker.Item label="IN" value="IN" />
                                                <Picker.Item label="IA" value="IA" />
                                                <Picker.Item label="KS" value="KS" />
                                                <Picker.Item label="KY" value="KY" />
                                                <Picker.Item label="LA" value="LA" />
                                                <Picker.Item label="ME" value="ME" />
                                                <Picker.Item label="MD" value="MD" />
                                                <Picker.Item label="MA" value="MA" />
                                                <Picker.Item label="MI" value="MI" />
                                                <Picker.Item label="MN" value="MN" />
                                                <Picker.Item label="MS" value="MS" />
                                                <Picker.Item label="MO" value="MO" />
                                                <Picker.Item label="MT" value="MT" />
                                                <Picker.Item label="NE" value="NE" />
                                                <Picker.Item label="NV" value="NV" />
                                                <Picker.Item label="NH" value="NH" />
                                                <Picker.Item label="NJ" value="NJ" />
                                                <Picker.Item label="NM" value="NM" />
                                                <Picker.Item label="NY" value="NY" />
                                                <Picker.Item label="NC" value="NC" />
                                                <Picker.Item label="ND" value="ND" />
                                                <Picker.Item label="OH" value="OH" />
                                                <Picker.Item label="OK" value="OK" />
                                                <Picker.Item label="OR" value="OR" />
                                                <Picker.Item label="PA" value="PA" />
                                                <Picker.Item label="RI" value="RI" />
                                                <Picker.Item label="SC" value="SC" />
                                                <Picker.Item label="SD" value="SD" />
                                                <Picker.Item label="TN" value="TN" />
                                                <Picker.Item label="TX" value="TX" />
                                                <Picker.Item label="UT" value="UT" />
                                                <Picker.Item label="VT" value="VT" />
                                                <Picker.Item label="VA" value="VA" />
                                                <Picker.Item label="WA" value="WA" />
                                                <Picker.Item label="WV" value="WV" />
                                                <Picker.Item label="WI" value="WI" />
                                                <Picker.Item label="WY" value="WY" />
                                            </Picker>
                                        </Text>
                                    </View>
                                    <TextInput placeholder="Zipcode" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <TextInput placeholder="Email" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <TextInput placeholder="Phone" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                    <View>
                                        <Text> TFB County you want to join
                                            <Picker
                                                selectedValue={this.state.County}
                                                mode={"dialog"}
                                                onValueChange={(County) => this.setState({County:County})}
                                            >
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="Anderson" value="26847" />
                                                <Picker.Item label="Angelina" value="26848" />
                                                <Picker.Item label="Archer" value="26849" />
                                                <Picker.Item label="ATACOSA" value="26850" />
                                                <Picker.Item label="AUSTIN" value="26851" />
                                                <Picker.Item label="BAILEY" value="26852" />
                                                <Picker.Item label="BANDERA" value="26853" />
                                                <Picker.Item label="BAYLOR" value="26854" />
                                                <Picker.Item label="BEE" value="26855" />
                                                <Picker.Item label="BELL" value="26856" />
                                                <Picker.Item label="BEXAR" value="26857" />
                                                <Picker.Item label="BLANCO" value="26858" />
                                                <Picker.Item label="BOSQUE" value="26859" />
                                                <Picker.Item label="BOWIE" value="26860" />
                                                <Picker.Item label="BRAZORIA-GALVESTON" value="26861" />
                                                <Picker.Item label="BRAZOS" value="26862" />
                                                <Picker.Item label="BROWN" value="26863" />
                                                <Picker.Item label="BURLESON" value="26864" />
                                                <Picker.Item label="BURNET" value="26865" />
                                                <Picker.Item label="CALDWELL" value="26866" />
                                                <Picker.Item label="CALHOUN" value="26867" />
                                                <Picker.Item label="CALLAHAN-SHACKLEFORD" value="26868" />
                                                <Picker.Item label="CAMERON" value="26869" />
                                                <Picker.Item label="CAMP" value="26870" />
                                                <Picker.Item label="CARSON" value="26871" />
                                                <Picker.Item label="CASS" value="26872" />
                                                <Picker.Item label="CASTRO" value="26879" />
                                                <Picker.Item label="CHAMBERS" value="26873" />
                                                <Picker.Item label="CHEROKEE" value="26874" />
                                                <Picker.Item label="CHILDRESS" value="26875" />
                                                <Picker.Item label="CLAY" value="26876" />
                                                <Picker.Item label="COCHRAN" value="26877" />
                                                <Picker.Item label="COKE-STERLING" value="26878" />
                                                <Picker.Item label="COLEMAN" value="26880" />
                                                <Picker.Item label="COLLIN" value="18786" />
                                                <Picker.Item label="COLLINGSWORTH" value="26881" />
                                                <Picker.Item label="COLORADO" value="26882" />
                                                <Picker.Item label="COMAL" value="26883" />
                                                <Picker.Item label="COMANCHE" value="52907" />
                                                <Picker.Item label="CONCHO" value="863525" />
                                                <Picker.Item label="COOKE" value="26884" />
                                                <Picker.Item label="CORYELL" value="26885" />
                                                <Picker.Item label="COTTLE-KING" value="26886" />
                                                <Picker.Item label="CROSBY" value="26887" />
                                                <Picker.Item label="DALLAM-HARTLEY" value="2092636" />
                                                <Picker.Item label="DALLAS" value="26889" />
                                                <Picker.Item label="DAWSON" value="26890" />
                                                <Picker.Item label="DEAF SMITH" value="26891" />
                                                <Picker.Item label="DELTA" value="26892" />
                                                <Picker.Item label="DENTON" value="26893" />
                                                <Picker.Item label="DEWITT" value="26894" />
                                                <Picker.Item label="DICKENS" value="26895" />
                                                <Picker.Item label="DIMMIT" value="26896" />
                                                <Picker.Item label="EASTLAND" value="26897" />
                                                <Picker.Item label="EL PASO" value="26899" />
                                                <Picker.Item label="ELLIS" value="26898" />
                                                <Picker.Item label="ERATH" value="26900" />
                                                <Picker.Item label="FALLS" value="26901" />
                                                <Picker.Item label="FANNIN" value="26902" />
                                                <Picker.Item label="FAYETTE" value="26903" />
                                                <Picker.Item label="FISHER" value="26904" />
                                                <Picker.Item label="FLOYD" value="26905" />
                                                <Picker.Item label="FOARD" value="26906" />
                                                <Picker.Item label="FORT BEND" value="26907" />
                                                <Picker.Item label="FRANKLIN" value="1296125" />
                                                <Picker.Item label="FREESTONE" value="26910" />
                                                <Picker.Item label="FRIO" value="26911" />
                                                <Picker.Item label="GAINES" value="26914" />
                                                <Picker.Item label="GILLESPIE" value="26917" />
                                                <Picker.Item label="GOLIAD" value="26918" />
                                                <Picker.Item label="GONZALES" value="26919" />
                                                <Picker.Item label="GRAY-ROBERTS" value="26920" />
                                                <Picker.Item label="GRAYSON" value="26921" />
                                                <Picker.Item label="GREGG" value="26922" />
                                                <Picker.Item label="GRIMES" value="26923" />
                                                <Picker.Item label="GUADALUPE" value="26924" />
                                                <Picker.Item label="HALE" value="26925" />
                                                <Picker.Item label="HALL-DONLEY" value="26926" />
                                                <Picker.Item label="HAMILTON" value="26927" />
                                                <Picker.Item label="HANSFORD" value="26928" />
                                                <Picker.Item label="HARDEMAN" value="26929" />
                                                <Picker.Item label="HARDIN" value="26930" />
                                                <Picker.Item label="HARRIS" value="26931" />
                                                <Picker.Item label="HARRISON" value="26932" />
                                                <Picker.Item label="HASKELL" value="26934" />
                                                <Picker.Item label="HAYS" value="26935" />
                                                <Picker.Item label="HEMPHILL" value="26936" />
                                                <Picker.Item label="HENDERSON" value="26937" />
                                                <Picker.Item label="HIDALGO" value="26938" />
                                                <Picker.Item label="HILL" value="26939" />
                                                <Picker.Item label="HOCKLEY" value="26940" />
                                                <Picker.Item label="HOOD-SOMERVELL" value="26941" />
                                                <Picker.Item label="HOPKINS-RAINS" value="26942" />
                                                <Picker.Item label="HOUSTON" value="26943" />
                                                <Picker.Item label="HOWARD" value="26944" />
                                                <Picker.Item label="HUDSPETH" value="26945" />
                                                <Picker.Item label="HUNT" value="26946" />
                                                <Picker.Item label="HUTCHINSON" value="26947" />
                                                <Picker.Item label="JACK" value="26948" />
                                                <Picker.Item label="JACKSON" value="26949" />
                                                <Picker.Item label="JASPER" value="865033" />
                                                <Picker.Item label="JEFFERSON" value="26950" />
                                                <Picker.Item label="JIM WELLS" value="26951" />
                                                <Picker.Item label="JOHNSON" value="26952" />
                                                <Picker.Item label="JONES" value="26953" />
                                                <Picker.Item label="KARNES" value="26954" />
                                                <Picker.Item label="KAUFMAN" value="26955" />
                                                <Picker.Item label="KENDALL" value="26956" />
                                                <Picker.Item label="KERR" value="26957" />
                                                <Picker.Item label="KIMBLE" value="26958" />
                                                <Picker.Item label="KINNEY-VAL VERDE" value="1353271" />
                                                <Picker.Item label="KLEBERG-KENEDY" value="26959" />
                                                <Picker.Item label="KNOX" value="26960" />
                                                <Picker.Item label="LAMAR" value="26961" />
                                                <Picker.Item label="LAMB" value="26962" />
                                                <Picker.Item label="LAMPASAS" value="26963" />
                                                <Picker.Item label="LASALLE" value="26964" />
                                                <Picker.Item label="LAVACA" value="26965" />
                                                <Picker.Item label="LEE-BASTROP" value="26966" />
                                                <Picker.Item label="LEON" value="26967" />
                                                <Picker.Item label="LIBERTY" value="26968" />
                                                <Picker.Item label="LIMESTONE" value="26969" />
                                                <Picker.Item label="LIPSCOMB" value="26970" />
                                                <Picker.Item label="LIVE OAK" value="26971" />
                                                <Picker.Item label="LLANO" value="26972" />
                                                <Picker.Item label="LUBBOCK" value="26973" />
                                                <Picker.Item label="LYNN-GARZA" value="26974" />
                                                <Picker.Item label="MADISON" value="26977" />
                                                <Picker.Item label="MARION" value="1296571" />
                                                <Picker.Item label="MARTIN" value="26978" />
                                                <Picker.Item label="MASON" value="26979" />
                                                <Picker.Item label="MATAGORDA" value="26980" />
                                                <Picker.Item label="MAVERICK" value="26981" />
                                                <Picker.Item label="MCCULLOCH" value="26975" />
                                                <Picker.Item label="MCLENNAN" value="26976" />
                                                <Picker.Item label="MEDINA" value="26982" />
                                                <Picker.Item label="MENARD" value="26983" />
                                                <Picker.Item label="MIDLAND" value="26984" />
                                                <Picker.Item label="MILAM" value="26985" />
                                                <Picker.Item label="MILLS" value="26986" />
                                                <Picker.Item label="MITCHELL" value="26987" />
                                                <Picker.Item label="MONTAGUE" value="26988" />
                                                <Picker.Item label="MONTGOMERY" value="26989" />
                                                <Picker.Item label="MOORE" value="26990" />
                                                <Picker.Item label="MORRIS" value="26991" />
                                                <Picker.Item label="MOTLEY" value="26992" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                <Picker.Item label="" value="" />
                                                

                                            </Picker>
                                        </Text>
                                        <Text>
                                            Not Sure? Use our <Text style={{color:'blue'}} onPress={()=>{Linking.openURL('https://utilities.txfb.com/countylocator/')}}>county locator</Text>
                                        </Text>
                                    </View>
                                </View>
                                <HR/>
                                <View>
                                    <Text>
                                        <Ionicons style={styles.iconStyle}
                                            name="chatbox-ellipses-outline"
                                            size='large'
                                        />  
                                        Optional
                                    </Text>
                                    <TextInput placeholder="Solicited/ Referred By" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} onChangeText={this.handleTwo} />
                                </View>
                                <HR/>
                                <View style={styles.bottomFormView}>
                                    <Text>
                                        <Ionicons style={styles.iconStyle}
                                            name="document-text-outline"
                                            size='large'
                                        />  
                                        Terms and Conditions
                                    </Text>
                                    <Text> 
                                        I want to become a member of this county Farm Bureau, Texas Farm Bureau and the American Farm Bureau Federation, because I am interested in promoting the welfare and benefit of agriculture and the rural way of life.
                                    </Text>
                                    <Text>
                                        <Text style={{fontWeight:'bold'}}>Membership dues are not refundable and are not deductible as a charitable contribution for Federal Income Tax purposes.</Text> In accordance with current federal income tax law, a portion of your dues in the amount of $9.00
                                        has been estimated to be allocable to lobbying activities, and that portion is not deductible even if payment of your dues qualifies as a business expense.
                                    </Text>
                                </View>
                                <HR/>
                                <View style={styles.submitFormView}>
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => console.log('Hei')}
                                        title="Login"
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    containerView: {
        flex: 1,
        marginTop: '2%',
        backgroundColor:'white',
        width:width_proportion,
        height:height_proportion,
        padding: '1.5%',
    },
    loginScreenContainer: {
        flex: 1,
        justifyContent:'center',
        alignContent:'center',
    },
    topFormView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topFormText:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
    },
    logo: {
        top:0,
        right:0,
        width:100,
        height:100,
        alignSelf:'flex-end',
    },
    middleFormView:{

    },
    bottomFormView:{

    },
    submitFormView:{

    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5, 
    },
    iconStyle:{
        padding: '1%',
    },
});

export default inject('userStateStore')(observer(JoinMyTFBScreen));