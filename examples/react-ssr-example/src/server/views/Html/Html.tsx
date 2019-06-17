import React from "react";
import {HelmetData} from "react-helmet";

interface HtmlProps {
    children: React.ReactNode;
    helmet?: HelmetData;
    lang: string;
}

function Html(props: HtmlProps) {
    const {children, helmet, lang} = props;
    const htmlAttrs = helmet ? helmet.htmlAttributes.toComponent() : {};
    return (
        <html lang={lang} {...htmlAttrs}>
            {children}
        </html>
    );
}

export default Html;
