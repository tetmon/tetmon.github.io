'use client'

import React, {useEffect} from 'react'

export function ChatwootWidget () {
  useEffect(() => {
    // @ts-expect-error
    window.chatwootSettings = {
      position: 'right',
      type: 'standard',
      // launcherTitle: 'Chat with us',
    }
    const loadChatwoot = () => {
      const BASE_URL = "https://chat.tetmon.com";
      const script = document.createElement('script');
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        // @ts-expect-error
        if (window.chatwootSDK) {
          // @ts-expect-error
          window.chatwootSDK.run({
            websiteToken: '7E2M9dt4xABs7NdWPkgXuUbe',
            baseUrl: BASE_URL,
          });
        }
      }

      document.body.appendChild(script)
    }
    loadChatwoot()
  }, [])

  return null;
}
