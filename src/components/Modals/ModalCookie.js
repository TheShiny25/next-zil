import React, {useEffect, useState} from 'react';
import ConfirmationModal from './ConfirmationModal';
import * as Pos from './ConfirmationModal';

export default function ModalCookie() {
    const [show, setShow] = useState(false);

    const hideModal = () => {
      localStorage.setItem('cookiesAccept','Accept');
      setShow(false);
    };

    useEffect(() => {
      const cookies = localStorage.getItem('cookiesAccept');
      if(!cookies) {
        setShow(true);
      }
    },[]);

    return (        
      show && (
        <ConfirmationModal
            show={show}
            handleClose={hideModal}
            openPos={Pos.CM_BOTTOM}>
            {`We use cookies, just to track visits to our website, we store no personal details`}
        </ConfirmationModal>)
    );
}
