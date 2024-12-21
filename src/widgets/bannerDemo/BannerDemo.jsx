import { useState } from 'react';
import { Eclipse } from "lucide-react";
import { useTranslation } from 'react-i18next';

function BannerDemo() {
  const { t } = useTranslation();
  // Replace with actual authentication logic to check user status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    !isLoggedIn && (
      <div className="dark bg-muted px-4 py-3 text-foreground">
        <p className="text-center text-sm">
          <Eclipse
            className="-mt-0.5 me-3 inline-flex opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          {t('translation:message')}
          <span className="text-muted-foreground">·</span>{" "}
          <a href="/login" className="font-medium underline hover:no-underline">
            {t('translation:login')}
          </a>
        </p>
      </div>
    )
  );
}

export default BannerDemo;
