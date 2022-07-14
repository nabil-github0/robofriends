import React , {Component} from "react";

class ErrBoundary extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    
      componentDidCatch(error,info){
        this.setState({hasError:true})
      }

    render(){

        if (this.state.hasError){
            return <h2>Oooops... There is an Error</h2>
        }
        return this.props.children;
    }
}

export default ErrBoundary;