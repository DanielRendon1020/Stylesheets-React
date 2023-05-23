import React from "react";

export const DEFAULT_STYLE = {
    aside: {
        backgroundColor: "orange",
        color: 'green',
        paddingBlock: '2rem',
    },
    innerAside: {
        backgroundColor: 'aquamarine',
        color: 'blue',
        paddingBlock: '1rem',
    }
}

const StyleContext = React.createContext(DEFAULT_STYLE);

export default StyleContext;