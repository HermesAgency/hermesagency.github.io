import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const entryArrow = document.querySelector('#ServicesEntryArrow')
const entryTitle = document.querySelector('.services__title')
const serviceCardsContainer = document.querySelector('.cards__container')
const servicesSection = document.querySelector('section#servicios')

const mm = gsap.matchMedia()

const servTL = gsap.timeline({
    scrollTrigger: {
        trigger: servicesSection,
        start: 'top 80%',
    },
})

//Section Entry
servTL.to(servicesSection, {
    backgroundColor: '#F1F5F9',
    ease: 'power3.inOut',
    transformOrigin: 'bottom left',
    duration: 0.8,
})

//Mobile animation
mm.add('(max-width:767px)', () => {
    //Arrow Entry
    servTL.fromTo(
        entryArrow,
        {
            opacity: 0,
            scale: 0.2,
            'stroke-dashoffset': '25%',
        },
        {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.5,
            ease: 'power3.inOut',
            'stroke-dashoffset': '-25%',
        }
    )
    //Title Entry
    servTL.fromTo(
        entryTitle,
        {
            opacity: 0,
            translateX: '-100%',
        },
        {
            opacity: 1,
            translateX: '0',
            duration: 0.5,
            ease: 'power3.inOut',
        }
    )

    servTL.fromTo(
        serviceCardsContainer,
        {
            opacity: 0,
            translateY: '100%',
        },
        {
            opacity: 1,
            translateY: '0',
            duration: 0.5,
            ease: 'power2.inOut',
        }
    )
    //
})
//Tablet animation
mm.add('(min-width:768px)', () => {
    //Arrow Entry
    servTL.fromTo(
        entryArrow,
        {
            opacity: 0,
            scale: 0.2,
            'stroke-dashoffset': '25%',
        },
        {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.5,
            ease: 'power4.out',
            'stroke-dashoffset': '-25%',
        }
    )
    //Title Entry
    servTL.fromTo(
        entryTitle,
        {
            opacity: 0,
            translateX: '-100%',
        },
        {
            opacity: 1,
            translateX: '0',
            duration: 0.5,
            ease: 'power3.inOut',
        }
    )

    servTL.fromTo(
        serviceCardsContainer,
        {
            opacity: 0,
            translateY: '100%',
        },
        {
            opacity: 1,
            translateY: '0',
            duration: 0.5,
            ease: 'power2.inOut',
        }
    )
    //
})
