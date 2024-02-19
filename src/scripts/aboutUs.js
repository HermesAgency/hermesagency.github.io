import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const mm = gsap.matchMedia()
const aboutCards = gsap.utils.toArray('.about__card')
const aboutHeroImg = document.querySelector('#about-us-image')
const aboutArrowMobile = document.querySelector('#about-us-arrow-mobile')
const aboutSectionTitle = document.querySelector('#about-us-title')
const aboutSectionText = document.querySelector('#about-us-text')

mm.add('(max-width: 767px)', () => {
    function addAnimationToCard(card) {
        let cardImg = card.querySelector('.about__card__image')
        let cardTitle = card.querySelector('.about__card__title')
        let cardText = card.querySelector('.about__card__text')
        const cardTL = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                markers: true,
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
                onStart: () => console.log(`animacion iniciada card `),
            }
        )

        //Card text Entry
        cardTL.fromTo(
            cardTitle,
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
        cardTL.fromTo(
            cardText,
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
    }

    const aboutTL1 = gsap.timeline({
        scrollTrigger: {
            trigger: aboutHeroImg,
            start: 'top 90%',
            markers: true,
        },
    })
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
    aboutTL1.fromTo(
        aboutSectionText,
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

    window.addEventListener('DOMContentLoaded', () => {
        aboutCards.forEach((card) => addAnimationToCard(card))
    })
})
