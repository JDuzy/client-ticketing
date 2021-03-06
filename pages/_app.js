import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/Header';

const AppComponent = ({Component, pageProps, currentUser}) => {
    return <div>
        <Header currentUser={currentUser}></Header>
        <Component {...pageProps}/>
    </div>
};

AppComponent.getInitialProps = async (appContext) => {
    const {data} = await buildClient(appContext.ctx).get('/api/users/currentuser');
    let pageProps = {};
    if (appContext.Component.getInitialProps){
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {
        pageProps,
        currentUser: data.currentUser
    };
};

export default AppComponent;