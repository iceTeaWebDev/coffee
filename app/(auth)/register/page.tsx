import React from 'react'
import { getServerSession } from "next-auth/next"
const  page = async () => {
  const session  = await getServerSession ();
  console.log(session)
  return (
    <pre>{JSON.stringify(session, null, 2)}</pre>
  )
}

export default page