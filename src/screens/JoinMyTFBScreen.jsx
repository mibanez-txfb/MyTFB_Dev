import * as React from 'react';
import {Linking, KeyboardAvoidingView, TouchableWithoutFeedback, Text, ScrollView, View, StyleSheet, Button, Image, TextInput} from 'react-native';
import { inject, observer } from "mobx-react";
import {HR} from '../components/Hr';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from "@react-native-picker/picker";
import {CheckBox} from 'react-native-elements';
import { ValidateEmail } from '../assets/Validators';
import DateTimePicker from '@react-native-community/datetimepicker';

// Constants
const width_proportion = '65%';
const height_proportion = '40%';
const scroll = React.createRef();

// Default Exported Component
const JoinMyTFBScreen = class JoinMyTFBScreen extends React.Component{
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            FirstName:'',
            LastName:'',
            DOB:'',
            Gender:'',
            MailingAddress:'',
            City: '',
            State:'',
            Zip:'',
            Email:'',
            Phone:'',
            PhoneType:'Mobile',
            County:'',
            Referral:'',
            FirstCheckBox:false,
            SecondCheckBox:false,
            FirstNameError:'',
            LastNameError:'',
            DOBError:'',
            GenderError:'',
            MailingAddressError:'',
            CityError: '',
            StateError:'',
            ZipError:'',
            EmailError:'',
            PhoneError:'',
            CountyError:'',
            ReferralError:'',
            FirstCheckBoxError:false,
            SecondCheckBoxError:false,
            showCalendar:false,
        }
    }

    handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    handleChange(e, param){
        this.setState({
            [param]:e.target.value,
        })
    }

    onSubmit(){
        let user = this.state, flag = true;
        if(user.FirstName == ''){
            this.setState({FirstNameError:'Required Field'});
            flag=false;
        }else
            this.setState({FirstNameError:''});

        if(user.LastName == ''){
            this.setState({LastNameError:'Required Field'});
            flag = false;
        } else
            this.setState({LastNameError:''});

        if(user.DOB == ''){
            this.setState({DOBError:'Required Field'});
            flag = false;
        } else
            this.setState({DOBError:''});

        if(user.Gender == ''){
            this.setState({GenderError:'Required Field'});
            flag = false;
        } else
            this.setState({GenderError:''});

        if(user.MailingAddress == ''){
            this.setState({MailingAddressError:'Required Field'});
            flag = false;
        } else
            this.setState({MailingAddressError:''});

        if(user.City == ''){
            this.setState({CityError:'Required Field'});
            flag = false;
        } else  
            this.setState({CityError:''});

        if(user.State == ''){
             this.setState({StateError:'Required Field'});
             flag = false;
        } else
            this.setState({StateError:''});

        if(user.Zip == ''){
            this.setState({ZipError:'Required Field'});
            flag = false;
        } else  
            this.setState({ZipError:''});

        if(!ValidateEmail(user.email)){
            this.setState({EmailError:'Required Field'});
            flag = false;
        } else
            this.setState({EmailError:''});
            
        if(user.Phone == ''){
           this.setState({PhoneError:'Required Field'});
            flag = false;
        } else 
            this.setState({PhoneError:''});

        if(user.County == ''){
            this.setState({CountyError:'Required Field'});
            flag = false;
        } else
            this.setState({CountyError:''});

        if(!user.FirstCheckBox){
            this.setState({FirstCheckBoxError:true});
            flag = false;
        } else
            this.setState({FirstCheckBoxError:false});

        if(!user.SecondCheckBox){
            this.setState({SecondCheckBoxError:true});
            flag = false;
        } else  
            this.setState({SecondCheckBoxError:false});

        if(flag)
            console.log('Submit Finally :D')
        else
            scroll.current.scrollTo(0)

        console.log(this.state);
    }

    render(){
        return (
            
            <View style={styles.screen}>
                <ScrollView ref={scroll} style={styles.containerView} > 
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
                                    <View>
                                        <TextInput placeholder="First Name" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.FirstName} onChange={(e) => this.handleChange(e, 'FirstName')} />
                                        <Text style={styles.error}>{this.state.FirstNameError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Last Name" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.LastName} onChange={(e) => this.handleChange(e, 'LastName')} />
                                        <Text style={styles.error}>{this.state.LastNameError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Date Of Birth" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.DOB} onFocus={()=>this.setState({showCalendar:true})} onBlur={()=>this.setState({showCalendar:false})} />
                                        {this.state.showCalendar && console.log(this.state) && 
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={this.state.DOB}
                                                mode='date'
                                                display="spinner"
                                                onChange={this.handleDateChange}
                                            />
                                        }
                                        <Text style={styles.error}>{this.state.DOBError}</Text>
                                    </View>
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
                                        <Text style={styles.error}>{this.state.GenderError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Mailing Address" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.MailingAddress} onChange={(e) => this.handleChange(e, 'MailingAddress')} />
                                        <Text style={styles.error}>{this.state.MailingAddressError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="City" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.City} onChange={(e) => this.handleChange(e, 'City')} />
                                        <Text style={styles.error}>{this.state.CityError}</Text>
                                    </View>
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
                                        <Text style={styles.error}>{this.state.StateError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Zip Code" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.Zip} onChange={(e) => this.handleChange(e, 'Zip')} />
                                        <Text style={styles.error}>{this.state.ZipError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Email" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.Email} onChange={(e) => this.handleChange(e, 'Email')} />
                                        <Text style={styles.error}>{this.state.EmailError}</Text>
                                    </View>
                                    <View>
                                        <TextInput placeholder="Phone" placeholderColor="#c0c0c0" style={styles.loginFormTextInput} value={this.state.Phone} onChange={(e) => this.handleChange(e, 'Phone')} />
                                        <Text style={styles.error}>{this.state.PhoneError}</Text>
                                    </View>
                                    <CheckBox
                                        center
                                        title='Mobile'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.PhoneType == 'Mobile'}
                                        onPress={() => this.setState({PhoneType: 'Mobile'})}
                                    />
                                    <CheckBox
                                        center
                                        title='Home'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.PhoneType == 'Home'}
                                        onPress={() => this.setState({PhoneType: 'Home'})}
                                    />
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
                                            </Picker>
                                        </Text>
                                        <Text style={styles.error}>{this.state.CountyError}</Text>
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
                                    <Text > 
                                        I want to become a member of this county Farm Bureau, Texas Farm Bureau and the American Farm Bureau Federation, because I am interested in promoting the welfare and benefit of agriculture and the rural way of life.
                                    </Text>
                                    <Text >
                                        <Text style={{fontWeight:'bold'}}>Membership dues are not refundable and are not deductible as a charitable contribution for Federal Income Tax purposes.</Text> In accordance with current federal income tax law, a portion of your dues in the amount of $9.00
                                        has been estimated to be allocable to lobbying activities, and that portion is not deductible even if payment of your dues qualifies as a business expense.
                                    </Text>
                                </View>
                                <HR/>
                                <View>
                                    <CheckBox
                                        center
                                        title='I have read, understand, and agree that membership dues are not refundable.'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        textStyle={this.state.FirstCheckBoxError? styles.error : styles.normal}
                                        checked={this.state.FirstCheckBox}
                                        onPress={() => this.setState({FirstCheckBox: !this.state.FirstCheckBox})}
                                    />
                                    <CheckBox
                                        center
                                        title='I have read, understand, and agree to be bound by the Terms and Conditions listed above.'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        textStyle={this.state.SecondCheckBoxError? styles.error : styles.normal}
                                        checked={this.state.SecondCheckBox}
                                        onPress={() => this.setState({SecondCheckBox: !this.state.SecondCheckBox})}
                                    />
                                </View>
                                <View style={styles.submitFormView}>
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => this.onSubmit()}
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
    error:{
        color:'red',
    },
    normal:{
        color:'black',
    }
});

export default inject('userStateStore')(observer(JoinMyTFBScreen));