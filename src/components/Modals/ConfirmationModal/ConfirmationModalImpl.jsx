import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";
import Breakpoints from '@css/breakpoints';
import {CM_CENTER_CENTER, CM_TOP_CENTER, CM_TOP_LEFT, CM_TOP_RIGHT, CM_BOTTOM} from "./index";

// These are private components

// Rendered popup - a positional demo confirmation box
const Container = styled.div` 
    position:fixed;
    background: rgba(8, 8, 8, 0.8);
    width: 21rem;
    height: auto;
    z-index: 101;
    backdrop-filter: blur(5px);


    top: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '10%',
        [CM_TOP_CENTER]: '10%',
        [CM_TOP_RIGHT]:'20%',
        [CM_BOTTOM]:'78%'
    }[openPos])};
    
    left: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '5%',
        [CM_TOP_CENTER]: '50%',
        [CM_TOP_RIGHT]: '95%',
        [CM_BOTTOM]:'98%'
    }[openPos])};
  
    transform: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
        [CM_TOP_LEFT]: 'translate(0,0)',
        [CM_TOP_CENTER]: 'translate(-50%,0)',
        [CM_TOP_RIGHT]: 'translate(-100%,0)',
        [CM_BOTTOM]:'translate(-100%,0%)'
    }[openPos])};

    border-radius: 25px;
    padding: 1rem;
    color: rgba(0,0,139, 0.9);
`;

const Button = styled.button`
    background-color: ${({primary}) => (primary ? 'white' : 'red')};
    color: black;
    border-radius: 5px;
    width: 8rem;
    padding: 0.2rem;
    margin: 0.2rem;
    margin-top:1rem;
    font-size: 0.8rem;
   
`;

const Header = styled.div`
    font-size: 1.5rem;
    color: black;;
`;

const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(80,80,150, 0.4);
    background-color: rgba(80,80,150, 0.4);
`;

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: flex-end;
`;

const Slot = styled.div`
    font-size: 15px;
    color: white;
    margin-top:10px;
    text-align:right;
`;

export default function ConfirmationModalImpl(props) {
    const {
        handleClose, // renderProp fn returns true or false
        show, // boolean - visible/invisible
        detailText, // html / inner text
        openPos // symbol for placement
    } = { ...props };

    const sendYes = () => handleClose(true);



    return (  
            <Container openPos={openPos}>
                <Slot>{detailText}</Slot>
                <ButtonBar>
                    <Button onClick={sendYes} primary={true}>Accept</Button>                  
                </ButtonBar>
            </Container> 
    );
}
ConfirmationModalImpl.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    detailText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    openPos: PropTypes.symbol.isRequired
};
