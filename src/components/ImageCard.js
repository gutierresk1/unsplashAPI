import React from 'react'

class ImageCard extends React.Component{
    //This component shows a div with an image insode of it
    constructor(props) {
        super(props);

        //instance of the variable this.imageRef
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef.current);
        console.log(this.imageRef.current.clientHeight);
    }
    render(){
        const { description, urls } = this.props.image;
        return (
            <div>
                {/*  */}
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;