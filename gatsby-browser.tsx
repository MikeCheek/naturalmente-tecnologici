import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/cairo';
import '@fontsource/cairo/900.css';
import './src/styles/globals.scss';

import React from 'react';
import Layout from './src/components/organisms/Layout';

const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Layout pathname={props.path} {...props}>
      {element}
    </Layout>
  );
};

export { wrapPageElement };
