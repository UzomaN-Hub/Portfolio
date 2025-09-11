import { space } from "@/app/font";

export default function Footer() {
    return (
        <footer className={`${space.className} antialiased border-t border-oil-brown text-amber-50 bg-dark-oil-brown py-6`}>
            <div className="container mx-auto text-left px-4">
                <p>Uzoma Nwaiwu &copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}
