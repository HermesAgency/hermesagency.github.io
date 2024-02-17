import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { AnimationValues } from './animationValues'

gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// PRELOADER ANIMATION
export const tl = gsap.timeline()

export const mm = gsap.matchMedia()

//Mobile Config
mm.add('(max-width: 767px)', () => {
    // this setup code only runs when viewport is at least 768px wide
    //Preloader animation
    tl.to('#text', {
        duration: 4,
        ease: 'none',
        keyframes: {
            '0%': {
                opacity: 1,
                fill: 'transparent',
                stroke: '#000',
                'stroke-width': 3,
                'stroke-dashoffset': '25%',
                'stroke-dasharray': '0 32%',
            },
            '50%': {
                fill: 'transparent',
                stroke: '#000',
                'stroke-width': 3,
            },
            '70%, 100%': {
                fill: '#000',
                stroke: 'transparent',
                'stroke-width': '0',
                'stroke-dashoffset': '-25%',
                'stroke-dasharray': '32% 0',
            },
        },
    })

    tl.to(
        '#wing',
        {
            duration: 4,
            ease: 'none',
            keyframes: {
                '0%': {
                    opacity: 1,
                    fill: 'transparent',
                    stroke: '#000',
                    'stroke-width': 3,
                    'stroke-dashoffset': '25%',
                    'stroke-dasharray': '0 32%',
                },
                '50%': {
                    fill: 'transparent',
                    stroke: '#000',
                    'stroke-width': 3,
                },
                '70%, 100%': {
                    fill: '#000',
                    stroke: 'transparent',
                    'stroke-width': '0',
                    'stroke-dashoffset': '-25%',
                    'stroke-dasharray': '32% 0',
                },
            },
        },
        '<'
    )

    tl.to('#preloader', {
        delay: 0.5,
        scale: 80,
        duration: 0.8,
        ease: 'power4.inOut',
        translateX: '270%',
        onComplete: () => {
            lenis.scrollTo(0, { immediate: true })
        },
    })

    tl.to('#loader-container', {
        opacity: 0,
        display: 'none',
    })

    //Hero section Entry animation
    tl.fromTo(
        '#hero-arrow-mobile',
        {
            opacity: AnimationValues.heroArrow.from.opacity,
            scale: AnimationValues.heroArrow.from.scale,
            'stroke-dashoffset':
                AnimationValues.heroArrow.from['stroke-dashoffset'],
        },
        {
            opacity: AnimationValues.heroArrow.to.opacity,
            scale: AnimationValues.heroArrow.to.scale,
            transformOrigin: AnimationValues.heroArrow.to.transformOrigin,
            duration: AnimationValues.heroArrow.to.duration,
            ease: AnimationValues.heroArrow.to.ease,
            'stroke-dashoffset':
                AnimationValues.heroArrow.to['stroke-dashoffset'],
        }
    )

    tl.fromTo(
        '#hero-content',
        {
            opacity: 0,
            y: '50%',
        },
        {
            opacity: 1,
            translateY: '0%',
            stagger: 0.1,
        }
    )
})

//after Tablet Config
mm.add('(min-width: 768px)', () => {
    // this setup code only runs when viewport is bigger than 768px wide
    tl.to('#text', {
        duration: 4,
        ease: 'none',
        keyframes: {
            '0%': {
                opacity: 1,
                fill: 'transparent',
                stroke: '#000',
                'stroke-width': 3,
                'stroke-dashoffset': '25%',
                'stroke-dasharray': '0 32%',
            },
            '50%': {
                fill: 'transparent',
                stroke: '#000',
                'stroke-width': 3,
            },
            '70%, 100%': {
                fill: '#000',
                stroke: 'transparent',
                'stroke-width': '0',
                'stroke-dashoffset': '-25%',
                'stroke-dasharray': '32% 0',
            },
        },
    })

    tl.to(
        '#wing',
        {
            duration: 4,
            ease: 'none',
            keyframes: {
                '0%': {
                    opacity: 1,
                    fill: 'transparent',
                    stroke: '#000',
                    'stroke-width': 3,
                    'stroke-dashoffset': '25%',
                    'stroke-dasharray': '0 32%',
                },
                '50%': {
                    fill: 'transparent',
                    stroke: '#000',
                    'stroke-width': 3,
                },
                '70%, 100%': {
                    fill: '#000',
                    stroke: 'transparent',
                    'stroke-width': '0',
                    'stroke-dashoffset': '-25%',
                    'stroke-dasharray': '32% 0',
                },
            },
        },
        '<'
    )
    tl.to('#preloader', {
        delay: 2,
        scale: 90,
        duration: 0.8,
        translateX: '-100%',
        onComplete: () => {
            lenis.scrollTo(0, { immediate: true })
        },
    })

    tl.to('#loader-container', {
        opacity: 0,
        display: 'none',
    })

    //Hero section Entry animation
    tl.fromTo(
        '#hero-arrow-tablet',
        {
            opacity: AnimationValues.heroArrow.from.opacity,
            scale: AnimationValues.heroArrow.from.scale,
            'stroke-dashoffset':
                AnimationValues.heroArrow.from['stroke-dashoffset'],
        },
        {
            opacity: AnimationValues.heroArrow.to.opacity,
            scale: AnimationValues.heroArrow.to.scale,
            transformOrigin: AnimationValues.heroArrow.to.transformOrigin,
            duration: AnimationValues.heroArrow.to.duration,
            ease: AnimationValues.heroArrow.to.ease,
            'stroke-dashoffset':
                AnimationValues.heroArrow.to['stroke-dashoffset'],
        }
    )

    tl.fromTo(
        '#hero-content',
        {
            opacity: 0,
            y: '50%',
        },
        {
            opacity: 1,
            y: '0%',
            stagger: 0.1,
        }
    )
})
