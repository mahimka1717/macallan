import { useEffect, useLayoutEffect, useContext } from 'react';
import Head from 'next/head';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from '~/gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { useTranslation } from 'next-i18next';

import styled from 'styled-components';

import Metadata from '~/components/includes/Metadata';
import { ARTICLE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppContext } from './_app';




import Controls from '~/components/includes/Controls';
import ImageGrid from '~/components/article/ImageGrid';


import Preloader from '~/components/article/Preloader';
import HeroBanner from '~/components/article/HeroBanner';
import Intro from '~/components/article/Intro';

import Part1 from '~/components/article/Part1';
import Part2 from '~/components/article/Part2';
import Part3 from '~/components/article/Part3';
import Part4 from '~/components/article/Part4';
import Part5 from '~/components/article/Part5';
import More from '~/components/article/More';



gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Container = styled.div`
    background: #001217;
    padding: 0;

    @media ${device.tablet} {
    }
`;

const Pixel = styled.img`
    position: absolute;
    opacity: 0;
    @media ${device.tablet} {
    }
`;

const Smoother = styled.div`
    position: relative;
`;

const metaData = {
    title: 'Beyond the horizon: strategies for financing a sustainable future',
    desc: 'World-changing impact requires investment - find out how finance can help shape a better world while delivering long-term resilience',
    publicationDate: '2023-12-18',
    contentType: 'Hub',
    campaignName: 'Temasek',
    advertiserName: 'Temasek',
    primaryIndustryAdvertiser: 'Asset Management',
    contentAuthor: 'Alpha_Grid',
    brandedContent: true,
    contentStyle: 'Thought_leadership',
    primaryTopic: 'Investments',
    secondaryTopic: 'Corporate_governance',
    adbookId: 462542,
    hasVideo: false,
    videoStyle: null,
    wordCount: 300,
    commercialProduct: 'ft',
    type: 'Immersive_article',
    productType: 'ft',
    pageDesignType: 'Bespoke',
    articleImage: 'https://ft.com/partnercontent/temasek/tem-hero.jpg',
    articleUrl: 'https://temasek.ft.com/',
};

export default function Home({ data }) {
    const { t } = useTranslation();

    const { cookieConsent } = useContext(AppContext);

    let halfWindowHeight;

    useEffect(() => {
        FtEvents();
        FtAnalytics();
    }, []);

    useEffect(() => {
        if (cookieConsent) {
            window.permutive.addon('web', {
                page: {
                    type: 'Partner Content Hub',
                },
            });
        }
    }, [cookieConsent]);

    useLayoutEffect(() => {
        halfWindowHeight = window.innerHeight / 2;
    }, []);

    useGSAP(() => {

        let imageWidth = 1280;
        let imageHeight = 924;
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let scaleX = viewportWidth / imageWidth;
        let scaleY = viewportHeight / imageHeight;
        let scale = Math.max(scaleX, scaleY); 

        let smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
        // smoother.paused(true);


        

        // part animation
        const parts = document.querySelectorAll('[data-name="part"]');
        parts.forEach((part, index) => {
            const header = part.querySelector('[data-name="header"]');
            const imagebox = part.querySelector('[data-name="imagebox"]');

            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: part,
                    start: 'top top',
                    end: `+=${200}`,
                    scrub: 1,
                    // markers: true,
                },
            });
            tl2.to(imagebox, { scale: scale })
            tl2.to(header, { y: halfWindowHeight + 100 }, 0)


            // if(index===0){
            //     const intro = document.querySelector('[data-name="intro"]');

            //     ScrollTrigger.create({
            //         trigger: intro,
            //         start: () => `top top`,
            //         end: () => `100% top`,
            //         pin: part,
            //         anticipatePin: true,
            //         pinSpacing: true,
            //         scrub: true,
            //         markers: true,
            //     });
            // }

        });

        // grid animation
        const grids = document.querySelectorAll('[data-name="grid"]');
        const glows = document.querySelectorAll('[data-name="glow"]');
        const arr = [[-2, 0],[0, -2],[3, 0],[0, 4],[1,1]]

        grids.forEach((grid, index) => {
            const images = grid.querySelectorAll('[data-name="gridimage"]');
            const imagesArray = Array.from(images);
            //Math.floor(Math.random() * imagesArray.length)
            let el = imagesArray[0]; 
            let img = el.querySelector('img');
            let glow = glows[index];

            // show all images & glow
            let tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: grid,
                    start: 'top bottom',
                    end: `bottom bottom`,
                    scrub: 1,
                    // markers: true,
                },
            });
            tl3.from(images, { 
                autoAlpha: 0, 
                x: (i) => arr[i][0] * 20, 
                y: (i) => arr[i][1] * 20, 
                duration: 2, 
                ease: 'none', 
                stagger: 0.1
            })
            tl3.from(glow, {autoAlpha: 0, duration: 2, ease: 'none'}, 1)

            // move one image
            let tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: grid,
                    start: 'top bottom',
                    end: `bottom top`,
                    scrub: 1,
                    // markers: true,
                },
            });

            tl4.fromTo(img, { x: -30, scale: 1.3 }, {
                x: 30,
                scale: 1.3,
                duration: 2, 
                ease: 'none', 
            }, 0)

        });

        // carousel animation
        const carousels = document.querySelectorAll('[data-name="carousel"]');
        carousels.forEach((carousel, index) => {
            
            // get carousel carouselslider
            const carouselSlider = carousel.querySelector('[data-name="carouselslider"]');
            const carouselglow = carousel.querySelector('[data-name="carouselglow"]');
            const carouselImages = carousel.querySelectorAll('[data-name="carouselimage"]');
            

            // get carouselSlider width
            // let carouselWidth = carouselSlider.offsetWidth;
            // console.log(carouselWidth)
            // let tl6 = gsap.timeline({
            //     scrollTrigger:{
            //         trigger: carousel,
            //         start: 'top bottom',
            //         end: `bottom top`,
            //         scrub: true,
            //     }
            // });
            // tl6.to(carousel, {x: viewportWidth - carouselWidth, duration: 1, ease: 'none'})
        

            // show all images & glow
            let tl5 = gsap.timeline({
                scrollTrigger: {
                    trigger: carousel,
                    start: 'top bottom',
                    end: `bottom bottom`,
                    scrub: 1,
                    // markers: true,
                },
            });
            tl5.from(carouselImages, { 
                autoAlpha: 0, 
                scale: 0.75,
                duration: 2, 
                ease: 'none', 
                stagger: 0.2
            })
            tl5.from(carouselglow, {autoAlpha: 0, duration: 2, ease: 'none'}, 1)



        });



        ScrollTrigger.refresh();

    }, []);

    return (
        <>
            <Head>
                <title>
                    Beyond the horizon: strategies for financing a sustainable
                    future - Financial Times - Partner Content by Temasek
                </title>
                <Metadata title={true} data={metaData} />
            </Head>
            <Container>
                <main className="main" id="content">
                    <Smoother>
                        <div id="smooth-wrapper">
                            <div id="smooth-content">

                                {/* <Preloader /> */}
                                <HeroBanner />
                                <Intro />
                                <Part1 />
                                <Part2 />
                                <Part3 />
                                <Part4 />
                                <Part5 />
                                <More />
                                <Controls />
                                
                            </div>
                        </div>
                    </Smoother>
                </main>
            </Container>
        </>
    );
}

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});
