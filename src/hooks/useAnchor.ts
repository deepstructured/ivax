export const useAnchor = (id: string) => {
  const target = document.querySelector(id) as HTMLDivElement

  window.scrollTo({
    left: 0,
    top: target.offsetTop,
    behavior: 'smooth',
  })
}
