import { useConfirmModal } from '@affine/component';
import { useI18n } from '@affine/i18n';
import { useMemo } from 'react';
// import { message }

export const useNavConfig = () => {
  const t = useI18n();
  const { openConfirmModal } = useConfirmModal();
  return useMemo(
    () => [
      {
        title: t['com.huohua.website'](),
        action: (e: any) => {
          e.preventDefault();
          // notify.success({
          //   title: t['com.huohua.website.missing'](),
          // });
          // toast(t['com.huohua.website.missing']())
          openConfirmModal({
            onCancel: false,
            confirmText: t['Got it'](),
            title: t['tips'](),
            children: t['com.huohua.website.missing'](),
            onConfirm: () => {
              console.log('Confirmed');
            },
          });
        },
      },
      {
        title: t['com.affine.other-page.nav.blog'](),
        path: 'https://affine.pro/blog',
      },
      {
        title: t['com.affine.other-page.nav.contact-us'](),
        path: 'https://affine.pro/about-us',
      },
    ],
    [t]
  );
};
