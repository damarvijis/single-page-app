import { constData } from "../internal/const"

const Pagination = (currentPage: number, totalData: number, action: (page: number) => void) => {
  const div = document.createElement("div")
  div.style.display = "flex"
  div.style.flexDirection = "row"
  div.style.gap = "5px"
  div.style.justifyContent = "center"
  div.style.alignItems = "center"

  const pages = []
  const totalPage = Math.floor(totalData / constData.limit)
  for (let i = 1; i <= totalPage; i++) {
    const button = document.createElement("button")
    if (i == currentPage) {
      button.style.backgroundColor = "red"
    }
    button.textContent = i.toString()
    button.onclick = () => action(i)
    pages.push(button)
  }

  div.append(...pages)

  return div
}

export default Pagination