import { Link, Head } from '@inertiajs/react';
import React from 'react';

const Dashboard = () => {



  return (
    <React.Fragment>
      <Head title='User|Dashboard'/>
      <h1>Welcome to User Dashboard</h1>
      <Link href={route('user.logout')} method="post" as='button' className="btn btn-default btn-flat float-right">
                Sign out
              </Link>
    </React.Fragment>
  )
}

export default Dashboard
