import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const entryArrowMobile = document.querySelector('#mobile-contact-arrow')
const entryArrowLarge = document.querySelector('#large-contact-arrow')
const entryTitle = document.querySelector('#contact-section-title')
const contactSection = document.querySelector('section#contacto')
const contactForm = document.querySelector('form#contactForm')
const contactFormContainer = document.querySelector('.form__container')

const mm = gsap.matchMedia()

const contTL = gsap.timeline({
    scrollTrigger: {
        trigger: contactSection,
        start: 'top 80%',
    },
})

mm.add('(max-width:767px)', () => {
    //Arrow Entry
    contTL.fromTo(
        entryArrowMobile,
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
    contTL.fromTo(
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
    //Form Container Entry
    contTL.fromTo(
        contactFormContainer,
        {
            opacity: 0,
            padding: 0,
        },
        {
            opacity: 1,
            padding: '1px',
            duration: 0.5,
            ease: 'power4.inOut',
        }
    )
    //Form Entry
    contTL.fromTo(
        contactForm,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.5,
            ease: 'power4.inOut',
        },
        '<'
    )
})
