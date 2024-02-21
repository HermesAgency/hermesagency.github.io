import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', () => {
    const mm = gsap.matchMedia()
    const whyAWebSection = document.querySelector(
        'section#Beneficios-de-una-web'
    )
    const wabTL = gsap.timeline({
        scrollTrigger: {
            trigger: whyAWebSection,
            start: 'top 80%',
        },
    })
    const whyAWebImage = document.querySelector(
        'img#web-advantajes-section-hero-image'
    )
    const wabArrowMobile = document.querySelector('#web-adv-arrow-mobile')
    const wabArrowTablet = document.querySelector('#web-adv-arrow-tablet')
    const wabArrowLarge = document.querySelector('#web-adv-arrow-large')
    const wabTitle = document.querySelector('#why-a-web-title')
    const wabText = document.querySelector('#why-a-web-text')
    wabTL.to(whyAWebSection, {
        backgroundColor: '#F1F5F9',
        ease: 'power4.in',
        transformOrigin: 'bottom left',
        duration: 0.5,
    })
    //Mobile breakpoint
    mm.add('(max-width: 767px)', () => {
        //Image Entry
        wabTL.fromTo(
            whyAWebImage,
            {
                translateY: '30%',
                opacity: 0,
            },
            {
                translateY: '0',
                opacity: 1,
                duration: 0.5,
                ease: 'power4.out',
            }
        )
        //Arrow Entry
        wabTL.fromTo(
            wabArrowMobile,
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
        wabTL.fromTo(
            wabTitle,
            {
                opacity: 0,
                translateY: '30%',
            },
            {
                opacity: 1,
                translateY: '0',
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
        //text Entry
        wabTL.fromTo(
            wabText,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
            }
        )
    })
    //after md until lg breakpoint Animations
    mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        //Image Entry
        wabTL.fromTo(
            whyAWebImage,
            {
                opacity: 0,
                translateY: '30%',
            },
            {
                translateY: '0',
                opacity: 1,
                duration: 0.5,
                ease: 'power4.out',
            }
        )
        //Arrow Entry
        wabTL.fromTo(
            wabArrowTablet,
            {
                opacity: 0,
                scale: 0.2,
            },
            {
                opacity: 1,
                scale: 1,
                transformOrigin: 'top left',
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
        //Title Entry
        wabTL.fromTo(
            wabTitle,
            {
                opacity: 0,
                translateX: '-30%',
            },
            {
                opacity: 1,
                translateX: '0',
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
        //text Entry
        wabTL.fromTo(
            wabText,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
            }
        )
    })
    //after lg breakpoint
    mm.add('(min-width: 1024px)', () => {
        //Image Entry
        wabTL.fromTo(
            whyAWebImage,
            {
                translateX: '30%',
                opacity: 0,
            },
            {
                translateX: '0',
                opacity: 1,
                duration: 0.5,
                ease: 'power4.out',
            }
        )
        //Arrow Entry
        wabTL.fromTo(
            wabArrowLarge,
            {
                opacity: 0,
                scale: 0.2,
            },
            {
                opacity: 1,
                scale: 1,
                transformOrigin: 'top',
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
        //Title Entry
        wabTL.fromTo(
            wabTitle,
            {
                opacity: 0,
                translateX: '-30%',
            },
            {
                opacity: 1,
                translateX: '0',
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
        //text Entry
        wabTL.fromTo(
            wabText,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
            }
        )

        const benefitsArrow = document.querySelector('#about-benefits-arrow')
        const benefitsTitle = document.querySelector('#benefits__title')
        const benefitsTL = gsap.timeline({
            scrollTrigger: {
                trigger: benefitsArrow,
                top: 'top 60%',
                markers: true,
            },
        })
        benefitsTL.fromTo(
            benefitsArrow,
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
        benefitsTL.fromTo(
            benefitsTitle,
            {
                opacity: 0.1,
            },
            {
                opacity: 1,
            }
        )
    })

    //Add animation to cards
    const featureCards = gsap.utils.toArray('.feature-card')
    featureCards.forEach((card) => {
        gsap.fromTo(
            card,
            {
                translateY: '30%',
            },
            {
                translateY: '0',
                boxShadow: '0 10px 18px -3px rgba(0,0,0,0.1)',
                duration: 0.4,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                },
            }
        )
    })
})
