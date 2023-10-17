import { connect } from "react-redux";

function App4(props){
    return <div style={{backgroundColor:props.color}}>
        numero est :{props.numero}
        <button onClick={props.Augmentater}>+</button>
        <button onClick={props.diminuer}>-</button>
    </div>
}
const mapStateToProps=(state)=>{
    return { numero: state.numero,color:state.color}
};
const mapDispatchToProps = (dispatch)=>{
    return{
        'Augmenter':()=>dispatch({type:'Augmenter'}),
        'diminuer':()=>dispatch({type:'Decrease'})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App4);