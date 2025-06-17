"use client";

import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Modal from "./Modals/Modal";

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
const amount = 999; // $9.99 in cents
const currency = "USD";

export default function BuyBook() {
    const [email, setEmail] = useState("");
    const [showPaystack, setShowPaystack] = useState(false);
    const [modal, setModal] = useState<{ open: boolean; title?: string; message?: string }>({ open: false });


    const handleBuyClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setModal({
                open: true,
                title: "Invalid Email",
                message: "Please enter a valid email address.",
            });
            return;
        }
        setShowPaystack(true);
    };

    const componentProps = {
        email,
        amount,
        currency,
        publicKey,
        text: "Proceed to Payment",
        onSuccess: () => setModal({
            open: true,
            title: "Payment Successful",
            message: "Payment successful! Check your email for the book.",
        }),
        onClose: () => setShowPaystack(false),
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border px-4 py-2 rounded"
            />
            {!showPaystack ? (
                <button
                    onClick={handleBuyClick}
                    className="px-6 py-3 bg-blue-600 text-white rounded font-semibold"
                >
                    Buy Now for $9.99
                </button>
            ) : (
                <PaystackButton {...componentProps} />
            )}
            <Modal
                open={modal.open}
                title={modal.title}
                onClose={() => setModal({ open: false })}
            >
                {modal.message}
            </Modal>
        </div>
    );
}