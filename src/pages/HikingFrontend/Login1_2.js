import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page'
import FormControl from '@material-ui/core/FormControl';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
//localhost記得改成127.0.0.1才會出現驗證
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    width: '-webkit-fill-available',
    height: '48',
    margin: '56px 0 0',
    padding: '12px 172px 12px 174px',
    backgroundColor: '#00d04c',
    color: '#ffffff',
    borderRadius: 4
  },
  container: {
    width: '-webkit-fill-available',
    height: 768,
    padding: '40px 16px 213px',
    backgroundColor: '#ffffff'
    
    //backgroundColor:'#66CBBA'
  },
  MaterialIconsBlackArrowback :{
    width: '24',
    height: '24',
    color: '#00d04c',
    margin: '0 297px 61px 0'
  },
  InputBackground:{
    width: '-webkit-fill-available',
    height: '40',
    margin: '1px 0 0',
    padding: '9px 0 0',
    borderColor:'#232323',
  },
  Title:{
    width: '98',
    height: '36',
    margin: '0 281px 31px 0',
    fontFamily: "NotoSansCJKtc",
    fontSize: '24px',
    fontweight: 500,
    lineheight: 1.5,
    letterspacing: '0.5px',
    color: '#232323'
  },
  Text:{
    width: '66',
    height:'24',
    margin: '0 313px 1px 0',
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  ErrorInfo:{
    width: '58',
    height: '21',
    margin: '16px 263px 56px 0',
    fontFamily: "NotoSansCJKtc",
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#ff3b30',
  },
  ForgotInfo:{
    width: '58',
    height: '21',
    fontFamily: "NotoSansCJKtc",
    margin: '-75px 0 56px 263px',
    fontSize: '14px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  ModifyTextFieldColor: {
    // Theme Color, or use css color in quote
    fontSize: '14px',
    color: '#979797',  
    borderColor:'#979797'
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let back = useHistory();
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  function backhandleClick() {
    back.push("/login1_1");
  }
  function ResetPassword() {
    back.push("/resetPassword");
  }
  return (
    <Page>
      <div className={classes.container}>
        <ArrowBackIcon className={classes.MaterialIconsBlackArrowback} onClick={backhandleClick} ></ArrowBackIcon>
        <Typography className={classes.Title} textAlign="left">
          忘記密碼
        </Typography>
        <FormControl className={classes.form} noValidate>
        <Typography className={classes.Text}  textAlign="left">
          電子信箱 
        </Typography>   
          <TextField
            InputLabelProps={{
              className: classes.ModifyTextFieldColor
            }}
            className={classes.InputBackground}
            id="email"
            label="請輸入你的電子信箱"
            name="email"
          />
        <Typography className={classes.ErrorInfo} >
          錯誤資訊
        </Typography>  
        <ReCAPTCHA
            sitekey="6LdFiEYaAAAAAHcdu_AyzIktEbqdTz7pXmNBC__W"
            onChange={onChange}
         />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={ResetPassword}
          >
          繼續
        </Button>
      </FormControl>
    </div>
  </Page>
  );
}