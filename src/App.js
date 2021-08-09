import './App.css';
import {SubscribersForm} from "./subscriber-form/SubscribersForm";

/**
 * For deploy the app, run on the npm run deploy
 */

function App() {
    return (
        <div className="App">
            <br/>
            <SubscribersForm/>
            <br/>
            <br/>
            <br/>
            <p>
                Here is a form which makes validation on all fields (if they are exist), and also do validation if the
                email is valid.<br/>
                The email validation happens by delay (for not check in every type) by using a custom hook.
            </p>
            <p><a href = "https://github.com/lingar-poc/react-basic-subscribers-form" target= "_blank">Github Repository</a></p>
            <hr/>

            <div className= "bottom-area">
                <h4>
                    Done by lingar (Izhar Mashkif), YIM - Programming

                </h4>
                <h5>
                    Creating large web systems from the scratch.
                    <br/>
                    Java, React, Angular, DB’s, Deployment, Clouds and more.
                    <br/>
                    Per Hour/ Per Project.
                    <br/>
                    Available worldwide for remote work, and for on-site work in Israel in the central and Jerusalem areas


                </h5>
                <h1> “DO IT SIMPLE”.
                </h1>
                <a href = "https://www.linkedin.com/in/izhar-mashkif-86a01913a/">LinkedIn </a><br/>
                <a href = "mailto:yimprogramming@gmail.com"> yimprogramming@gmail.com</a>

            </div>


        </div>
    );
}

export default App;
