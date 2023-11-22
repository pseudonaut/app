
import { Github, Twitter } from "@/components/shared/icons";

import {getTranslations} from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Home');
  return (
    <div className="absolute w-full border-t border-gray-200 py-5 text-center">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm mt-2">
            {t('Embrace')}
          </p>
        </div>
    </div>
  );
}
