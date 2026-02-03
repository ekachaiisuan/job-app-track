'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { useState } from 'react';

export default function ImageTab() {
  const [activeTab, setActiveTab] = useState('organize');
  return (
    <section className="border-t border-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab('organize')}
              variant={activeTab === 'organize' ? 'default' : 'outline'}
            >
              Organize Application
            </Button>
            <Button
              onClick={() => setActiveTab('gethired')}
              variant={activeTab === 'gethired' ? 'default' : 'outline'}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab('manageboards')}
              variant={activeTab === 'manageboards' ? 'default' : 'outline'}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200">
            {activeTab === 'organize' && (
              <Image
                src="/hero/hero1.png"
                width={1200}
                height={800}
                alt="Organize"
              ></Image>
            )}

            {activeTab === 'gethired' && (
              <Image
                src="/hero/hero2.png"
                width={1200}
                height={800}
                alt="Get Hired"
              ></Image>
            )}

            {activeTab === 'manageboards' && (
              <Image
                src="/hero/hero3.png"
                width={1200}
                height={800}
                alt="Manage Boards"
              ></Image>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
