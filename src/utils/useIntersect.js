import { useState, useEffect, useRef } from 'react'

export default ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)
  let observer = null;

  if (typeof window !== 'undefined') {
    observer = useRef(
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      })
    )
  }

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  // disconnect once object is revealed
  if (entry.intersectionRatio == 1) {
    observer && observer.current.disconnect()
  }

  return [setNode, entry]
}
