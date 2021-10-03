import {useEffect} from 'react'

const useVisibleHeading = setVisibleHeading => {
    useEffect(() => {
        const observer = new IntersectionObserver(headings => {
            const visibleHeadings = headings.filter(heading => heading.isIntersecting)

            if (visibleHeadings.length > 0) {
                setVisibleHeading(visibleHeadings[0].target.id)
            }
        })

        const headings = Array.from(document.querySelectorAll("h2"))
        for (const heading of headings) {
            observer.observe(heading)
        }

        return () => observer.disconnect()
    }, [setVisibleHeading])
}

export default useVisibleHeading
