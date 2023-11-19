import prismadb from "@/lib/prismadb";
import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { MainNav } from "./MainNav";


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
                <div>
                    <MainNav className='mx-6' />
                </div>
                <div>
                    The routes
                </div>
                <div className='ml-auto flex items-center space-x-4'>
                    <UserButton />
                </div>

            </div>

        </div>
    )
}

export default Navbar