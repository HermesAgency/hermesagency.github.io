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
    const wabTitle = document.querySelector('#why-a-web-title')
    const wabText = document.querySelector('#why-a-web-text')
    wabTL.to(whyAWebSection, {
        backgroundColor: '#F1F5F9',
        ease: 'power3.inOut',
        transformOrigin: 'bottom left',
        duration: 0.8,
        onStart: () => {
            // setTimeout(() => {
            //     window.scrollTo({
            //         top:
            //             whyAWebSection.getBoundingClientRect().top +
            //             window.scrollY,
            //         behavior: 'smooth',
            //     })
            // }, 200)
        },
    }),
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
                duration: 0.5,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                },
            }
        )
    })
})
