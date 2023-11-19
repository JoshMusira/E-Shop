import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { MainNav } from "@/components/MainNav";
import StoreSwitcher from "@/components/StoreSwitcher";


const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        }
    });

    return (
        <div className='borader-b'>
            <div className='flex  h-16 items-center px-4'>

                <StoreSwitcher items={stores} />
                <MainNav className='mx-6' />

                <div className='ml-auto flex items-center space-x-4'>
                    <UserButton afterSignOutUrl="/" />
                </div>

            </div>

        </div>
    )
}

export default Navbar