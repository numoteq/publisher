export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import { MantineWrapper } from '@gitroom/react/helpers/mantine.wrapper';
import { Toaster } from '@gitroom/react/toaster/toaster';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MantineWrapper>
      <Toaster />
      <div className="bg-[#0E0E0E] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
        <ReturnUrlComponent />
        <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[600px] lg:flex-none rounded-[12px] text-white p-[12px] bg-[#1A1919]">
          <div className="w-full max-w-[440px] mx-auto justify-center gap-[20px] h-full flex flex-col text-white">
            <LogoTextComponent />
            <div className="flex">{children}</div>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex flex-col items-center justify-center gap-[16px] text-center px-[40px]">
          <div className="text-[36px]">
            Plan and publish your social media
            <br />
            <span className="text-[#73F4F6]">across every network at once</span>
          </div>
          <div className="text-[16px] text-[#A3A3A3]">
            NUMOTEQ Publisher by{' '}
            <a href="https://www.numoteq.com" className="underline">
              NUMOTEQ s.r.o.
            </a>
          </div>
          <div className="text-[12px] text-[#737373]">
            Open source under AGPL-3.0.{' '}
            <a href="https://github.com/numoteq/publisher" className="underline">
              Source code
            </a>
          </div>
        </div>
      </div>
    </MantineWrapper>
  );
}
