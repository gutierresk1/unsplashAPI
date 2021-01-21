import React from 'react'
//for each time we call upon the imagelist component, we will populate it with this component.
//we use a class here instead of a function.
class ImageCard extends React.Component{
    //This component shows a div with an image inside of it
    constructor(props) {
        super(props);
        //override the prop of React.component.
        this.state = {spans: 0}
        //instance of the variable this.imageRef
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
        console.log(this.imageRef.current.clientHeight);
    }

    setSpans =()=>{
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10); 

        this.setState({ spans });
    };

    render(){
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/*  */}
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;