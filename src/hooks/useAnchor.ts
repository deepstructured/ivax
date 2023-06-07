export const useAnchor = (id: string) => {
  if (id === '0') {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })

    return
  }

  const target = document.querySelector(id) as HTMLDivElement

  window.scrollTo({
    left: 0,
    top: target.offsetTop,
    behavior: 'smooth',
  })
}
