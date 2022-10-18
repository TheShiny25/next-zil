// Vendor
import Head from 'next/head';
import PropTypes from 'prop-types';

// Component
const HeadComponent = ({ title, description = '' }) => (
  <Head>
    <title>{title ?? 'Zil'}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content={title ?? 'Zil'} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/zil-banner.webp" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="642" />

    <meta property="og:url" content="" />
    <meta property="og:site_name" content="Zil site" />

    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <link rel="icon" href="/favicon.png" />
  </Head>
);

// PropTypes
HeadComponent.propTypes = {
  title: PropTypes.string,
};

HeadComponent.defaultProps = {
  title: '',
};

export default HeadComponent;
