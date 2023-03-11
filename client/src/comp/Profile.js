export default function Profile(props){
    console.log(props)
    return(
        <div>
            <div style={{flex:1,justifyContent: "center",alignItems: "center"}}>
            <img  src={props.props.picture}></img>
            </div>
            Profile
            Name : {props.props.given_name}
          
            
        </div>
    )
}