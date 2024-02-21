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

//mobile animation
mm.add('(max-width:767px)', () => {
    //Arrow Entry
    contTL.fromTo(
        entryArrowMobile,
        {
            opacity: 0,
            scale: 0.2,
        },
        {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.5,
            ease: 'power3.inOut',
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
//tablet animation
mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
    //Arrow Entry
    contTL.fromTo(
        entryArrowMobile,
        {
            opacity: 0,
            scale: 0.2,
        },
        {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.5,
            ease: 'power3.inOut',
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
mm.add('(min-width:1024px)', () => {
    const contactInfo = document.querySelector('#contact-section-contact-info')
    //Arrow Entry
    contTL.fromTo(
        entryArrowLarge,
        {
            opacity: 0,
            scale: 0.2,
        },
        {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.5,
            ease: 'power4.out',
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
        },
        '>-0.2'
    )
    //Form Container Entry
    contTL.fromTo(
        contactFormContainer,
        {
            opacity: 0.2,
            padding: 0,
            translateY: '100%',
        },
        {
            opacity: 1,
            padding: '1px',
            translateY: '0',
            duration: 0.5,
            ease: 'power4.in',
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
            ease: 'power4.out',
        },
        '>-0.4'
    )
    //contact info entry
    contTL.fromTo(
        contactInfo,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            ease: 'power3.out',
            duration: 0.5,
        }
    )
})
