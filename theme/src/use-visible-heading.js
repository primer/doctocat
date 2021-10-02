import {useRef, useEffect} from 'react'

const useVisibleHeading = setVisibleHeading => {
    const elements = useRef({})

    useEffect(() => {
        const observer = new IntersectionObserver(headings => {
            elements.current = headings.reduce((map, headingElement) => {
                return {...map, [headingElement.target.id]: headingElement}
            }, elements.current)

            const visibleHeadings = Object.keys(elements.current).reduce((items, key) => {
                const headingElement = elements.current[key]
                return headingElement.isIntersecting ? [...items, headingElement] : items
            }, [])

            setVisibleHeading(visibleHeadings[0].target.id)
        })

        Array.from(document.querySelectorAll("h2, h3")).forEach(element => observer.observe(element))

        return () => observer.disconnect()
    }, [setVisibleHeading])
}

export default useVisibleHeading
