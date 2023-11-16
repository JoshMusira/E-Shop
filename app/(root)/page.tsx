import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <main className="p-6">
            <UserButton afterSignOutUrl='/' />
            <Button className="P-5">Click me</Button>
        </main>
    )
}
