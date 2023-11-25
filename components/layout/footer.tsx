
import { Github, Twitter } from "@/components/shared/icons";

import {getTranslations} from 'next-intl/server';
import Image from "next/image";

export default async function Footer() {
  const t = await getTranslations('Home');
  return (
    <div className="absolute w-full border-t border-gray-200 py-5 text-center">
        <div className="container mx-auto text-center">
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Image
            src="/SNLogoClear.png"
            alt="SN logo"
            width="150"
            height="150"
            className="animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          ></Image>
          </div>
          
          <p className="text-gray-500 text-xs mt-2">
            <i>SOLIDITYNIRVANA LLC © 2023 </i>
            <br />
            <a href="/terms" className="text-gray-400 hover:text-orange-600">Terms of Use</a> - <a href="/privacy" className="text-gray-400 hover:text-green-500">Privacy Policy</a> - <a href="mailto:hello@soliditynirvana.com" className="text-gray-400 hover:text-cyan-600"> Contact</a>
          </p>
          <br />
          <p className="text-gray-500 text-sm mt-2">
            {t('Embrace')}
          </p>

        </div>
    </div>
  );
}
