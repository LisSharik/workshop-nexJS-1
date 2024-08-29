'use client';

import { useState } from 'react';

export default function NavigationTabs({ tabs }: { tabs: string[] }) {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="flex justify-center items-center gap-10 text-xl">
            {tabs.map((tab, index) => (
                <h3
                    key={index}
                    className={`cursor-pointer ${
                        selectedTab === tab
                            ? 'font-medium border-b-2 py-1 border-black'
                            : 'text-neutral-500'
                    }`}
                    onClick={() => setSelectedTab(tab)}
                >
                    {tab}
                </h3>
            ))}
        </div>
    );
}
