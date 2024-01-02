import React from 'react';
import { Button, Container, TextField, Grid, Card, CardContent, Typography, useMediaQuery,Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Login = () => {
  
    
  const theme = useTheme();
  const isSmallScreen:boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const imageUrl:string = 'https://th.bing.com/th/id/OIP.eHOAP5xJaMEN_5NWwTAKCgHaDe?pid=ImgDet&w=474&h=222&rs=1';

  const avatarStyle = {
    margin:'5px auto',
    backgroundColor: "green",
  };

  
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card
        sx={{
            boxShadow: 3,
            borderRadius: 6,
            height: '100%',
            width: { xs: '140%', sm:'100%'},
           
            display: 'flex',
            flexDirection: 'column',
          }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={isSmallScreen ? 12 : 6} >
              <form>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  sx={{ marginTop: {  sm: '60px' } }}
                >
                    
                  <Grid item xs={12}>
                  <Avatar style={avatarStyle} >
                  <LockOpenIcon />
                   </Avatar>
                  <Typography variant="h5" align="center" gutterBottom>
                      Login
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Password"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </Grid>
                  <Typography align="right" gutterBottom color="primary" sx={{ marginTop: '10px' }}>
                    Forgot Password..?
                  </Typography>
                  <Grid item xs={12} container justifyContent="space-around" sx={{ marginTop: '20px' }}>
                    <Button type="submit" variant="contained" color="primary">
                      Login
                    </Button>
                    <Button type="submit" variant="outlined">Sign Up</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            {!isSmallScreen && (
              <Grid item xs={12} sm={6}>
                <img
                  src={imageUrl}
                  alt="Random"
                  style={{
                    maxWidth: '100%',
                    height: '102%',
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                  }}
                />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
