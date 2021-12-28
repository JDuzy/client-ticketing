import buildClient from "../api/build-client";

const landingPage = ({currentUser}) => {
    return currentUser ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>
};

landingPage.getInitialProps = async (context) => {
    const {data} = await buildClient(context).get('/api/users/currentuser');
    return data;
}

export default landingPage;