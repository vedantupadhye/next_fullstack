import React from 'react'
import { fetchOwner } from '../lib/data'
import styles from './test.module.css'
import { Owner } from '../lib/models'

const page = async() => {
  const  owners = await fetchOwner()
  console.log(owners)
  return (
    <div>
     <table className='tab'> 
        <thead>
            <tr>
                <th>title</th>
                <th>name</th>
                <th>prize</th>
            </tr>
        </thead>
        <tbody>
        {owners.map((owner) => (
            <tr key={owner.id}>
              <td>{owner.title}</td>
              <td>{owner.name}</td>
              <td>{owner.price}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
}

export default page

// import React from 'react'
// import { fetchOwner } from '../lib/data'

// const Page = async () => {
//   const owners = await fetchOwner()

//   console.log(owners)
//   return (
//     <div>
//       {owners.map(owner => (
//         <div key={owner.id}>
//           <h1>{owner.title}</h1>
//           <h1>{owner.name}</h1>
//           <h1>{owner.price}</h1>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Page
