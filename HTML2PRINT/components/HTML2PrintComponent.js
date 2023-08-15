import React, { useRef } from "react";
import parse from 'html-react-parser';
import ReactToPrint from "react-to-print";

import '../css/AppStyles.css';

function App({ appContext }) {
    const componentRef = useRef();

    return(
        <React.Fragment>
            <ReactToPrint
                trigger={ () => <button id="btnHtml2Print">{ appContext.parameters.ButtonText.raw }</button> }
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