import React from 'react';

const year = new Date().getFullYear();
const footerCopy = `Ant Design © ${year} Created by Monzoor`;

const FooterBar = () => (
    <div>
        {footerCopy}
    </div>
);

export default FooterBar;
