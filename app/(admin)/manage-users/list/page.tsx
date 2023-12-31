import React, { Fragment } from 'react'
import ListUsers from '../_components/ListUsers'
import { fetchListUsersAction } from '@/app/lib/actions/userAction'
import { Metadata } from 'next';

interface pageProps {
	searchParams: { [key: string]: string | string[] | undefined }
  }
  
  export async function generateMetadata(): Promise<Metadata> {
 
	return {
	  title:`Moveek list users`
	};
  } 
const page = async ({searchParams}:pageProps) => {
	const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
	const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10
	const keyword = typeof searchParams.keyword === 'string' ? searchParams.keyword : undefined
	const dataListUsers = await fetchListUsersAction(page,limit,keyword)
	
  return (
	<Fragment>
    <div className="text-xl tracking-wide mb-5 font-semibold">
     List users
    </div>
	<ListUsers dataListUsers={dataListUsers} keyword={keyword} />
  </Fragment>
	
  )
}

export default page