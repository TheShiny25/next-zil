import { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import Hero from '@components/Hero';
import ContactCta from '@partials/ContactCta';
import HeadSlug from '@svg/distribution/head-slug';
import { useAnimateIn } from '@zil/util/animations';
import { useRouter } from "next/router";


const HeroTitle = styled.h1`
  font-size: var(--size-xxl);
  font-weight: 500;
  text-align: center;
  padding: 0 3rem;
  z-index: 100;

  em {
    display: inline-block;
    color: var(--red);
    font-style: normal;
    border-bottom: 3px solid var(--red);
    padding: 0 3px 3px;
  }

  ${breakpoints.tabletDown} {
    padding: 0;
    margin: 0;
  }
`;

const StyledHeroBackground = styled(HeadSlug)`
  width: 100%;
  background: #1E1E1E;
  ${breakpoints.phoneOnly} {
    width: 275%;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const ResumeGray = styled.span`
  color: #B1B1B1;
  display: block;
  font-size: 30px;
  margin-top: 8px;
`;


const Wrapper = styled.div`
  width: 70vw;
  margin: auto;
  margin-bottom: 150px;
  margin-top: 50px;
  ${breakpoints.tabletDown} {
    width: 80vw;
  }
`;


const DistributionSlug = ({ message, data }) => {
  const titleRef = useRef();
  const router = useRouter()
  const [dataMenu, setDataMenu] = useState({})

  const {
    query: { slug },
  } = router;

  useAnimateIn(titleRef, { delay: 1 });
  return (
    <Page
      title="Zil Distribution"
      description="Distribution is not enough! Our integral distribution service makes a huge difference for independent artists and record labels looking to scale."
    >
      <Hero background={<StyledHeroBackground />}>
        <HeroTitle ref={titleRef}>
          { data.title_page.texto_blanco != '' && <>{data.title_page.texto_blanco}</> } <>{ data.title_page.texto_rojo != '' && <em>{data.title_page.texto_rojo}</em> }</>
          <ResumeGray>{ data.title_page.texto_gris != '' && <>{data.title_page.texto_gris}</> }</ResumeGray>

        </HeroTitle>
      </Hero>
      {
        data ? <Wrapper dangerouslySetInnerHTML={{__html: data.post.post_content}}></Wrapper> : ''
      }
      <ContactCta />
    </Page>
  );
};

export default DistributionSlug;

Page.getInitialProps = async ({ store, res }) => {
  if (res) {
    res.setHeader('Cache-Control', 'no-store');
  }

  return {};
};

export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  const response = await fetch(`https://help.zil.gl/wp-json/v1/menu/${params.slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  const data = await response.json()
  let dataResponse = null;

  if(data.response === 'OK'){
    dataResponse = data.data;
  }

  return {
    props: { data: dataResponse },
  };
}
