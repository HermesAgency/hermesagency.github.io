import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const mm = gsap.matchMedia()
const aboutCards = gsap.utils.toArray('.about__card')
const metricCircles = gsap.utils.toArray('.metric__circle')
const aboutHeroImg = document.querySelector('#about-us-image')
const aboutArrowMobile = document.querySelector('#about-us-arrow-mobile')
const aboutArrowTablet = document.querySelector('#about-us-arrow-tablet')
const aboutSectionTitle = document.querySelector('#about-us-title')
const aboutSectionText = document.querySelector('#about-us-text')

//TODO: BUG IN SM BREAKPOINT ARROW DON'T BE ANIMATED
//Mobile animation
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
            },
            {
                opacity: 1,
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

//Tablet animation
mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
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
                translateY: '30%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
            }
        )

        //Card title Entry
        cardTL.fromTo(
            cardTitle,
            {
                opacity: 0,
                translateY: '100%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
            },
            '>-0.8'
        )
        //Card text entry
        cardTL.fromTo(
            cardText,
            {
                opacity: 0,
                translateY: '30%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
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
            translateX: '40%',
            duration: 1,
            delay: 0.2,
            ease: 'power4.out',
        },
        {
            opacity: 1,
            translateX: '0',
        }
    )
    //Section arrow entry
    aboutTL1.fromTo(
        aboutArrowTablet,
        {
            opacity: 0,
            scale: 0,
            transformOrigin: 'top left',
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power4.in',
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
//Desktop animation
mm.add('(min-width: 1024px)', () => {
    const secondTitle = document.querySelector('.about__second__title')
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
                translateY: '30%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
            }
        )

        //Card title Entry
        cardTL.fromTo(
            cardTitle,
            {
                opacity: 0,
                translateY: '100%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
            },
            '>-0.8'
        )
        //Card text entry
        cardTL.fromTo(
            cardText,
            {
                opacity: 0,
                translateY: '30%',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power4.out',
                duration: 1,
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
                start: 'top 60%',
            },
        })
        //add animation to metrics
        metrics.forEach((metric) => {
            aboutTL2.fromTo(
                metric,
                {
                    opacity: 0,
                    translateX: '50%',
                },
                {
                    opacity: 1,
                    translateX: '0',
                    ease: 'power3.inOut',
                    duration: 0.4,
                    stagger: -0.2,
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
            },
            '>-0.2'
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
    gsap.fromTo(
        secondTitle,
        {
            opacity: 0.1,
        },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: secondTitle,
                start: 'top 80%',
            },
            ease: 'power4.out',
            duration: 0.5,
        }
    )
    //create part1 timeline
    const aboutTL1 = gsap.timeline({
        scrollTrigger: {
            trigger: aboutHeroImg,
            start: 'top 90%',
        },
    })
    //Section arrow entry
    aboutTL1.fromTo(
        aboutArrowTablet,
        {
            opacity: 0,
            scale: 0,
            transformOrigin: 'top left',
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power4.out',
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
        },
        '>-0.7'
    )
    //Section Image entry
    aboutTL1.fromTo(
        aboutHeroImg,
        {
            opacity: 0,
            translateX: '40%',
            duration: 1,
            delay: 0.2,
            ease: 'power4.out',
        },
        {
            opacity: 1,
            translateX: '0',
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
        },
        '<'
    )
    //add animation to Card in DomContentLoaded Event
    window.addEventListener('DOMContentLoaded', () => {
        aboutCards.forEach((card) => addAnimationToCard(card))
        createMetricCirclesEntryAnimation(metricCircles)
    })
})
