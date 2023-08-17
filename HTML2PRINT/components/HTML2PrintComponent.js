import React, { useRef } from "react";
import parse from 'html-react-parser';
import ReactToPrint from "react-to-print";
import { ActionButton, CompoundButton, DefaultButton, IIconProps, PrimaryButton } from '@fluentui/react';

import '../css/AppStyles.css';

function App({ appContext }) {
    const componentRef = useRef();
    const buttonElement = appContext.parameters.ButtonAppearence.raw === 'Primary' ? 
        <PrimaryButton id="btnHtml2Print">{ appContext.parameters.ButtonText.raw }</PrimaryButton> :
        <DefaultButton id="btnHtml2Print">{ appContext.parameters.ButtonText.raw }</DefaultButton>

    return(
        <React.Fragment>
            <ReactToPrint
                trigger={ () => buttonElement }
                content={ () => componentRef.current }
            />
            <div className="pagebreak full-table">
                { document.title = appContext.parameters.DefaultFilename.raw }
                <div ref={ componentRef }>
                    { parse(appContext.parameters.CustomCss.raw + appContext.parameters.HTMLCode.raw) }
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;