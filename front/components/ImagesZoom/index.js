import PropTypes, { symbol } from 'prop-types';
import React,{useState} from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';

const Overlay = styled.div`
    position : fixed;
    z-index : 5000;
    top : 0;
    left : 0;
    right: 0;
    left : 0 ;
    bottom : 0;
`;

const Header = styled.div`
    height: 44px;
    background : white;
    position : relative;
    padding : 0 ;
    text-align : center;
    & h1{
        margin : 0;
        font-size : 17px;
        color : #333;
        line-height : 44px;
    }
    &button{
        position : absolute;
        right: 0;
        top : 0 ;
        padding : 15px;
        line-height : 14px;
        cursor : pointer;
    }

    }
`;



const ImagesZoom = ({ images, onClose })=>
{   
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return(
            <Overlay>
            <Header>
                <h1>상세이미지</h1>
                <button onClick={onClose}>X</button>
            </Header>
            <div>
                <div>
                    <Slick 
                        initialSlide={0}
                        afterChange={(slide)=> setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToScroll={1}
                        slidesToShow={1}

                    >
                        {images.map((v)=>(
                            <div key={v.src}>
                                <img src={v.src} alt={v.src}/>
                            </div>  
                        ))}
                    </Slick>  
                </div>
            </div>
            </Overlay>                   
      
    );
}

ImagesZoom.propTypes ={
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func
}

export default ImagesZoom