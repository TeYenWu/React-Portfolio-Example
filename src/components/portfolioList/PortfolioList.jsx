import { act } from 'react-dom/test-utils'
import './portfolioList.scss'


export default function PortfolioList({title, active, setSelected, id}) {
  return (
    <li  key={id} className={active?"portfolioList active": "portfolioList"} onClick={()=>setSelected(id)}>{title}</li>
  )
}

// 1. fixed error in portfolioList by adding @ before import and importing portfolioList
// export default function PortfolioList({title, id}) {
//   return (
//     <li  key={id} className="portfolioList">{title}</li>
//   )
// }

