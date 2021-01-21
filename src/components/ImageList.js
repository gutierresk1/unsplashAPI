import './ImageList.css';
 import React from 'react'
 import ImageCard from './ImageCard';
 
 //we use a function in this component, instead of a class. The prop in this case 
 //will be images inside of the props of ImageList in App.js
 const ImageList = (props) =>{
     const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
        //This ImageCard has to props: the key and the image itself.
     });

     return <div className="image-list">{images}</div>
 };

 export default ImageList;