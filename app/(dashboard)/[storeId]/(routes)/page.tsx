import prismadb from "@/lib/prismadb"

interface DashboardProps {
    params: { storeId: string }

}

const Dashboardpage: React.FC<DashboardProps> = async ({ params }) => {

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })
    return (
        <div>Active Store is: {store?.name}</div>
    )
}

export default Dashboardpage