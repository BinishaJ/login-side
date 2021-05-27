import './App.css';
import {
  Container,
  Typography,
  Grid,
  FormControl,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Paper,
  Button
} from "@material-ui/core";
import {
  Person,
  VpnKey,
  Visibility,
  VisibilityOff,
  ExitToApp
} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import "@fontsource/lora";
import React, {useState} from "react";

const useStyles = makeStyles( theme => ({
  mainContainer: {
    display: "flex",
    height: "100%",
    width: "100%"
  },
  left: {
    backgroundImage: "url(/images/laptop.jpg)",
    backgroundSize: "cover",
    height: "100%",
    marginLeft: 0,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(905)]: {
      display: "none"
    }
  },
  right: {
    backgroundImage: "url(/images/light1.jpg)",
    backgroundSize: "cover",
    height: "100%",
    marginRight: 0,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    [theme.breakpoints.down(905)]: {
      width: "100%",
      flexDirection: "column"
    },
  },
  align: {
    alignItems: "flex-end",
  },
  loginIcon: {
    alignItems: "center",
    margin: theme.spacing(4, 0, 0, 0),
    color: "#9dad0d",
    fontSize: "27px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(6),
    [theme.breakpoints.down(400)]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down(905)]: {
      margin: "0 auto"
    },
  },
  typography: {
    color: "#e41547",
    fontFamily: "Lora",
    fontSize: "40px",
    fontWeight: 600
  },
  content: {
    backgroundColor: "rgba(255,255,255,0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "48px",
    fontWeight: 700
  },
  submit: {
    margin: theme.spacing(4, "auto", 0),
    backgroundColor: "#42bd47",
    display: "flex",
    fontSize: "22px",
    textTransform: "none",
    height: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: "#238127",
    }
  },
  loginError: {
    fontSize: "14px",
    marginTop: "5px",
    color: "red",
    marginLeft: "5px"
  },
  loginSuccess: {
    fontSize: "16px",
    marginTop: "5px",
    color: "#1e921e",
    marginLeft: "5px"
  },
  display: {
    fontSize: "40px",
    fontWeight: 700,
    color: "white",
    marginBottom: "65px",
    [theme.breakpoints.up(905)]: {
      display: "none"
    },
    [theme.breakpoints.down(450)]: {
      fontSize: "32px",
      fontWeight: 600,
      whiteSpace: "nowrap",
      marginLeft: "auto",
      marginRight: "auto"
    },
  }
}));

function App() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
    login: ""
  });
  let [usernameError,setUerror] = useState("");
  let [passwordError,setPerror] = useState("");

  const handleChange = (event) => {
    setValues({ 
      ...values, 
      [event.target.name]: event.target.value 
    });
  };

  const handlePasswordVisibility = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleSubmit = async event => {
    event.preventDefault();
    (values.username==="")
      ? setUerror("Username Empty!")
      : setUerror("");
    (values.password==="")
      ? setPerror("Password Empty!")
      : setPerror("");
    (values.username==="binisha" && values.password==="binisha")
      ? setValues({ ...values, login:true})
      : setValues({ ...values, login:false});
  }

  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Container className={classes.left}>
        <Container className={classes.content}>
          <svg viewBox="0 0 500 400">
            <path id="curve" 
              d="M90.2,148.6c4-6.1,55.5-55.8,140.6-60.6c101.3,1.2,190.8,90.3,175.1,87"
              fill="transparent"
            />
            <text
              width="450" 
              style={{fill:"white",fontFamily:"Lora"}}
            >
              <textPath xlinkHref="#curve">
                MY COMPANY
              </textPath>
            </text>
          </svg>
          <footer style={{fontSize:"38px"}}>
            JOIN YOUR TEAM!!!
          </footer>
        </Container>
      </Container>
      <Container className={classes.right}>
        <header className={classes.display}>
          JOIN YOUR TEAM!!!
        </header>
        <Paper 
          elevation={20} 
          className={classes.paper}
        >
          <Container 
            style={{
              display:"flex", 
              justifyContent:"center", 
              alignItems:"center"
            }}
          >
            <ExitToApp 
              style={{
                marginRight:"12px",
                color:"#ff563d",
                fontSize: "28px"
              }}
            />
            <Typography 
              variant="h4" 
              className={classes.typography}
            >
              Login
            </Typography>
          </Container>
          <form 
            onSubmit={handleSubmit}
          >
            <Grid container spacing={3} className={classes.align}>
              <Grid item xs={2}>
                <Person className={classes.loginIcon} />
              </Grid>

              <Grid item xs={10}>
                <FormControl 
                  fullWidth 
                >
                  <InputLabel 
                    htmlFor="username"
                  >
                    Username
                  </InputLabel>
                  <Input
                    name="username"
                    value={values.username}
                    error={usernameError.length>0 ? true : false}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={10}>
                {usernameError.length > 0 && (
                  <Typography className={classes.loginError}>
                    {usernameError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            
            <Grid container spacing={3} className={classes.align}>
              <Grid item xs={2}>
                <VpnKey className={classes.loginIcon} />
              </Grid>

              <Grid item xs={10}>
                <FormControl 
                  fullWidth 
                >
                  <InputLabel 
                    htmlFor="password"
                  >
                    Password
                  </InputLabel>

                  <Input
                    name="password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    error={passwordError.length>0 ? true : false}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton 
                          onClick={handlePasswordVisibility}
                        >
                          {values.showPassword ? (
                            <Visibility />
                           ) : (
                            <VisibilityOff />
                          )} 
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={10}>
                {passwordError.length > 0 && (
                  <Typography className={classes.loginError}>
                    {passwordError}
                  </Typography>
                )}

                {values.login===false && usernameError.length===0 && passwordError.length===0 && (
                  <Typography className={classes.loginError}>
                    Incorrect username or password!
                  </Typography>
                )}

                {(values.login) && usernameError.length===0 && passwordError.length===0 && (
                  <Typography className={classes.loginSuccess}>
                    Login Successful!
                  </Typography>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit" 
              variant="contained" 
              className={classes.submit}
              fullWidth
            >
              Log In
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
