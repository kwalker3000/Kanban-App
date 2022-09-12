import React from 'react'

type BtnProp = {
  action: string
  btnText: string
}

// NOT USING, USING <BTN /> INSTEAD

// export const SubTaskBtn = ({ action, btnText }: BtnProp): JSX.Element => {
//   const [act, _] = action.split(' ')
//   return (
//     <button className="subtask__btn">
//       {act == 'add' && (
//         <span>
//           <svg xmlns="http://www.w3.org/2000/svg">
//             <path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
//           </svg>
//         </span>
//       )}
//       <span className="subtask__btn-text">{btnText}</span>
//     </button>
//   )
// }
