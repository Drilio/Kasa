function Header(){
    return (<div>
        <img src="assets/images/K.png" alt="K"></img>
        <img src="assets/images/logo.png" alt="logo"></img>
        <img src="assets/images/s.png" alt="s"></img>
        <img src="assets/images/a.png" alt="a"></img>
        </div>)
}

function Navigation(){
    return(<nav>
       <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A Propos</a></li>
       </ul>
    </nav>
    )
}

function Banner(){
    return(<div class="header">
        <Header/>
        <Navigation/>
    </div>)
}
ReactDOM.render(<Banner/>, document.getElementById('root'))