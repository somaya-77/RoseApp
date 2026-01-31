'use client'
import { useState } from "react";
import { Notification, NotificationsResponse } from "@/lib/types";

// Mock API Response
const MOCK_RESPONSE: NotificationsResponse = {
    data: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: "Your Order Has Been Shipped",
        description:
            "Your order #12345 has been shipped and will arrive in 2-3 business days.",
        read: i % 3 === 0,
    })),
};

export const UseNotificationsHook = () => {
    // notifications per page
    const PAGE_SIZE = 5;

    // whether there are more notifications to load
    const [hasMore, setHasMore] = useState(true);

    // current notifications state
    const [notifications, setNotifications] = useState<Notification[]>(
        MOCK_RESPONSE.data.slice(0, PAGE_SIZE)
    );

    // Simulates API fetching more items
    const fetchMoreNotifications = () => {
        const currentLength = notifications.length;
        const nextItems = MOCK_RESPONSE.data.slice(
            currentLength,
            currentLength + PAGE_SIZE
        );

        // simulate API delay
        setTimeout(() => {
            setNotifications((prev) => [...prev, ...nextItems]);

            if (currentLength + nextItems.length >= MOCK_RESPONSE.data.length) {
                setHasMore(false);
            }
        }, 500);
    };

    return { notifications, fetchMoreNotifications, hasMore }
}

