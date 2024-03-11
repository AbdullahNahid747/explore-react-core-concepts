// export default function Todo ({task, isDone}){
//     return (
//         <div>
//             <li>Task {task}</li>
//         </div>
//     )
// }


// export default function Todo ({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task} </li>
//     }
//     else{
//         return <li> Work on: {task
//         }</li>
//     }
// }

// export default function Todo ({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task} </li>
//     }
//      return <li> Work on: {task}</li>
// }

// export default function Todo ({task, isDone}){
//     return (
//         <li>{isDone} ? 'Finished' : 'Work on' {task} </li>
//     )
// }

// export default function Todo ({task, isDone}){
//     return (
//         <div>
//             <li> {task} {isDone && ': Done'} </li>
//         </div>
//     )
// }


// export default function Todo ({task, isDone}){
//     return (
//         <div>
//             <li> {task} {isDone || ': Do it'} </li>
//         </div>
//     )
// }

export default function Todo ({task, isDone}){
    let listItem;
        if(isDone === true){
             listItem = <li>Finished: {task} </li>
        }
        else{
             listItem = <li> Work on: {task
            }</li>
        }
    }