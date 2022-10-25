import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';


const Home = () => {

    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                console.log(response.data);
                setContent(response.data);
                console.log(content);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        )
    },[]);

    return (
        <div className="col-md-12">

            <div className="card " >
                
                <h10>Seja bem vindo ao nosso sistema de registro de itens</h10>

            </div>
            
            <div>
          <img src="img/transformatec.png" alt="transformatec"/>
        </div>
        <div>
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-dark">App desenvolvido por <a href="https://github.com/fq38" target="_blank" rel="noreferrer">Felipe Quirino</a></p>
                
            </div>
        </footer>
        </div>

        </div>

       

    )
        
    

    //INSERT INTO ROLES (ID,NAME) VALUES (1,'ROLE_USER') // para logar no sistema
    /*
    erros 
    simbolo: ETHBRL
    */

};

export default Home;