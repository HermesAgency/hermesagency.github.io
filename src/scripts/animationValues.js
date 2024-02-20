export const AnimationValues = {
    heroArrow: {
        from: {
            opacity: 0,
            scale: 0.2,
            'stroke-dashoffset': '25%',
            // 'stroke-dasharray': '0 32%',
            // 'stroke-width': 0,
        },
        to: {
            opacity: 1,
            scale: 1,
            transformOrigin: 'top right',
            duration: 0.8,
            ease: 'power3.inOut',
            'stroke-dashoffset': '-25%',
        },
    },
}
