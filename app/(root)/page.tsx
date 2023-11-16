'use client'
// import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
// import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main className="p-6">
            {/* <UserButton afterSignOutUrl='/' /> */}
            <Modal title='Eshop' description='Testing the store' isOpen onClose={() => { }}>
                children
            </Modal>
        </main>
    )
}
