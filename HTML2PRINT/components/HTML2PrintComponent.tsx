import * as React from "react";
import { useRef } from "react";
import parse from 'html-react-parser';
import ReactToPrint from "react-to-print";

import { IInputs } from "../generated/ManifestTypes";

import '../css/AppStyles.css';

interface IHTML2PrintComponentProps {
    appContext: ComponentFramework.Context<IInputs>
}

const HTML2PrintComponent: React.FC<IHTML2PrintComponentProps> = ({ appContext }) => {
    const componentRef = useRef(null);

    return(
        <React.Fragment>
            <ReactToPrint
                trigger={ () => <button id="btnImprimitPDF">{ appContext.parameters.ButtonText.raw }</button> }
                content={ () => componentRef.current }
            />
            <div className="pagebreak full-table">
                {/* { document.title = appContext.parameters.DefaultFilename.raw? } */}
                <div ref={ componentRef }>
                    {/* { parse(appContext.parameters.CustomCss.raw?) } */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default HTML2PrintComponent;