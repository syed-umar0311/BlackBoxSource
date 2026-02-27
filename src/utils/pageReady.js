export async function waitForPageReady(rootElement) {
  const root = rootElement || document
  const images = Array.from(root.querySelectorAll('img'))

  const imagePromises = images.map((img) => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve()

    return new Promise((resolve) => {
      const done = () => {
        img.removeEventListener('load', done)
        img.removeEventListener('error', done)
        resolve()
      }

      img.addEventListener('load', done, { once: true })
      img.addEventListener('error', done, { once: true })
    })
  })

  const fontsPromise = document.fonts?.ready
    ? document.fonts.ready.catch(() => undefined)
    : Promise.resolve()

  await Promise.all([fontsPromise, ...imagePromises])

  await new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  })
}
