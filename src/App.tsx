// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { history } from './configureStore';
import { IEmployee } from './model';
import { HomePage, Employee, Manager, Registration, DailyUpdates} from './pages';
import { RootState } from './reducers/index';
import { withRoot } from './withRoot';
import { employeeList } from './reducers/employee';

function Routes() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/home" component={HomePage} />
      <Route exact={true} path="/manager" component={Manager}/>
      <Route exact={true} path="/registration" component={Registration}/>
      <Route exact={true} path="/dailyupdates" component={DailyUpdates} />
    </div>
  );
}

function Drawer(props: { employeeList: IEmployee[] }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/manager')}>
          <ListItemIcon>
            <SupervisorAccountIcon/>
          </ListItemIcon>
          <ListItemText primary="Manager's Screen" />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => history.push('/registration')}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Registration" />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => history.push('/dailyupdates')}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Daily Updates" />
        </ListItem>
      </List>
    </div>
  );
}

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const employeeList = useSelector((state: RootState) => state.employeeList);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap={isMobile}>
                Cognizant Covid-19 Tracker (Internal)
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <DrawerMui
              variant="temporary"
              anchor={'left'}
              open={mobileOpen}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <Drawer employeeList={employeeList} />
            </DrawerMui>
          </Hidden>
          <Hidden smDown>
            <DrawerMui
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <Drawer employeeList={employeeList} />
            </DrawerMui>
          </Hidden>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

function EmployeeIconCount(props: { employeeList: IEmployee[] }) {
  let employeeCount = props.employeeList.length;

  if (employeeCount > 0) {
    return (
      <Badge color="secondary" badgeContent={employeeCount}>
        <FormatListNumberedIcon />
      </Badge>
    );
  } else {
    return <FormatListNumberedIcon />;
  }
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'auto'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerHeader: { ...theme.mixins.toolbar },
  drawerPaper: {
    width: 250,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
}));

export default withRoot(App);
