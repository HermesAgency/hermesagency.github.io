import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const mm = gsap.matchMedia()
const aboutCards = gsap.utils.toArray('.about__card')
const metricCircles = gsap.utils.toArray('.metric__circle')
const aboutHeroImg = document.querySelector('#about-us-image')
const aboutArrowMobile = document.querySelector('#about-us-arrow-mobile')
const aboutSectionTitle = document.querySelector('#about-us-title')
const aboutSectionText = document.querySelector('#about-us-text')

mm.add('(max-width: 767px)', () => {
    //Function to add animation to card
    function addAnimationToCard(card) {
        let cardImg = card.querySelector('.about__card__image')
        let cardTitle = card.querySelector('.about__card__title')
        let cardText = card.querySelector('.about__card__text')
        const cardTL = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
            },
        })
        //Card Image Entry
        cardTL.fromTo(
            cardImg,
            {
                opacity: 0,
                translateX: '50%',
                translateY: '100%',
            },
            {
                opacity: 1,
                translateX: '0',
                translateY: '0',
                duration: 1,
            }
        )

        //Card title Entry
        cardTL.fromTo(
            cardTitle,
            {
                opacity: 0,
                translateX: '-100%',
            },
            {
                opacity: 1,
                translateX: '0',
                ease: 'power3.inOut',
                duration: 0.8,
            },
            '>-0.4'
        )
        //Card text entry
        cardTL.fromTo(
            cardText,
            {
                opacity: 0,
                translateX: '-30%',
            },
            {
                opacity: 1,
                translateX: '0',
                ease: 'power3.inOut',
                duration: 0.8,
            },
            '<+=0.2'
        )
    }

    //Function to add animation to metric circles
    function createMetricCirclesEntryAnimation(metrics) {
        const metricsContainer = document.querySelector('#metrics__container')
        const metricsTitle = document.querySelector('.metric__title')
        const metricsText = document.querySelector('.metric__text')
        const aboutTL2 = gsap.timeline({
            scrollTrigger: {
                trigger: metricsContainer,
                start: 'top 90%',
            },
        })
        //add animation to metrics
        metrics.forEach((metric) => {
            aboutTL2.fromTo(
                metric,
                {
                    opacity: 0,
                    translateY: '50%',
                },
                {
                    opacity: 1,
                    translateY: '0',
                    ease: 'power3.inOut',
                    duration: 0.4,
                },
                '>-0.2'
            )
        })
        //Metric title entry
        aboutTL2.fromTo(
            metricsTitle,
            {
                opacity: 0,
                translateX: '-100%',
            },
            {
                opacity: 1,
                translateX: '0',
                ease: 'power3.inOut',
                duration: 0.8,
            }
        )
        //Metric Text entry
        aboutTL2.fromTo(
            metricsText,
            {
                opacity: 0,
                translateX: '-30%',
            },
            {
                opacity: 1,
                translateX: '0',
                ease: 'power3.inOut',
                duration: 0.8,
            },
            '>-0.4'
        )
    }

    //create part1 timeline
    const aboutTL1 = gsap.timeline({
        scrollTrigger: {
            trigger: aboutHeroImg,
            start: 'top 90%',
        },
    })
    //Section Image entry
    aboutTL1.fromTo(
        aboutHeroImg,
        {
            opacity: 0,
            translateY: '40%',
            duration: 1,
            delay: 0.2,
        },
        {
            opacity: 1,
            translateY: '0',
        }
    )
    //Section arrow entry
    aboutTL1.fromTo(
        aboutArrowMobile,
        {
            opacity: 0,
            scale: 0,
            transformOrigin: 'top right',
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.inOut',
        }
    )
    //Section title entry
    aboutTL1.fromTo(
        aboutSectionTitle,
        {
            opacity: 0,
            translateX: '-100%',
        },
        {
            opacity: 1,
            translateX: '0',
            duration: 0.8,
        }
    )
    //Section Text Entry
    aboutTL1.fromTo(
        aboutSectionText,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.8,
        }
    )
    //add animation to Card in DomContentLoaded Event
    window.addEventListener('DOMContentLoaded', () => {
        aboutCards.forEach((card) => addAnimationToCard(card))
        createMetricCirclesEntryAnimation(metricCircles)
    })
})
